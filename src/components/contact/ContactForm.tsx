import { useEffect, useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { services } from '../../content/services';
import { contact } from '../../content/site';
import { track } from '../../lib/analytics';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

type Fields = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};
type FieldName = keyof Fields;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const serviceOptions = [...services.map((s) => s.title), 'HR Training', 'Other'];

const validate = (name: FieldName, value: string) => {
  if (name === 'name' && !value.trim()) return 'Please enter your name.';
  if (name === 'email') {
    if (!value.trim()) return 'Please enter your email address.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address, e.g. name@company.com.';
  }
  if (name === 'message' && value.trim().length < 10) return 'Please tell us a little about what you need (at least 10 characters).';
  return '';
};

const required: FieldName[] = ['name', 'email', 'message'];

const inputClass = (invalid: boolean) =>
  `block w-full rounded-lg border bg-white px-3.5 py-3 text-[15px] text-ink placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 ${
    invalid ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-line focus:border-brand-600 focus:ring-brand-100'
  }`;

const ContactForm = () => {
  const [params] = useSearchParams();
  const [fields, setFields] = useState<Fields>({ name: '', email: '', company: '', phone: '', service: '', message: '' });

  // Pre-select the service a visitor came from (?service=slug). Done after mount so the
  // pre-rendered HTML, which has no query string, still matches on hydration.
  const serviceParam = params.get('service');
  useEffect(() => {
    const title = services.find((s) => s.slug === serviceParam)?.title ?? (serviceParam === 'training' ? 'HR Training' : '');
    if (title) setFields((f) => ({ ...f, service: title }));
  }, [serviceParam]);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    // Clear an error as soon as it's fixed
    if (errors[name as FieldName] && !validate(name as FieldName, value)) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const onBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (required.includes(name as FieldName)) setErrors((er) => ({ ...er, [name]: validate(name as FieldName, value) }));
  };

  const sendViaEmailClient = () => {
    const body = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Company: ${fields.company || 'Not specified'}`,
      `Phone: ${fields.phone || 'Not specified'}`,
      `Service: ${fields.service || 'Not specified'}`,
      '',
      fields.message,
    ].join('\n');
    window.location.href = `mailto:${contact.email}?cc=${contact.emailAlt}&subject=${encodeURIComponent(
      `Enquiry from ${fields.name}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = Object.fromEntries(required.map((n) => [n, validate(n, fields[n])])) as Partial<Record<FieldName, string>>;
    setErrors(next);
    const firstInvalid = required.find((n) => next[n]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    // Spam honeypot: real people never fill this in
    const honeypot = new FormData(e.currentTarget).get('_gotcha');
    if (honeypot) return;

    track('generate_lead', { form: 'contact', service: fields.service || 'none' });

    if (!FORMSPREE_ID) {
      sendViaEmailClient();
      setStatus('success');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, _subject: `Website enquiry from ${fields.name}` }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="flex flex-col items-start rounded-2xl border border-line bg-white p-8 shadow-card">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-success">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
          {FORMSPREE_ID ? 'Thanks, your message is on its way.' : 'Your email is ready to send.'}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          {FORMSPREE_ID
            ? 'Our team will get back to you to arrange your free consultation.'
            : 'We’ve opened your email app with your message filled in. Press send to reach us.'}{' '}
          Prefer to talk? Call{' '}
          <a href={contact.phoneHref} className="font-semibold text-brand-600">
            {contact.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  const field = (name: FieldName, label: string, opts: { type?: string; autoComplete?: string; optional?: boolean } = {}) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label} {opts.optional && <span className="font-normal text-slate-500">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={opts.type ?? 'text'}
        autoComplete={opts.autoComplete}
        value={fields[name]}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        required={!opts.optional}
        className={`mt-1.5 ${inputClass(!!errors[name])}`}
      />
      {errors[name] && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-600">
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
      <h2 className="text-xl font-semibold tracking-tight text-ink">Send us a message</h2>
      <p className="mt-1 text-sm text-slate-500">Fields marked optional can be left blank.</p>

      {status === 'error' && (
        <div role="alert" className="mt-5 flex gap-3 rounded-lg bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          <p>
            Something went wrong sending your message. Please try again, or email us at{' '}
            <a href={`mailto:${contact.email}`} className="font-semibold underline">
              {contact.email}
            </a>
            .
          </p>
        </div>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {field('name', 'Full name', { autoComplete: 'name' })}
        {field('email', 'Work email', { type: 'email', autoComplete: 'email' })}
        {field('company', 'Company', { autoComplete: 'organization', optional: true })}
        {field('phone', 'Phone', { type: 'tel', autoComplete: 'tel', optional: true })}

        <div className="sm:col-span-2">
          <label htmlFor="service" className="block text-sm font-medium text-ink">
            What can we help with? <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <select id="service" name="service" value={fields.service} onChange={onChange} className={`mt-1.5 ${inputClass(false)}`}>
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={fields.message}
            onChange={onChange}
            onBlur={onBlur}
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            placeholder="Tell us about your team and what you need."
            className={`mt-1.5 resize-y ${inputClass(!!errors.message)}`}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-sm text-red-600">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {/* Honeypot, hidden from people and assistive tech */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-button bg-brand-600 px-5 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
};

export default ContactForm;
