import { CheckCircle2 } from 'lucide-react';
import { content } from '../data/content';

const Skills = () => {
    const { skills } = content;

    return (
        <section id="skills" className="py-24 bg-navy-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-100 mb-6">
                        Variable Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A comprehensive overview of my technical skills and tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <div
                            key={index}
                            className="bg-navy-800/50 rounded-2xl p-8 border border-white/5 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_25px_-5px_rgba(34,211,238,0.15)] group"
                        >
                            <h3 className="text-xl font-bold text-slate-100 mb-6 pb-4 border-b border-white/5 group-hover:border-cyan-400/30 transition-colors">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center px-3 py-1.5 bg-navy-900/50 text-cyan-200 text-sm font-medium rounded-full border border-cyan-500/20 hover:bg-cyan-500/10 transition-colors"
                                    >
                                        <CheckCircle2 size={14} className="mr-2 text-cyan-400" />
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
