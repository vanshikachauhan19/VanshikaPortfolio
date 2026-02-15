import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { content } from '../data/content';

const Projects = () => {
    const { projects } = content;

    return (
        <section id="projects" className="py-24 bg-navy-900 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-100 mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Showcasing my journey in building AI models and practical applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <Link
                            to={`/projects/${project.slug}`}
                            key={index}
                            className="group relative bg-navy-800/50 rounded-2xl border border-white/5 overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(79,70,229,0.2)] hover:-translate-y-2 block"
                        >
                            <div className="h-64 relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-navy-900/30 group-hover:bg-navy-900/10 transition-colors duration-500"></div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center text-cyan-400 font-semibold group/link">
                                    View Details
                                    <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
