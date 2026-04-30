import React from 'react'

const MentorshipHub = () => {
    return (
        <div className='min-h-screen bg-slate-50 p-8'>
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-2">🤝 TKR Mentorship Network</h1>
                <p className="text-slate-600 text-xl max-w-2xl mx-auto">Connect with your seniors and juniors to share knowledge and guidance.</p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                {/* Mentor Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition border border-slate-200">
                    <div className="flex justify-center mb-6">
                        <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 text-3xl font-bold border-4 border-white shadow-sm">
                            AD
                        </div>
                    </div>
                    <h3 className="text-center text-xl font-bold text-slate-900">Alan D’souza</h3>
                    <p className="text-center text-sm text-slate-500 mb-1">Class of '15 • Senior Software Engineer</p>
                    <p className="text-center text-sm text-slate-600 mb-4">Specializing in AI & Machine Learning. Passionate about open-source.</p>

                    <div className="mb-4">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-2">Skills I Can Help With</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-blue-50 text-blue-800 rounded text-xs font-bold">Python</span>
                            <span className="px-2 py-1 bg-blue-50 text-blue-800 rounded text-xs font-bold">TensorFlow</span>
                            <span className="px-2 py-1 bg-blue-50 text-blue-800 rounded text-xs font-bold">Career Switch</span>
                        </div>
                    </div>

                    <button className="w-full bg-blue-900 text-white font-semibold py-3 rounded-xl hover:bg-blue-800 transition">
                        Request Mentorship
                    </button>
                </div>

                {/* Mentor Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition border border-slate-200">
                    <div className="flex justify-center mb-6">
                        <div className="h-24 w-24 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-900 text-3xl font-bold border-4 border-white shadow-sm">
                            SA
                        </div>
                    </div>
                    <h3 className="text-center text-xl font-bold text-slate-900">Sneha Reddy</h3>
                    <p className="text-center text-sm text-slate-500 mb-1">Class of '18 • UX Researcher</p>
                    <p className="text-center text-sm text-slate-600 mb-4">Helping students build design portfolios and break into the SaaS industry.</p>

                    <div className="mb-4">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-2">Skills I Can Help With</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-indigo-50 text-indigo-800 rounded text-xs font-bold">Figma</span>
                            <span className="px-2 py-1 bg-indigo-50 text-indigo-800 rounded text-xs font-bold">UX Research</span>
                            <span className="px-2 py-1 bg-indigo-50 text-indigo-800 rounded text-xs font-bold">Product Design</span>
                        </div>
                    </div>

                    <button className="w-full bg-indigo-900 text-white font-semibold py-3 rounded-xl hover:bg-indigo-800 transition">
                        Request Mentorship
                    </button>
                </div>

                {/* Mentor Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition border border-slate-200">
                    <div className="flex justify-center mb-6">
                        <div className="h-24 w-24 bg-teal-100 rounded-full flex items-center justify-center text-teal-900 text-3xl font-bold border-4 border-white shadow-sm">
                            VK
                        </div>
                    </div>
                    <h3 className="text-center text-xl font-bold text-slate-900">Vivek Kumar</h3>
                    <p className="text-center text-sm text-slate-500 mb-1">Class of '12 • Founder & CEO</p>
                    <p className="text-center text-sm text-slate-600 mb-4">Serial entrepreneur. Available for startup and investment guidance.</p>

                    <div className="mb-4">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-2">Skills I Can Help With</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-teal-50 text-teal-800 rounded text-xs font-bold">Entrepreneurship</span>
                            <span className="px-2 py-1 bg-teal-50 text-teal-800 rounded text-xs font-bold">Fundraising</span>
                            <span className="px-2 py-1 bg-teal-50 text-teal-800 rounded text-xs font-bold">Leadership</span>
                        </div>
                    </div>

                    <button className="w-full bg-teal-900 text-white font-semibold py-3 rounded-xl hover:bg-teal-800 transition">
                        Request Mentorship
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MentorshipHub