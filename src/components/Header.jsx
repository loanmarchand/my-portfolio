import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            className="bg-gray-800 p-4"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <a href="/">
                <div className="text-white text-2xl font-bold">
                    My Portfolio
                </div>
                </a>
                <nav className="space-x-4">
                    <a href="/" className="text-gray-300 hover:text-white">Home</a>
                    <a href="/#projects" className="text-gray-300 hover:text-white">Projects</a>
                    <a href="/about" className="text-gray-300 hover:text-white">About</a>
                    <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;