import { Briefcase } from 'lucide-react';
import { content } from '../data/content';

const Experience = () => {
    const { experience } = content;

    return (
        <section id="experience" className="py-24 bg-navy-900/50 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-100 mb-6 relative inline-block">
                        {experience.title}
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
                    </h2>
                </div>

                <div className="space-y-12 relative">
                    {/* Center Line */}
                    <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500/50 to-purple-500/50 md:-translate-x-1/2"></div>

                    {experience.items.map((item, index) => (
                        <div key={index} className="relative pl-12 md:pl-0">

                            <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                                {/* Icon */}
                                <div className="absolute left-0 top-0 md:left-1/2 w-8 h-8 rounded-full flex items-center justify-center md:-translate-x-1/2 z-10 bg-navy-900 border-2 border-indigo-500 group-hover:scale-125 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(99,102,241,0.6)]">
                                    <Briefcase size={14} className="text-indigo-400 group-hover:text-cyan-400 transition-colors" />
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-5/12 mb-8 md:mb-0">
                                    <div className="bg-navy-800/80 p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(79,70,229,0.2)] hover:-translate-y-1 relative">

                                        <div className={`hidden md:block absolute top-4 w-4 h-[1px] bg-indigo-500/50 ${index % 2 === 0 ? '-left-4' : '-right-4'}`}></div>

                                        <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-xs font-semibold mb-3 border border-indigo-500/20">
                                            {item.period}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-100 mb-1">{item.role}</h3>
                                        <p className="text-cyan-400 font-medium mb-3">{item.company}</p>
                                        <p className="text-slate-400 text-sm leading-relaxed">
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
