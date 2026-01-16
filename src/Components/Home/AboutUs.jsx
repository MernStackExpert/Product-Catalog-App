"use client"
import { FaCheckCircle, FaAward } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <section className="pt-20 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Image Gallery Style */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
                alt="Fresh Produce" 
                className="rounded-[3rem] shadow-2xl border-8 border-base-100 relative z-20"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 bg-primary text-white p-8 rounded-[2rem] shadow-2xl z-30 hidden md:block animate-bounce-slow">
                <div className="text-4xl font-black italic">10+</div>
                <div className="text-sm font-medium uppercase tracking-tighter">Years of Freshness</div>
              </div>
            </div>
            {/* Background Decorative Element */}
            <div className="absolute top-10 -left-10 w-full h-full bg-green-100 rounded-[3rem] -rotate-6 z-0"></div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">About FreshUp</span>
              <h2 className="text-4xl md:text-5xl font-black text-base-content leading-tight">
                Bringing the Farm Experience <br />
                <span className="text-primary text-3xl md:text-4xl">Directly to Your Kitchen.</span>
              </h2>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed">
              At **FreshUp**, we believe everyone deserves access to high-quality, organic, and fresh groceries. Started with a mission to bridge the gap between local farmers and your dining table, we ensure every item is hand-picked and quality-checked.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-primary shrink-0">
                  <FaCheckCircle className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Quality Guaranteed</h4>
                  <p className="text-gray-500">Only the freshest products pass our rigorous 5-step quality check.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-secondary shrink-0">
                  <FaAward className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Locally Sourced</h4>
                  <p className="text-gray-500">We partner with local farmers to support the community and reduce carbon footprint.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="btn btn-primary btn-lg rounded-full px-10 shadow-lg hover:shadow-primary/40 transition-all">
                Discover Our Story
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}