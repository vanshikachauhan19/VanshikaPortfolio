import { ArrowRight, Mail } from 'lucide-react';
import { content } from '../data/content';

const Hero = () => {
    const { hero } = content;

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-navy-900 selection:bg-cyan-400/30">
            {/* Background Animations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
                <div className="mb-8 inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-semibold tracking-wide backdrop-blur-sm animate-fade-up">
                    <span className="w-2 h-2 inline-block bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
                    {hero.role}
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-100 mb-8 tracking-tight animate-fade-up delay-100">
                    Hi, I'm <span className="text-gradient drop-shadow-lg"> {hero.name} </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed animate-fade-up delay-200">
                    {hero.tagline}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 animate-fade-up delay-300">
                    <a
                        href="#projects"
                        className="group relative inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-105 hover:bg-indigo-500 hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shine"></div>
                        View Projects
                        <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-slate-300 border border-white/10 rounded-full font-semibold hover:bg-white/10 hover:text-white hover:border-white/20 transition-all hover:scale-105 backdrop-blur-sm"
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
