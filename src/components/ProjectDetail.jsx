import { useParams } from 'react-router-dom';

const projectDetails = {
    1: {
        name: 'Project 1',
        description: 'Detailed description of project 1.',
        image: 'path/to/image1.jpg',
        details: 'Additional details about project 1...'
    },
    2: {
        name: 'Project 2',
        description: 'Detailed description of project 2.',
        image: 'path/to/image2.jpg',
        details: 'Additional details about project 2...'
    },
    // Ajoute d'autres projets ici
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectDetails[id];

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto text-center">
                <img src={project.image} alt={project.name} className="rounded w-full h-64 object-cover mb-4" />
                <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
                <p className="text-lg mb-4">{project.description}</p>
                <p>{project.details}</p>
            </div>
        </section>
    );
};

export default ProjectDetail;
