import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center opacity-75">
                <p className="mb-4 md:mb-0 text-sm">
                    &copy; {new Date().getFullYear()} Vanshika Chauhan. All rights reserved.
                </p>
                <div className="flex items-center text-sm">
                    <span className="mr-2">Designed & Built with</span>
                    <Heart size={16} className="text-red-500 fill-red-500 mx-1" />
                    <span className="ml-2">using React + Tailwind</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
