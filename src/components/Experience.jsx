import { Briefcase } from 'lucide-react';
import { content } from '../data/content';

const Experience = () => {
    const { experience } = content;

    return (
        <section id="experience" className="py-20 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {experience.title}
                    </h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-8">
                    {experience.items.map((item, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            {/* Timeline Line (Desktop) */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100 -translate-x-1/2"></div>

                            <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Icon */}
                                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center -translate-x-1/2 border-4 border-white shadow-sm z-10">
                                    <Briefcase size={14} className="text-white" />
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-5/12 mb-8 md:mb-0">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold mb-2">
                                            {item.period}
                                        </span>
                                        <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
                                        <p className="text-indigo-600 font-medium mb-2">{item.company}</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for other side */}
                                <div className="hidden md:block w-5/12"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
