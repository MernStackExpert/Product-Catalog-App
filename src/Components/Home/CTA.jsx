"use client"
import { FaPaperPlane, FaStore, FaApple, FaGooglePlay, FaGift } from 'react-icons/fa';

export default function CTA() {
  return (
    <section className="py-12 md:py-24 bg-base-100">
      {/* Mobile view a full width rakhar jonno px-0 use kora hoyeche */}
      <div className="container mx-auto px-0 md:px-6">
        <div className="relative bg-primary md:rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/30">
          
          {/* Decorative Background Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-10 md:p-16 lg:p-20 gap-12">
            
            <div className="w-full lg:w-3/5 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-black/10 px-5 py-2.5 rounded-full text-white text-xs md:text-sm font-bold backdrop-blur-md border border-white/10">
                <FaGift className="animate-pulse" /> <span>Exclusive Offer for New Members</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
                Ready to Fresh Up <br /> 
                <span className="text-black/20">Your Daily Kitchen?</span>
              </h2>
              
              <p className="text-primary-content/90 text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
                Join <span className="text-white font-bold underline decoration-wavy">FreshUp</span> today. Subscribe to our newsletter and get <span className="font-bold text-white bg-black/20 px-2 py-1 rounded-lg">20% OFF</span> on your first order.
              </p>

              <form 
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0 pt-4" 
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative flex-grow group">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="input input-lg w-full rounded-2xl border-none focus:ring-4 focus:ring-black/10 text-base-content shadow-inner h-16" 
                    required
                  />
                </div>
                <button className="btn btn-lg btn-neutral rounded-2xl px-10 shadow-2xl group h-16 border-none hover:scale-105 transition-all">
                  Get Started <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="bg-white/10 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] border border-white/20 text-center shadow-inner">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <FaStore className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Shop on the Go</h3>
                <p className="text-white/70 text-sm mb-8">Download our mobile app for a faster and smoother shopping experience.</p>
                
                <div className="flex flex-col gap-4">
                  <button className="btn bg-black hover:bg-zinc-900 text-white border-none rounded-2xl flex items-center justify-start gap-4 px-8 h-20 w-full transition-all hover:translate-y-[-2px]">
                    <FaApple className="text-4xl" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase opacity-50 tracking-widest">Available on</div>
                      <div className="text-lg font-bold leading-none">App Store</div>
                    </div>
                  </button>
                  
                  <button className="btn bg-black hover:bg-zinc-900 text-white border-none rounded-2xl flex items-center justify-start gap-4 px-8 h-20 w-full transition-all hover:translate-y-[-2px]">
                    <FaGooglePlay className="text-3xl" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase opacity-50 tracking-widest">Get it on</div>
                      <div className="text-lg font-bold leading-none">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}