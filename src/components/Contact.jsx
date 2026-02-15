import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

const Contact = (props) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Placeholder action: clear form
        alert("Message sent! (This is a placeholder action)");
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <section
            id="contact"
            className="py-20 bg-navy-900 text-slate-300 relative overflow-hidden"
            {...props}
        >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-indigo-900/20 rounded-full mix-blend-screen filter blur-[80px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4 font-display">
                        Get In <span className="text-cyan-400">Touch</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Whether you have a question or just want to say hi, I'll try my best
                        to get back to you!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info & Social Links */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-slate-100">
                                Let's Connect
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                I'm currently available for freelance work and internship
                                opportunities. If you have a project that needs some AI magic,
                                I'd love to hear about it.
                            </p>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <a
                                href="https://www.linkedin.com/in/vanshika-chauhan-44aa62286/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                            >
                                <div className="p-2 bg-navy-800 rounded-lg border border-white/10 group-hover:border-cyan-400/30 transition-colors">
                                    <Linkedin size={20} />
                                </div>
                                <span className="font-medium">LinkedIn Profile</span>
                            </a>

                            <a
                                href="https://github.com/vanshikachauhan19"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                            >
                                <div className="p-2 bg-navy-800 rounded-lg border border-white/10 group-hover:border-cyan-400/30 transition-colors">
                                    <Github size={20} />
                                </div>
                                <span className="font-medium">GitHub Profile</span>
                            </a>

                            <a
                                href="mailto:vanshikachauhan115@gmail.com"
                                className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                            >
                                <div className="p-2 bg-navy-800 rounded-lg border border-white/10 group-hover:border-cyan-400/30 transition-colors">
                                    <Mail size={20} />
                                </div>
                                <span className="font-medium">vanshikachauhan115@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-navy-800/50 p-8 rounded-2xl border border-white/5 shadow-lg backdrop-blur-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-slate-300 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    className="w-full px-4 py-3 bg-navy-900/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 text-slate-100 placeholder-slate-500 transition-all"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-slate-300 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                    className="w-full px-4 py-3 bg-navy-900/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 text-slate-100 placeholder-slate-500 transition-all"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-slate-300 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    required
                                    className="w-full px-4 py-3 bg-navy-900/50 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 text-slate-100 placeholder-slate-500 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-navy-900 transition-all transform hover:scale-[1.02] shadow-lg shadow-indigo-500/25"
                            >
                                <Send size={18} className="mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
