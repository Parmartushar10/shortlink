export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Help Center</h1>
        <p className="text-gray-600 mb-8">
          Welcome to the Help Center. Here you&apos;ll find answers to common questions
          and guides on using ShortLink.
        </p>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100">
            <h2 className="text-xl font-semibold text-gray-800">🔗 Creating Short Links</h2>
            <p className="text-gray-600 mt-2">
              Paste your long URL into the box on the home page and click &quot;Generate Link&quot;.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100">
            <h2 className="text-xl font-semibold text-gray-800">⚡ Custom Aliases</h2>
            <p className="text-gray-600 mt-2">
              You can set your own alias, but if it&apos;s already taken, try a variation.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100">
            <h2 className="text-xl font-semibold text-gray-800">❓ Expiration</h2>
            <p className="text-gray-600 mt-2">
              Your short links stay active unless you delete them or they are removed for policy reasons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}