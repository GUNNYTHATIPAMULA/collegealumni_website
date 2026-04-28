import React from "react";
import {
    Search,
    ChevronLeft,
    ChevronRight,
    Calendar as CalendarIcon,
    Clock,
    Users,
    CalendarPlus,
    CheckCircle2,
    Circle,
    UserPlus,
} from "lucide-react";
import FutureCalendar from "../../components/FutureCalendar";

const Alumni_Dashboard = () => {
    const user = "Sarah";

    const galleryItems = [
        { title: "Graduation Day" },
        { title: "Cultural Fest" },
        { title: "Convocation" },
    ];

    const alumni = [
        {
            name: "Harmik Jens",
            work: "Works at Google",
            location: "San Francisco",
            type: "connect",
        },
        {
            name: "Solan Kzan",
            work: "Works at Meta",
            location: "Seattle",
            type: "connect",
        },
        {
            name: "Raduat Manager",
            work: "Batch 2023 · CSE Department",
            type: "profile",
        },
        {
            name: "Sooon Kzan",
            work: "Batch 2023 · ECE Department",
            type: "directory",
        },
    ];

    const competencies = [
        { label: "Leadership", value: 85 },
        { label: "Technical Skills", value: 72 },
    ];

    // Calendar (April 2026)
    const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const calendar = [
        [30, 31, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24, 25, 26],
        [27, 28, 29, 30, 1, 2, 3],
    ];
    const today = 17;

    return (
        <div className="min-h-screen bg-slate-50">
            <main className="container mx-auto px-4  max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* LEFT + CENTER */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Welcome banner */}
                        <section className="rounded-2xl p-6 text-white shadow-sm bg-gradient-to-br from-blue-900 to-blue-900">
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 rounded-full ring-2  bg-white/20 flex items-center justify-center">
                                    <span className="text-2xl font-bold">👤</span>
                                </div>
                                <div>
                                    {user ? (
                                        <h1 className="text-2xl md:text-3xl font-bold">
                                            Welcome back, {user} Jenkins '18!
                                        </h1>
                                    ) : (
                                        <h1 className="text-2xl md:text-3xl font-bold">
                                            Welcome to the{" "}
                                            <span className="text-amber-500">Alumni Portal</span>
                                        </h1>
                                    )}
                                    <p className="text-white/70 mt-1 text-sm">
                                        We're glad to have you back.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="bg-white rounded-md p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-slate-900">
                                    Featured Gallery
                                </h2>
                                <button className="text-sm font-medium text-slate-800 hover:text-amber-600 transition-colors">
                                    View all
                                </button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {galleryItems.map((item) => (
                                    <figure
                                        key={item.title}
                                        className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer bg-gradient-to-br from-slate-800/20 to-amber-500/20"
                                    >
                                        <div className="h-full w-full flex items-center justify-center">
                                            <span className="text-4xl opacity-50">📷</span>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                                        <figcaption className="absolute bottom-3 left-3 right-3 text-white font-semibold">
                                            {item.title}
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                        </section>

                        {/* Two-col: Alumni list + Events */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* All Alumni */}
                            <section className="bg-white rounded-md p-6 shadow-md flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-bold text-slate-900">
                                        All Alumni
                                    </h2>
                                    <div className="flex items-center gap-1 text-slate-500">
                                        <button className="p-1 hover:text-slate-800 rounded-md hover:bg-slate-100 transition-colors">
                                            <ChevronLeft className="h-4 w-4" />
                                        </button>
                                        <span className="text-xs font-medium">1/1</span>
                                        <button className="p-1 hover:text-slate-800 rounded-md hover:bg-slate-100 transition-colors">
                                            <ChevronRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="relative mb-4">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search alumni..."
                                        className="w-full pl-9 pr-3 py-2 rounded-md bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-800"
                                    />
                                </div>

                                <ul className="space-y-3 flex-1">
                                    {alumni.map((a) => (
                                        <li
                                            key={a.name}
                                            className="flex items-center gap-3 p-3 rounded-md border border-slate-200 hover:border-slate-800/30 hover:bg-slate-50 transition-colors"
                                        >
                                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-slate-800/30 to-amber-500/30 flex items-center justify-center flex-shrink-0">
                                                <span className="text-xl">👤</span>
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="font-semibold text-sm text-slate-900 truncate">
                                                    {a.name}
                                                </p>
                                                <p className="text-xs text-slate-500 truncate">
                                                    {a.work}
                                                </p>
                                                {a.location && (
                                                    <p className="text-xs text-slate-500 truncate">
                                                        Location: {a.location}
                                                    </p>
                                                )}
                                            </div>
                                            {a.type === "connect" && (
                                                <div className="flex gap-1.5">
                                                    <button
                                                        title="Connect"
                                                        className="p-2 rounded-lg bg-amber-50 text-slate-800 hover:bg-slate-800 hover:text-white transition-colors"
                                                    >
                                                        <UserPlus className="h-4 w-4" />
                                                    </button>
                                                    <button
                                                        title="Book Mentoring Slot"
                                                        className="p-2 rounded-lg bg-amber-50 text-slate-800 hover:bg-slate-800 hover:text-white transition-colors"
                                                    >
                                                        <CalendarPlus className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            )}
                                            {a.type === "profile" && (
                                                <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-500 text-slate-900 hover:brightness-95 transition">
                                                    View Profile
                                                </button>
                                            )}
                                            {a.type === "directory" && (
                                                <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-500 text-slate-900 hover:brightness-95 transition">
                                                    View Directory
                                                </button>
                                            )}
                                        </li>
                                    ))}
                                </ul>

                                <button className="mt-4 w-full py-3 rounded-xl text-white font-semibold shadow-lg bg-gradient-to-br from-slate-800 to-slate-900">
                                    View Full Directory
                                </button>
                            </section>

                            {/* Upcoming Events */}
                            <section className="bg-white rounded-md p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-bold text-slate-900">
                                        Upcoming Events
                                    </h2>
                                    <button className="text-sm font-medium text-slate-800 hover:text-amber-600 transition-colors">
                                        View all
                                    </button>
                                </div>

                                {/* Calendar */}
                                <div className="mb-5">
                                    <FutureCalendar />
                                </div>

                                {/* Events */}
                                <div className="space-y-4">
                                    <article className="border-t border-slate-200 pt-4">
                                        <div className="flex items-start justify-between gap-2">
                                            <h3 className="font-semibold text-slate-900">
                                                Annual Alumni Meet
                                            </h3>
                                            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-green-600 text-white">
                                                RSVP'd
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-1">
                                            Homecoming '24
                                        </p>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                                            <CalendarIcon className="h-3 w-3" />
                                            <span>Spring · 14, 2024</span>
                                        </div>
                                        <button className="mt-2 text-xs font-semibold text-slate-800 hover:text-amber-600">
                                            Will Attend →
                                        </button>
                                    </article>

                                    <article className="border-t border-slate-200 pt-4">
                                        <h3 className="font-semibold text-slate-900">
                                            Webinar: Industry Trends
                                        </h3>
                                        <p className="text-xs text-slate-500 mt-1">
                                            Mentor Event
                                        </p>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                                            <CalendarIcon className="h-3 w-3" />
                                            <span>Spring · 10, 2024</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                            <Clock className="h-3 w-3" />
                                            <span>1:00 pm – 2:00 pm</span>
                                        </div>
                                        <button className="mt-3 px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 text-slate-900 hover:brightness-95 transition">
                                            Register Event
                                        </button>
                                    </article>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <aside className="space-y-6">
                        {/* Portfolio Snapshot */}
                        <section className="bg-white rounded-lg p-6 shadow-sm">
                            <div className="flex items-start gap-3 mb-5">
                                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-slate-800/30 to-amber-500/30 flex items-center justify-center ring-2 ring-amber-500">
                                    <span className="text-2xl">👤</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">Personalized:</p>
                                    <h3 className="font-bold text-slate-900 leading-tight">
                                        My Portfolio Snapshot
                                    </h3>
                                </div>
                            </div>

                            <div className="mb-5">
                                <p className="text-sm font-semibold text-slate-900 mb-2">
                                    Core Competencies
                                </p>
                                <div className="space-y-2">
                                    {competencies.map((c) => (
                                        <div key={c.label}>
                                            <div className="flex justify-between text-xs text-slate-500 mb-1">
                                                <span>{c.label}</span>
                                                <span>{c.value}%</span>
                                            </div>
                                            <div className="h-2 bg-slate-300 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-300"
                                                    style={{ width: `${c.value}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-sm font-semibold text-slate-900">
                                        Complete Profile
                                    </p>
                                    <div className="relative h-12 w-12">
                                        <svg className="h-12 w-12 -rotate-90" viewBox="0 0 36 36">
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="15"
                                                fill="none"
                                                stroke="#e2e8f0"
                                                strokeWidth="3"
                                            />
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="15"
                                                fill="none"
                                                stroke="#b9d500"
                                                strokeWidth="3"
                                                strokeDasharray="94.2"
                                                strokeDashoffset="28"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-amber-800">
                                            70%
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2 text-slate-900">
                                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                                        <span>Add work experience</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-slate-900">
                                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                                        <span>Complete profile bio</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-slate-500">
                                        <Circle className="h-4 w-4" />
                                        <span>Upload portfolio</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Career Journey */}
                        <section className="bg-white rounded-md p-6 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4">
                                Career Journey & Mentorship
                            </h3>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="flex flex-col items-center">
                                        <div className="h-3 w-3 rounded-full bg-slate-800 ring-4 ring-amber-100" />
                                        <div className="w-0.5 flex-1 bg-slate-200 mt-1" />
                                    </div>
                                    <div className="pb-2">
                                        <p className="text-xs text-slate-500">
                                            Next Milestone
                                        </p>
                                        <p className="font-semibold text-slate-900">
                                            Become a Mentor
                                        </p>
                                        <p className="text-xs text-slate-500 mb-2">
                                            e.g. Become a Mentor
                                        </p>
                                        <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-500 text-slate-900 hover:brightness-95 transition">
                                            Activate Mentoring Profile
                                        </button>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex flex-col items-center">
                                        <div className="h-3 w-3 rounded-full bg-slate-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">
                                            Mentor Status:
                                        </p>
                                        <p className="font-semibold text-slate-900 flex items-center gap-2">
                                            Active
                                            <span className="text-xs font-normal text-slate-500">
                                                (3 Mentees)
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Featured Alumni Story */}
                        <section className="bg-white rounded-md p-6 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4">
                                Featured Alumni Story
                            </h3>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-slate-800/30 to-amber-500/30 flex items-center justify-center">
                                    <span className="text-2xl">👤</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">Prisha Rao</p>
                                    <p className="text-xs text-slate-500">VP Engineering</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                A successful alumna leading product engineering at a top tech
                                firm — sharing lessons from her decade-long journey.
                            </p>
                            <button className="w-full py-2.5 rounded-lg bg-amber-500 text-slate-900 font-semibold text-sm hover:brightness-95 transition">
                                Read Her Full Story
                            </button>
                        </section>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default Alumni_Dashboard;