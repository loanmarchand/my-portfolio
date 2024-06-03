import { motion } from 'framer-motion';

const Bio = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <motion.div
                    className="md:w-1/3 mb-8 md:mb-0"
                    initial={{ x: -200 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 50 }}
                >
                    <img src="src/assets/profil.jpg" alt="Marchand Loan" className="rounded-full w-48 h-48 mx-auto md:mx-0" />
                </motion.div>
                <motion.div
                    className="md:w-2/3 text-center md:text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Hello, I'm Loan Marchand</h2>
                    <p className="text-lg">I am a passionate developer with expertise in React and Python. I love creating innovative solutions and working on challenging projects.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Bio;
