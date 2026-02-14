import { Link } from 'react-router-dom';
import { content } from '../data/content';

const Projects = () => {
    const { projects } = content;

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Showcasing my journey in building AI models and practical applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Link
                            to={`/projects/${project.slug}`}
                            key={index}
                            className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block"
                        >
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-semibold px-2.5 py-0.5 rounded bg-indigo-50 text-indigo-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <span className="flex items-center text-indigo-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                                        View Details →
                                    </span>
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
