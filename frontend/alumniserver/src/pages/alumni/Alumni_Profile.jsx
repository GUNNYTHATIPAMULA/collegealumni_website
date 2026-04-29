import React, { useState } from "react";
import {
    Pencil,
    MapPin,
    Mail,
    Briefcase,
    GraduationCap,
    Users,
} from "lucide-react";

const Alumni_Profile = () => {
    const [profile] = useState({
        name: "Dr. Sarah Johnson",
        graduationYear: "2015",
        degree: "Ph.D. in Computer Science",
        department: "Software Engineering",
        currentRole: "Senior AI Research Scientist",
        company: "Google AI",
        location: "Mountain View, CA",
        email: "sarah.johnson@example.com",
        bio: "AI researcher with 8+ years in ML & NLP. Leads ethical AI research.",
        profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
        skills: ["Machine Learning", "Deep Learning", "NLP", "Python"],
        workExperience: [
            {
                title: "Senior AI Research Scientist",
                company: "Google AI",
                period: "2020 - Present",
            },
            {
                title: "AI Research Scientist",
                company: "Microsoft Research",
                period: "2016 - 2020",
            },
        ],
        education: [
            {
                degree: "Ph.D. in CS",
                institution: "Stanford",
                period: "2010 - 2015",
            },
        ],
    });

    return (
        <div className=" bg-gray-50 min-h-screen">
            <div className="max-w-7xl container mx-auto md:px-4 px-1  space-y-6">

                {/* 🔹 Header */}
                <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                        {/* LEFT SECTION */}
                        <div className="flex items-start md:items-center gap-3 md:gap-4">

                            <img
                                src={profile.profileImage}
                                alt="profile"
                                className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover"
                            />

                            <div>
                                <h1 className="text-lg md:text-xl font-semibold leading-tight">
                                    {profile.name}{" "}
                                    <span className="text-gray-400 text-sm">
                                        '{profile.graduationYear}
                                    </span>
                                </h1>

                                <p className="text-xs md:text-sm text-gray-500">
                                    {profile.currentRole} · {profile.company}
                                </p>

                                <p className="text-xs text-gray-400 mt-1 line-clamp-2 md:line-clamp-none">
                                    {profile.bio}
                                </p>
                            </div>
                        </div>

                        {/* RIGHT SECTION (Buttons) */}
                        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">

                            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm w-full sm:w-auto">
                                <Pencil size={16} /> Update
                            </button>

                            <button className="flex items-center justify-center gap-2 border px-4 py-2 rounded-lg text-sm w-full sm:w-auto">
                                <Mail size={16} /> Contact
                            </button>

                        </div>

                    </div>
                </div>

                {/* 🔹 Grid */}
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Personal Info */}
                    <Card title="Personal Information" icon={Users}>
                        <Field label="Full Name" value={profile.name} />
                        <Field label="Department" value={profile.department} />
                        <Field label="Degree" value={profile.degree} />
                        <Field label="Email" value={profile.email} />
                        <Field label="Location" value={profile.location} icon={MapPin} />
                    </Card>

                    {/* Work Experience */}
                    <Card title="Professional Journey" icon={Briefcase}>
                        {profile.workExperience.map((job, i) => (
                            <Timeline
                                key={i}
                                role={job.title}
                                company={job.company}
                                date={job.period}
                            />
                        ))}
                    </Card>

                    {/* Education */}
                    <Card title="Education" icon={GraduationCap}>
                        {profile.education.map((edu, i) => (
                            <Timeline
                                key={i}
                                role={edu.degree}
                                company={edu.institution}
                                date={edu.period}
                            />
                        ))}
                    </Card>

                    {/* Skills */}
                    <Card title="Skills">
                        <div className="flex flex-wrap gap-2">
                            {profile.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

const Card = ({ title, icon: Icon, children }) => (
    <div className="bg-white rounded-xl shadow-sm p-5">
        <div className="flex items-center gap-2 mb-4">
            {Icon && <Icon size={16} className="text-blue-600" />}
            <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
        </div>
        {children}
    </div>
);

const Field = ({ label, value, icon: Icon }) => (
    <div className="mb-3">
        <p className="text-xs text-gray-400">{label}</p>
        <div className="flex items-center gap-2 text-sm text-gray-700">
            {Icon && <Icon size={14} />}
            {value}
        </div>
    </div>
);

const Timeline = ({ role, company, date }) => (
    <div className="mb-4 border-l-2 border-blue-200 pl-3">
        <p className="text-sm font-medium">{role}</p>
        <p className="text-xs text-gray-500">{company}</p>
        <p className="text-xs text-blue-500">{date}</p>
    </div>
);

export default Alumni_Profile;