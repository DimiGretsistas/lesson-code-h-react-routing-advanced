import projectsData from './../projects-data.json';
import { useParams, Link } from 'react-router-dom'

function ProjectDetailsPage(props) {

    const { projectId } = useParams();
    console.log('projectId -->', projectId);


    const foundProject = projectsData.find((oneProject) => {
        return oneProject._id === projectId;
    });


    return (
        <div>
            <h1>Project Details</h1>
            {!foundProject && <h3>Project not found!</h3>}

            {foundProject && (
                <>
                    <h2>{foundProject.name}</h2>
                    <h3>Tech Stack: {foundProject.technologies}</h3>
                    <p>{foundProject.description}</p>
                    <Link to="/projects">Back</Link>
                </>
            )}
        </div>
    );
}

export default ProjectDetailsPage;
