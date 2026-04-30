import React, { useState, useMemo } from 'react';

// Changed from TypeScript interface to JavaScript object shape comment
// Alumnus shape: { id, name, batch, batchTitle, role, company, department, industry, avatar }

const alumniData = [
    { id: 1, name: 'Sarah Jenkins', batch: '18', batchTitle: 'Batch 2018', role: 'Software Engineer', company: 'Google', department: 'CSE', industry: 'Tech', avatar: 'https://i.pravatar.cc/100?img=1' },
    { id: 2, name: 'Solan Kzan', batch: '20', batchTitle: 'Batch 2020', role: 'Current Engineer', company: 'Tritle', department: 'ECE', industry: 'Tech', avatar: 'https://i.pravatar.cc/100?img=2' },
    { id: 3, name: 'Aarmik Jenkins', batch: '18', batchTitle: 'Batch 2018', role: 'Software Engineer', company: 'Google', department: 'CSE', industry: 'Tech', avatar: 'https://i.pravatar.cc/100?img=3' },
    { id: 4, name: 'Solan Kzan', batch: '15', batchTitle: 'Batch 2015', role: 'Software Engineer', company: 'Google', department: 'IT', industry: 'Tech', avatar: 'https://i.pravatar.cc/100?img=4' },
    { id: 5, name: 'Raduat Manager', batch: '15', batchTitle: 'Batch 2015', role: 'Current Engineer', company: 'Google', department: 'MECH', industry: 'Engineering', avatar: 'https://i.pravatar.cc/100?img=5' },
    { id: 6, name: 'Sooon Kzan', batch: '15', batchTitle: 'Batch 2015', role: 'Software Engineer', company: 'AWS', department: 'CSE', industry: 'Tech', avatar: 'https://i.pravatar.cc/100?img=6' },
    { id: 7, name: 'Priya Sharma', batch: '19', batchTitle: 'Batch 2019', role: 'Product Manager', company: 'Microsoft', department: 'CSE', industry: 'Tech', avatar: 'https://i.pravatar.cc/100?img=7' },
    { id: 8, name: 'Rahul Verma', batch: '17', batchTitle: 'Batch 2017', role: 'Data Scientist', company: 'Amazon', department: 'IT', industry: 'Tech', avatar: 'https://i.pravatar.cc/100?img=8' },
    { id: 9, name: 'Anita Desai', batch: '21', batchTitle: 'Batch 2021', role: 'UX Designer', company: 'Meta', department: 'Design', industry: 'Tech', avatar: 'https://i.pravatar.cc/100?img=9' },
];

const Dropdown = ({ label }) => (
    <button className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
        {label}
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    </button>
);

const All_Alumni = () => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const perPage = 6;

    const filtered = useMemo(
        () => alumniData.filter((a) => a.name.toLowerCase().includes(search.toLowerCase())),
        [search]
    );
    const totalPages = Math.ceil(filtered.length / perPage);
    const paginated = filtered.slice((page - 1) * perPage, page * perPage);

    return (
        <div className="min-h-screen bg-sky-50/50 p-6 md:p-10">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-6 text-3xl font-bold text-gray-900">Alumni Directory</h1>

                {/* Search */}
                <div className="relative mb-4">
                    <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                    </svg>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                        placeholder="Search"
                        className="w-full rounded-full border border-gray-200 bg-white py-3 pl-12 pr-12 text-gray-700 shadow-sm focus:border-sky-400 focus:outline-none"
                    />
                    <svg className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-14 0m7 7v3m-4 0h8m-4-7a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                </div>

                {/* Filters */}
                <div className="mb-6 flex flex-wrap gap-2">
                    <Dropdown label="Batch" />
                    <Dropdown label="Department" />
                    <Dropdown label="Current Company" />
                    <Dropdown label="Industry" />
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {paginated.map((a) => (
                        <div key={a.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                            <div className="mb-3 flex items-start gap-3">
                                <img src={a.avatar} alt={a.name} className="h-12 w-12 rounded-full object-cover" />
                                <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                        <h3 className="font-semibold text-gray-900">{a.name.split(' ')[0]}</h3>
                                        <span className="text-sm text-gray-500">'{a.batch}</span>
                                    </div>
                                    <p className="text-xs text-gray-500">{a.batchTitle}</p>
                                </div>
                            </div>
                            <p className="font-semibold text-gray-900">{a.name}</p>
                            <p className="mb-3 text-sm text-gray-600">{a.role} at {a.company}</p>
                            <div className="flex gap-2">
                                <button className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    View Profile
                                </button>
                                <button className="flex-1 rounded-md bg-amber-400 px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-amber-500">
                                    Connect
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex items-center justify-center gap-2">
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-600 hover:bg-gray-50 disabled:opacity-40"
                    >
                        ‹
                    </button>
                    {Array.from({ length: Math.max(totalPages, 1) }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`h-8 w-8 rounded-md text-sm ${page === i + 1 ? 'bg-sky-500 text-white' : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-600 hover:bg-gray-50 disabled:opacity-40"
                    >
                        ›
                    </button>
                    <button
                        onClick={() => setPage(totalPages)}
                        className="rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-600 hover:bg-gray-50"
                    >
                        »
                    </button>
                </div>
            </div>
        </div>
    );
};

export default All_Alumni;  