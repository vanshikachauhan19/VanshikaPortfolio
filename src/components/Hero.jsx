import { ArrowRight, Mail } from 'lucide-react';
import { content } from '../data/content';

const Hero = () => {
    const { hero } = content;

    return (
        <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <div className="mb-6 inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold tracking-wide">
                    {hero.role}
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Hi, I'm <span className="text-gradient"> {hero.name} </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
                    {hero.tagline}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30"
                    >
                        View Projects
                        <ArrowRight size={20} className="ml-2" />
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-gray-50 transition-all hover:border-indigo-300"
                    >
                        Contact Me
                        <Mail size={20} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
