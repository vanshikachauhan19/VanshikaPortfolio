import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { content } from '../data/content';

const Contact = () => {
    const { contact } = content;

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Let's Connect
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            I'm currently available for freelance work and internship opportunities.
                            If you have a project that needs some AI magic, I'd love to hear about it.
                        </p>

                        <div className="space-y-6">
                            <a href={`mailto:${contact.email}`} className="flex items-center group">
                                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    <Mail size={20} />
                                </div>
                                <span className="ml-4 text-slate-600 group-hover:text-indigo-600 font-medium transition-colors">
                                    {contact.email}
                                </span>
                            </a>

                            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    <Linkedin size={20} />
                                </div>
                                <span className="ml-4 text-slate-600 group-hover:text-indigo-600 font-medium transition-colors">
                                    LinkedIn Profile
                                </span>
                            </a>

                            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    <Github size={20} />
                                </div>
                                <span className="ml-4 text-slate-600 group-hover:text-indigo-600 font-medium transition-colors">
                                    GitHub Profile
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center shadow-lg shadow-indigo-500/30"
                            >
                                Send Message
                                <Send size={18} className="ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
