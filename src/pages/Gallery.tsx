import React from 'react';
import GalleryHero from '../components/gallery/GalleryHero';
import EventHighlights from '../components/gallery/EventHighlights';
import PhotoGallery from '../components/gallery/PhotoGallery';
import StatsSection from '../components/gallery/StatsSection';

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <GalleryHero />
      <EventHighlights />
      <PhotoGallery />
      <StatsSection />
    </div>
  );
};

export default Gallery;