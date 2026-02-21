import { ArrowLeft, CheckCircle2, ExternalLink, Github } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { content } from '../data/content';

const ProjectDetail = () => {
    const { slug } = useParams();
    // Safety check for content and projects array
    const projects = content?.projects || [];
    const project = projects.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Project not found</h2>
                    <p className="text-slate-600 mb-6">The project you are looking for does not exist or has been moved.</p>
                    <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center text-slate-600 hover:text-indigo-600 mb-8 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Projects
                </Link>

                {/* Hero Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8 relative">
                    <div className="h-64 md:h-[450px] relative">
                        {project.image && (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-center"
                            />
                        )}
                        {/* Dark Overlay (60% Opacity) */}
                        <div className="absolute inset-0 bg-black/60 transition-opacity duration-300"></div>

                        {/* Text Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white z-10">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">{project.title}</h1>
                            <p className="text-lg md:text-xl text-slate-100 max-w-3xl drop-shadow-sm font-medium">
                                {project.summary}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {project.detailedSections ? (
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                                {project.detailedSections.map((section, index) => (
                                    <div key={index} className={index > 0 ? "mt-8" : ""}>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
                                        {section.type === 'badges' && section.items ? (
                                            <div className="flex flex-wrap gap-2">
                                                {section.items.map((item, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : section.type === 'gallery' && section.images ? (
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {section.images.map((image, i) => (
                                                    <div key={i} className="group relative">
                                                        <div className="aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                                                            <img
                                                                src={image.src}
                                                                alt={image.alt}
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            />
                                                        </div>
                                                        <p className="mt-2 text-sm text-slate-500 text-center">{image.alt}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : section.type === 'case-study-results' ? (
                                            <div className="space-y-12">
                                                {/* Main Prominent Image */}
                                                {section.mainImage && (
                                                    <div className="flex flex-col items-center">
                                                        <div className="w-full max-w-4xl group transition-transform duration-300 hover:scale-[1.02]">
                                                            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                                                                <img
                                                                    src={section.mainImage.src}
                                                                    alt={section.mainImage.alt}
                                                                    className="w-full h-auto"
                                                                />
                                                            </div>
                                                            <p className="mt-4 text-center text-slate-500 font-medium">{section.mainImage.alt}</p>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Responsive Grid for other images */}
                                                {section.gridImages && (
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                        {section.gridImages.map((image, i) => (
                                                            <div key={i} className="group transition-transform duration-300 hover:scale-[1.03]">
                                                                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white aspect-auto">
                                                                    <img
                                                                        src={image.src}
                                                                        alt={image.alt}
                                                                        className="w-full h-auto"
                                                                    />
                                                                </div>
                                                                <p className="mt-3 text-sm text-slate-500 text-center font-medium">{image.alt}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : section.items ? (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {section.items.map((item, i) => (
                                                    <div key={i} className="flex items-start">
                                                        <CheckCircle2 size={20} className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                                                        <span className="text-slate-700">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                                                {section.content}
                                            </p>
                                        )}
                                        {/* Divider */}
                                        {index < project.detailedSections.length - 1 && (
                                            <div className="h-px bg-slate-100 mt-8"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <>
                                {/* Problem & Solution */}
                                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Overview</h2>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900 mb-2">The Problem</h3>
                                            <p className="text-slate-600 leading-relaxed">{project.problem}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900 mb-2">The Solution</h3>
                                            <p className="text-slate-600 leading-relaxed">{project.solution}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Key Features */}
                                {project.features && project.features.length > 0 && (
                                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {project.features.map((feature, index) => (
                                                <div key={index} className="flex items-start">
                                                    <CheckCircle2 size={20} className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                                                    <span className="text-slate-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Challenges */}
                                {project.challenges && (
                                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Challenges & Learnings</h2>
                                        <p className="text-slate-600 leading-relaxed">{project.challenges}</p>
                                    </div>
                                )}
                            </>
                        )}

                        {/* Project Demo */}
                        {project.video && (
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Demo</h2>
                                <iframe
                                    src={project.video}
                                    width="100%"
                                    height="480"
                                    allow="autoplay"
                                    className="rounded-xl shadow-lg w-full"
                                    title={`${project.title} Demo`}
                                ></iframe>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Links */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Project Links</h3>
                            <div className="space-y-3">
                                {project.github && project.github !== '#' && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full px-6 py-3 bg-black text-white rounded-xl shadow hover:bg-gray-800 transition-colors font-medium"
                                    >
                                        <Github size={20} className="mr-2" />
                                        View Source Code on GitHub
                                    </a>
                                )}
                                {project.demo && project.demo !== '#' && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full px-4 py-3 bg-indigo-50 text-indigo-700 rounded-xl hover:bg-indigo-100 transition-colors font-medium"
                                    >
                                        <ExternalLink size={20} className="mr-2" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        {project.tech && (
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
