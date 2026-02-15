import { Code, Cpu, Globe } from 'lucide-react';
import { content } from '../data/content';

const About = () => {
    const { about } = content;

    return (
        <section id="about" className="py-24 bg-navy-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-100 mb-6">
                        {about.title}
                    </h2>
                    <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Illustration/Image placeholder */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-navy-800 p-8 rounded-2xl border border-white/10 grid grid-cols-2 gap-6 hover:shadow-2xl transition-all duration-300">
                                <div className="p-6 bg-navy-900/50 rounded-xl text-center border border-white/5 hover:border-cyan-500/30 transition-colors">
                                    <Cpu className="text-cyan-400 mx-auto mb-3" size={32} />
                                    <span className="text-sm font-semibold text-slate-300">AI Prototypes</span>
                                </div>
                                <div className="p-6 bg-navy-900/50 rounded-xl text-center border border-white/5 hover:border-purple-500/30 transition-colors">
                                    <Code className="text-purple-400 mx-auto mb-3" size={32} />
                                    <span className="text-sm font-semibold text-slate-300">Clean Code</span>
                                </div>
                                <div className="p-6 bg-navy-900/50 rounded-xl text-center col-span-2 border border-white/5 hover:border-indigo-500/30 transition-colors">
                                    <Globe className="text-indigo-400 mx-auto mb-3" size={32} />
                                    <span className="text-sm font-semibold text-slate-300">Scalable Solutions</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h3 className="text-3xl font-bold text-slate-100 mb-6">
                            Passion for <span className="text-gradient">Innovation</span>
                        </h3>
                        <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                            <div className="bg-navy-800/30 p-8 rounded-2xl border border-white/5 shadow-inner">
                                {about.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
