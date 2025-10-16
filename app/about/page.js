export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <nav className="flex justify-between items-center mb-16">
          <a
            href="/"
            className="text-cyan-600 hover:text-cyan-800 font-medium transition-colors border border-cyan-300 px-4 py-2 rounded-lg hover:border-cyan-500"
          >
            ← Back to ShortLink
          </a>
        </nav>

        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            ShortLink made
            <span className="block bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              beautifully simple
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Turn those long, messy URLs into clean, shareable links that just work. 
            No fuss, no tracking, no nonsense.
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-md border border-pink-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Beautifully Simple</h3>
            <p className="text-gray-600">
              No clutter, no distractions — just clean, short links that look great anywhere.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Light Speed</h3>
            <p className="text-gray-600">
              Shorten links in a blink — fast, reliable, and always ready.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-green-200 to-emerald-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl">∞</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Forever</h3>
            <p className="text-gray-600">
              No hidden fees, no upsells — just a tool that will always stay free.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center mb-20">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 shadow-xl w-full md:w-auto">
            <div className="grid grid-cols-2 gap-10 md:gap-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">0s</div>
                <div className="text-cyan-100 font-medium">Wait Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">∞</div>
                <div className="text-cyan-100 font-medium">Free Forever</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why this exists</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Honestly, we got tired of URL shorteners that track everything you do or try to upsell you on features you don't need. 
            So we built something that just works — fast, clean, and respectful of your privacy. 
            Sometimes the simplest solutions are the best ones.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to clean up your links?
          </h3>
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Shortening Now
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-50 to-gray-100 mt-20 py-12 text-center border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-900 text-lg">
            Built for people who just want their links shorter
          </p>
          <p className="text-gray-600 mt-2">
            No tracking, no cookies, no funny business
          </p>
          <p className="text-gray-400 mt-6 text-sm">
            Made with ❤️ for simpler links • {new Date().getFullYear()} ShortLink. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
