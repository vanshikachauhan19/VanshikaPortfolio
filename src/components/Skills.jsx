import { CheckCircle2 } from 'lucide-react';
import { content } from '../data/content';

const Skills = () => {
    const { skills } = content;

    return (
        <section id="skills" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Variable Technical Arsenal
                    </h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        A comprehensive overview of my technical skills and tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-bold text-indigo-700 mb-4 pb-2 border-b border-gray-100">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center px-3 py-1 bg-slate-50 text-slate-700 text-sm font-medium rounded-full border border-slate-200"
                                    >
                                        <CheckCircle2 size={14} className="mr-1.5 text-green-500" />
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
