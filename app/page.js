import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <>
    <main className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 h-[50vh] md:h-[80vh] max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col justify-center items-center text-center gap-6 py-8 md:py-0">
          <div className="space-y-4">
            <p className="font-extrabold text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              The Best URL Shortener For Your Business
            </p>
            <p className="text-gray-600 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
              Create your own custom link shortener with ease. Fast, reliable, and perfect for your marketing needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/shorten">
              <button className="group cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 min-w-[140px]">
                <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                Try Now
              </button>
            </Link>
            <Link href="https://github.com/Parmartushar10/shortlink">
              <button className="group cursor-pointer bg-gray-800 hover:bg-gray-900 shadow-xl hover:shadow-2xl px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-gray-600 flex items-center justify-center gap-2 min-w-[140px]">
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                </svg>
                GitHub
              </button>
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free to use</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Custom aliases</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Analytics ready</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-start relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl group">
          <Image 
            className="mix-blend-darken group-hover:scale-105 transition-transform duration-700 object-cover" 
            src="/office.jpg" 
            fill={true} 
            alt="Office Image"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          
          {/* Floating stats cards */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-bounce">
            <div className="text-center">
              <div className="font-bold text-lg text-indigo-600">⚡</div>
              <div className="text-xs text-gray-600">Blazing Speed</div>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-pulse">
            <div className="text-center">
              <div className="font-bold text-lg text-emerald-600">🌍</div>
              <div className="text-xs text-gray-600">Trusted by Teams</div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional features section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Changed Feature */}
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Custom Branding</h3>
              <p className="text-gray-600 text-sm">Personalize your links with your own domain for a professional touch.</p>
            </div>
            
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Analytics</h3>
              <p className="text-gray-600 text-sm">Track clicks, locations, and performance with detailed analytics.</p>
            </div>
            
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Secure</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade security with SSL encryption and spam protection.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
