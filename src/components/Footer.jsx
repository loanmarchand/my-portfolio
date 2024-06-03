import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            className="bg-gray-800 text-white py-4"
            initial={{ y: 250 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
        >
            <div className="container mx-auto text-center">
                <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
            </div>
        </motion.footer>
    );
};

export default Footer;
