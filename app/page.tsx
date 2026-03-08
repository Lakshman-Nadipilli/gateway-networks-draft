import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import OTTSection from '@/components/OTTSection';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <OTTSection />
      <ContactUs />
      <Footer />

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:scale-110 transition-transform cursor-pointer">
          <span className="text-2xl">💬</span>
        </button>
      </div>
    </main>
  );
}
