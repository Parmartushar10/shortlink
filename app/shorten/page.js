"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState(false)
    const [popup, setPopup] = useState(false) // ✅ added popup state

    const generate = () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "url": url,
        "shorturl": shorturl
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => { 
          setgenerated(`${process.env.NEXT_PUBLIC_BASE_URL}/${shorturl}`)
          seturl("")
          setshorturl("")
          console.log(result)
          alert("result.message")
      })
        .catch((error) => console.error(error));
    }

    const handleCopy = () => {
      navigator.clipboard.writeText(generated)
      setPopup(true)
      setTimeout(() => setPopup(false), 2000) // auto-hide after 2s
    }
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-8 relative">
        <div className="max-w-4xl mx-auto">
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-10 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Generate your short link here
            </h1>
            <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
                Transform your long URLs into short, shareable links in seconds. Perfect for social media, emails, and marketing campaigns.
            </p>
            
            <div className='w-full max-w-2xl mx-auto bg-white shadow-2xl border border-gray-100 my-16 p-8 md:p-12 rounded-3xl'>
                <div className="space-y-6">
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Long URL</label>
                        <input 
                            type="text" 
                            placeholder='Enter your long URL here'  
                            className='w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-700 placeholder-gray-400 shadow-sm hover:shadow-md'  
                            onChange={e =>{seturl(e.target.value)}} 
                            value={url}
                        />
                        <div className="absolute right-3 top-9 text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                            </svg>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Custom Short URL (Optional)</label>
                        <input 
                            type="text" 
                            placeholder='Enter your preferred short URL text' 
                            className='w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-700 placeholder-gray-400 shadow-sm hover:shadow-md'
                            onChange={e =>{setshorturl(e.target.value)}} 
                            value={shorturl}
                        />
                        <div className="absolute right-3 top-9 text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                            </svg>
                        </div>
                    </div>
                    
                    <button 
                        onClick={generate} 
                        className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 text-lg'
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        Generate Link
                    </button>
                </div>
            </div>
            
            {generated && (
                <div className="max-w-2xl mx-auto mt-8">
                    <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 md:p-8 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <span className='font-bold text-xl text-green-800'>Your Link is Ready!</span>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 border border-green-200 shadow-sm">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <code className="flex-1 text-blue-600 font-mono text-sm sm:text-base break-all bg-blue-50 px-3 py-2 rounded-lg">
                                    <Link target="_blank" href={generated} className="hover:text-blue-800 transition-colors">
                                        {generated}
                                    </Link>
                                </code>
                                <button 
                                    onClick={handleCopy}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 text-sm whitespace-nowrap"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                    </svg>
                                    Copy
                                </button>
                            </div>
                        </div>
                        
                        <p className="text-green-700 text-sm mt-4 text-center">
                            🎉 Share your short link anywhere! It's ready to use.
                        </p>
                    </div>
                </div>
            )}
        </div>

        {/* ✅ Popup */}
        {popup && (
          <div className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg text-sm md:text-base">
            ✅ Link copied to clipboard!
          </div>
        )}
    </div>
  )
}

export default Shorten
