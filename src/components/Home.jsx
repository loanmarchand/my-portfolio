import { motion } from 'framer-motion';

const Home = () => {
    return (
        <section id="home" className="bg-gray-100 py-20">
            <motion.div
                className="container mx-auto text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-lg mb-8">Discover my projects, skills, and experiences.</p>
                <motion.a
                    href="#projects"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    View Projects
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Home;