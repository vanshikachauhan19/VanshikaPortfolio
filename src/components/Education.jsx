import { GraduationCap } from 'lucide-react';
import { content } from '../data/content';

const Education = () => {
    const { education } = content;

    return (
        <section id="education" className="py-24 bg-navy-900 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-100 mb-6">
                        {education.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-8">
                    {education.items.map((item, index) => (
                        <div key={index} className="flex gap-4 md:gap-8 items-start group">
                            <div className="flex-shrink-0 mt-2">
                                <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center border border-indigo-500/20 group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    <GraduationCap size={24} className="text-indigo-400 group-hover:text-purple-400 transition-colors" />
                                </div>
                            </div>
                            <div className="bg-navy-800/50 p-8 rounded-2xl border border-white/5 w-full hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.15)] hover:-translate-y-1">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                                    <h3 className="text-xl font-bold text-slate-100">{item.degree}</h3>
                                    <span className="text-sm font-semibold text-purple-300 bg-purple-500/10 px-4 py-1.5 rounded-full w-fit mt-2 md:mt-0 border border-purple-500/20">
                                        {item.period}
                                    </span>
                                </div>
                                <p className="text-indigo-300 font-medium mb-2">{item.institution}</p>
                                {item.description && (
                                    <p className="text-slate-400 text-sm leading-relaxed mt-4 border-t border-white/5 pt-4">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
