import React from 'react';
import { Calendar, Clock, Users, Award } from 'lucide-react';

const TrainingHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 -mx-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Intensive Hands-On HR Training
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-4">
            Are you an aspiring or practicing HR professional looking to bridge the gap between theory and real-life HR practice? 
            Join our virtual intensive hands-on training designed to equip you with practical tools and confidence to succeed in any HR role.
          </p>
          <div className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-bold inline-block mb-4">
            Price: ₦120,000
          </div>
          <p className="text-blue-200">Second Edition - Virtual Training</p>
        </div>

        {/* Training Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* <div className="bg-white/10 backdrop-blur p-8 rounded-xl text-center">
            <Calendar className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Start Date</h3>
            <p className="text-blue-100">2nd August, 2025</p>
            <p className="text-sm text-blue-200">Saturday Only</p>
          </div> */}
          <div className="bg-white/10 backdrop-blur p-8 rounded-xl text-center">
            <Clock className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Time</h3>
            <p className="text-blue-100">10am - 1pm</p>
            <p className="text-sm text-blue-200">Weekly sessions</p>
          </div>
          <div className="bg-white/10 backdrop-blur p-8 rounded-xl text-center">
            <Users className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Format</h3>
            <p className="text-blue-100">Virtual Training</p>
            <p className="text-sm text-blue-200">Online sessions</p>
          </div>
          <div className="bg-white/10 backdrop-blur p-8 rounded-xl text-center">
            <Award className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Duration</h3>
            <p className="text-blue-100">12 Weeks</p>
            <p className="text-sm text-blue-200">Comprehensive program</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHero;