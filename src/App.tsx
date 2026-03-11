/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Bed, 
  Bath, 
  Waves, 
  Bike, 
  Utensils, 
  MapPin, 
  Calendar, 
  Maximize, 
  Wind, 
  Flame, 
  Coffee, 
  ChefHat, 
  Umbrella, 
  Navigation,
  ExternalLink,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const AIRBNB_URL = "https://www.airbnb.com/rooms/52008276?";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const amenities = [
    { icon: <Waves className="w-6 h-6" />, title: "Private Pool", desc: "Large pool with lanai and grilling area" },
    { icon: <Bed className="w-6 h-6" />, title: "5 King Bedrooms", desc: "Luxury bedding for ultimate comfort" },
    { icon: <Bike className="w-6 h-6" />, title: "10 Bikes", desc: "Explore Marco Island on two wheels" },
    { icon: <Umbrella className="w-6 h-6" />, title: "Beach Ready", desc: "Chairs, coolers, and wagon provided" },
    { icon: <Flame className="w-6 h-6" />, title: "Fire Table", desc: "Propane fire table for cozy evenings" },
    { icon: <Coffee className="w-6 h-6" />, title: "Full Kitchen", desc: "Keurig, blender, and premium appliances" },
    { icon: <ChefHat className="w-6 h-6" />, title: "Grilling Area", desc: "Outdoor grill for al fresco dining" },
    { icon: <Maximize className="w-6 h-6" />, title: "5,000 Sq Ft", desc: "Spacious luxury on over half an acre" },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80", // Pool
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", // Living
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", // Bedroom
    "https://images.unsplash.com/photo-1556911223-e1520288625b?auto=format&fit=crop&w=1200&q=80", // Kitchen
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", // Patio
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", // Beach
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-gold/30">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
          isScrolled ? "bg-sand/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <span className={`text-xl font-serif tracking-widest uppercase ${isScrolled ? "text-ocean" : "text-white"}`}>
              Marco Villa
            </span>
            <span className={`text-[10px] tracking-[0.2em] uppercase opacity-70 ${isScrolled ? "text-ocean" : "text-white"}`}>
              San Marino
            </span>
          </div>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium ${
            isScrolled ? "text-ocean" : "text-white"
          }`}>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#amenities" className="hover:text-gold transition-colors">Amenities</a>
            <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
            <a href="#location" className="hover:text-gold transition-colors">Location</a>
            <a 
              href={AIRBNB_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-6 py-2 border transition-all duration-300 ${
                isScrolled 
                  ? "border-ocean hover:bg-ocean hover:text-white" 
                  : "border-white hover:bg-white hover:text-ocean"
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-ocean" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-ocean" : "text-white"} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-sand flex flex-col items-center justify-center space-y-8 text-xl font-serif uppercase tracking-widest"
        >
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#amenities" onClick={() => setIsMobileMenuOpen(false)}>Amenities</a>
          <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
          <a href="#location" onClick={() => setIsMobileMenuOpen(false)}>Location</a>
          <a 
            href={AIRBNB_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 border border-ocean text-ocean"
          >
            Book Now
          </a>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Villa" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm uppercase tracking-[0.5em] mb-4 font-medium"
          >
            Luxury Living for Your Next Adventure
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl font-serif mb-8 leading-tight"
          >
            Make Your Stay <br /> <span className="italic">Fantastic</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a 
              href={AIRBNB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-10 py-4 bg-white text-ocean uppercase tracking-widest text-xs font-bold hover:bg-gold hover:text-white transition-all duration-300 group"
            >
              <span>Explore Reservation</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-px h-12 bg-white/30 mx-auto mb-2" />
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">The Estate</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-ocean">
              A 5,000 Square Foot <br /> Private Sanctuary
            </h2>
            <p className="text-ocean/70 leading-relaxed mb-8 text-lg">
              Located on over a half acre in the prestigious estate section of Marco Island, 
              Villa San Marino offers unparalleled privacy and luxury. This five-bedroom 
              masterpiece features five King beds, a sprawling lanai, and a professional 
              grilling area, all just minutes from the pristine Florida beaches.
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-ocean/10 pt-8">
              <div>
                <span className="block text-2xl font-serif text-ocean">5,000</span>
                <span className="text-[10px] uppercase tracking-widest text-ocean/50 font-bold">Square Feet</span>
              </div>
              <div>
                <span className="block text-2xl font-serif text-ocean">5</span>
                <span className="text-[10px] uppercase tracking-widest text-ocean/50 font-bold">King Bedrooms</span>
              </div>
              <div>
                <span className="block text-2xl font-serif text-ocean">3.5</span>
                <span className="text-[10px] uppercase tracking-widest text-ocean/50 font-bold">Bathrooms</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            {...fadeIn}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                alt="Villa Exterior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gold p-8 text-white hidden md:block">
              <p className="font-serif text-2xl italic">"The ultimate Marco Island experience."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section id="amenities" className="py-24 px-6 bg-sand">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Everything You Need</span>
            <h2 className="text-4xl md:text-5xl font-serif text-ocean">Curated Amenities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-ocean/5"
              >
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif mb-2 text-ocean">{item.title}</h3>
                <p className="text-ocean/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-ocean text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Visual Journey</span>
              <h2 className="text-4xl md:text-5xl font-serif">Photo Gallery</h2>
            </div>
            <p className="text-white/60 max-w-md">
              A glimpse into the luxury and comfort that awaits you at Villa San Marino. 
              Every corner is designed for your relaxation.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 px-1">
          {galleryImages.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 0.98 }}
              className="aspect-square overflow-hidden cursor-pointer relative group"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize className="text-white w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn} className="order-2 md:order-1">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=771+S+Barfield+Drive+Marco+Island+Florida"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-video bg-sand rounded-2xl overflow-hidden shadow-inner relative group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1544945582-3b466d874eac?auto=format&fit=crop&w=800&q=80" 
                alt="Location Map" 
                className="w-full h-full object-cover opacity-50 grayscale group-hover:scale-105 group-hover:opacity-70 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-full shadow-xl animate-bounce group-hover:scale-110 transition-transform">
                  <MapPin className="text-gold w-8 h-8" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold text-ocean opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-2">
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          </motion.div>
          <motion.div {...fadeIn} className="order-1 md:order-2">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">The Neighborhood</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-ocean">Perfectly Positioned</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-sand rounded-lg text-gold">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-ocean">771 S Barfield Drive</h4>
                  <p className="text-ocean/60 text-sm">Marco Island, Florida</p>
                </div>
              </div>
              <p className="text-ocean/70 leading-relaxed">
                Nestled in the quiet estate section, you're just a 5-minute drive or a 
                leisurely 10-minute bike ride from the world-famous white sand beaches 
                of Marco Island. Boat rentals, championship golf courses, and fine 
                dining are all within easy reach.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-sand rounded-full text-[10px] uppercase tracking-widest font-bold text-ocean/70">5 Min to Beach</span>
                <span className="px-4 py-2 bg-sand rounded-full text-[10px] uppercase tracking-widest font-bold text-ocean/70">Estate Section</span>
                <span className="px-4 py-2 bg-sand rounded-full text-[10px] uppercase tracking-widest font-bold text-ocean/70">Quiet & Private</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 px-6 bg-sand relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ocean/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...fadeIn}>
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Reserve Your Stay</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-ocean">Ready for Paradise?</h2>
            <p className="text-ocean/70 text-lg mb-12 max-w-2xl mx-auto">
              Average nightly rate starts at $1,000 with a 3-night minimum. 
              Monthly discounts available for extended escapes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={AIRBNB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-5 bg-ocean text-white uppercase tracking-widest text-xs font-bold hover:bg-gold transition-all duration-300 shadow-xl"
              >
                Book via Airbnb
              </a>
              <a 
                href="mailto:contact@marcovillasanmarino.com"
                className="w-full sm:w-auto px-12 py-5 border border-ocean text-ocean uppercase tracking-widest text-xs font-bold hover:bg-ocean hover:text-white transition-all duration-300"
              >
                Inquire Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <span className="text-2xl font-serif tracking-widest uppercase block mb-2">Marco Villa</span>
              <span className="text-[10px] tracking-[0.2em] uppercase opacity-50 block mb-6">San Marino</span>
              <p className="text-white/50 max-w-sm text-sm leading-relaxed">
                Experience the pinnacle of luxury living on Marco Island. 
                Our private estate offers the perfect blend of comfort, 
                privacy, and coastal elegance.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-6 text-gold">Quick Links</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#about" className="hover:text-white transition-colors">The Villa</a></li>
                <li><a href="#amenities" className="hover:text-white transition-colors">Amenities</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-6 text-gold">Contact</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4" />
                  <span>Marco Island, FL</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4" />
                  <span>3 Night Minimum</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/30">
            <p>© 2026 Marco Villa San Marino. All Rights Reserved.</p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
