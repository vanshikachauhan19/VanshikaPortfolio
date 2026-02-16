

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center opacity-75">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Vanshika Chauhan. All rights reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
