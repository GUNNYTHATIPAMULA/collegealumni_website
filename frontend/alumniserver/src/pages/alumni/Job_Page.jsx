import React from 'react';

// Job shape: { id, title, company, location, applyBy, matchScore, logo }
// Featured shape: { id, title, subtitle, batch, logo }

const jobs = [
    { id: 1, title: 'Senior UX Designer', company: 'Google', location: 'Hyderabad', applyBy: '19.11.2024', matchScore: 95, logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { id: 2, title: 'Product Manager', company: 'Amazon', location: 'Hyderabad', applyBy: '11.11.2024', matchScore: 99, logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { id: 3, title: 'Product Manager', company: 'Microsoft', location: 'Hyderabad', applyBy: '11.11.2024', matchScore: 95, logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { id: 4, title: 'Microsoft UI', company: 'Google', location: 'Bangalore', applyBy: '20.11.2024', matchScore: 88, logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { id: 5, title: 'Frontend Engineer', company: 'Meta', location: 'Remote', applyBy: '25.11.2024', matchScore: 92, logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
];

const featured = [
    { id: 1, title: 'Sealar OA Designer', subtitle: '<itAAGS 1', batch: 'Batch 2023', logo: 'https://i.pravatar.cc/60?img=11' },
    { id: 2, title: 'Junior UI Dev', subtitle: 'Software Engineer at Google', batch: 'Batch 2023', logo: 'https://i.pravatar.cc/60?img=12' },
    { id: 3, title: 'Raduat Manager', subtitle: '', batch: 'Batch 2023', logo: 'https://i.pravatar.cc/60?img=13' },
    { id: 4, title: 'Guest Jeokers', subtitle: 'Software Engineer at Conmeries', batch: 'Batch 2023', logo: 'https://i.pravatar.cc/60?img=14' },
];

const Select = ({ label, value }) => (
    <div>
        <label className="mb-1 block text-sm font-semibold text-gray-800">{label}</label>
        <div className="relative">
            <select className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-8 text-sm text-gray-700 focus:border-sky-400 focus:outline-none">
                <option>{value}</option>
            </select>
            <svg className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    </div>
);

const Job_Page = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <h1 className="text-3xl font-bold text-gray-900">Job Portal</h1>
                    <div className="flex gap-3">
                        <button className="rounded-md bg-amber-400 px-5 py-2 text-sm font-semibold text-gray-900 hover:bg-amber-500">
                            Browse Jobs
                        </button>
                        <button className="rounded-md bg-amber-400 px-5 py-2 text-sm font-semibold text-gray-900 hover:bg-amber-500">
                            Post a Job
                            <span className="block text-[10px] font-normal">(student only)</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Main jobs section */}
                    <div className="lg:col-span-2">
                        <div className="mb-4 rounded-md bg-blue-900 px-5 py-3">
                            <h2 className="text-lg font-bold text-white">Jobs and Opportunities</h2>
                        </div>

                        <div className="space-y-3">
                            {jobs.map((job) => (
                                <div key={job.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                                    <div className="flex gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-gray-50 p-1">
                                            <img src={job.logo} alt={job.company} className="max-h-full max-w-full object-contain" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-gray-500">Job Title</p>
                                            <h3 className="font-bold text-gray-900">{job.title}</h3>
                                            <p className="mb-2 text-sm text-gray-600">Company: {job.company}</p>
                                            <div className="grid grid-cols-3 gap-2 text-xs">
                                                <div>
                                                    <p className="text-gray-500">Location</p>
                                                    <p className="font-medium text-gray-800">{job.location}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-500">Apply by Date</p>
                                                    <p className="font-medium text-gray-800">{job.applyBy}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-500">Match Score</p>
                                                    <p className="font-bold text-sky-500">{job.matchScore}%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column: filters + featured */}
                    <div className="space-y-6">
                        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                            <div className="space-y-3">
                                <Select label="Job Type" value="Job Type" />
                                <Select label="Role" value="Role" />
                                <Select label="Experience" value="Experience" />
                                <Select label="Skills" value="All" />
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                            <h3 className="mb-3 font-bold text-gray-900">Featured Opportunities</h3>
                            <div className="space-y-3">
                                {featured.map((f) => (
                                    <div key={f.id} className="flex gap-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                                        <img src={f.logo} alt={f.title} className="h-10 w-10 rounded object-cover" />
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-gray-900">{f.title}</p>
                                            {f.subtitle && <p className="text-xs text-gray-600">{f.subtitle}</p>}
                                            <p className="text-xs text-gray-500">{f.batch}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job_Page;