'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <h1 className="text-2xl font-bold text-white">ShortLink</h1>
          <a
            href="/"
            className="text-white/90 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/10"
          >
            ← Back to Home
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 flex-1">
        <section className="mb-12">
          <div className="bg-white/80 rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Get in touch</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Questions, feedback or ideas? Drop a message and we'll reply soon.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-6 shadow-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                    <span className="text-blue-600">📧</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Email</div>
                    <div className="font-medium break-words">support@shortlink.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                    <span className="text-green-600">⏱️</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Response time</div>
                    <div className="font-medium">Within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                    <span className="text-purple-600">🌐</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Support</div>
                    <div className="font-medium">24/7 Available</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Quick Help</h3>
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="font-medium text-white">How do I create a short URL?</p>
                  <p className="text-sm mt-1 text-blue-100">Paste the link and click "Generate Link".</p>
                </div>

                <div className="bg-white/10 rounded-lg p-3">
                  <p className="font-medium text-white">Can I set a custom alias?</p>
                  <p className="text-sm mt-1 text-blue-100">Yes — enter your desired alias when creating the link. If it's taken, try a small variation.</p>
                </div>

                <div className="bg-white/10 rounded-lg p-3">
                  <p className="font-medium text-white">Do short links expire?</p>
                  <p className="text-sm mt-1 text-blue-100">Links remain active unless you delete them or they are removed for policy reasons.</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg border border-blue-100 p-6 sm:p-8">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg flex items-center gap-3">
                  <span className="text-green-600 text-xl">✅</span>
                  <p className="text-green-800 text-sm sm:text-base">Thanks — we'll get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="What should we call you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-y"
                    placeholder="Tell us more about your question or concern..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                      Sending Message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-lg border border-blue-200 p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need immediate help?</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Check our <a href="/help" className="text-blue-600 hover:underline">help center</a> for instant answers to common questions.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 mt-12 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-white text-sm sm:text-base">
          <p>Made with ❤️ for simpler links • ShortLink © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
