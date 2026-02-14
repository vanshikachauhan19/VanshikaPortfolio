import { GraduationCap } from 'lucide-react';
import { content } from '../data/content';

const Education = () => {
    const { education } = content;

    return (
        <section id="education" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {education.title}
                    </h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-8">
                    {education.items.map((item, index) => (
                        <div key={index} className="flex gap-4 md:gap-8 items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                                    <GraduationCap size={20} />
                                </div>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 w-full hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                    <h3 className="text-lg font-bold text-slate-900">{item.degree}</h3>
                                    <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                                        {item.period}
                                    </span>
                                </div>
                                <p className="text-slate-700 font-medium mb-1">{item.institution}</p>
                                {item.description && (
                                    <p className="text-slate-600 text-sm leading-relaxed mt-2">
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
