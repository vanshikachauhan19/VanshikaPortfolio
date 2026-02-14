import { Code, Cpu, Globe } from 'lucide-react';
import { content } from '../data/content';

const About = () => {
    const { about } = content;

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {about.title}
                    </h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Illustration/Image placeholder */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-indigo-100 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative z-10 grid grid-cols-2 gap-4">
                                <div className="p-4 bg-blue-50 rounded-xl text-center">
                                    <Cpu className="text-blue-600 mx-auto mb-2" size={32} />
                                    <span className="text-sm font-semibold text-slate-700">AI Prototypes</span>
                                </div>
                                <div className="p-4 bg-purple-50 rounded-xl text-center">
                                    <Code className="text-purple-600 mx-auto mb-2" size={32} />
                                    <span className="text-sm font-semibold text-slate-700">Clean Code</span>
                                </div>
                                <div className="p-4 bg-green-50 rounded-xl text-center col-span-2">
                                    <Globe className="text-green-600 mx-auto mb-2" size={32} />
                                    <span className="text-sm font-semibold text-slate-700">Scalable Solutions</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            Passion for <span className="text-indigo-600">Innovation</span>
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                            {about.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
