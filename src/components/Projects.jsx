import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/caroussel.css';
import PropTypes from "prop-types";

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'grey' }}
            onClick={onClick}
        />
    );
};

CustomPrevArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'grey' }}
            onClick={onClick}
        />
    );
};

CustomNextArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
};

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: 'Project 1',
            description: 'Description of project 1',
            image: 'path/to/image1.jpg',
            link: '/project/1'
        },
        {
            id: 2,
            name: 'Project 2',
            description: 'Description of project 2',
            image: 'path/to/image2.jpg',
            link: '/project/2'
        },
        {
            id: 3,
            name: 'Project 3',
            description: 'Description of project 3',
            image: 'path/to/image3.jpg',
            link: '/project/3'
        },
        {
            id: 4,
            name: 'Project 4',
            description: 'Description of project 4',
            image: 'path/to/image4.jpg',
            link: '/project/4'
        },
        // Ajoute d'autres projets ici
    ];


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    prevArrow: <CustomPrevArrow />,
                    nextArrow: <CustomNextArrow />,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    prevArrow: <CustomPrevArrow />,
                    nextArrow: <CustomNextArrow />,
                }
            }
        ]
    };

    return (
        <section id="projects" className="bg-white py-20">
            <motion.div
                className="container mx-auto text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-3xl font-bold mb-8">My Projects</h2>
                <Slider {...settings}>
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="bg-gray-100 shadow-md rounded p-4 m-2 w-64"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img src={project.image} alt={project.name} className="rounded w-full h-32 object-cover mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <Link to={`/project/${project.id}`} className="text-blue-500 hover:underline">View Project</Link>
                        </motion.div>
                    ))}
                </Slider>
            </motion.div>
        </section>
    );
};

export default Projects;
