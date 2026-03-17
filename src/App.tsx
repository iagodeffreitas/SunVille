import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Differentials } from './components/Differentials';
import { Condominium } from './components/Condominium';
import { Location } from './components/Location';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <Hero />
      <Features />
      <Gallery />
      <Differentials />
      <Condominium />
      <Location />
      <LeadForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
