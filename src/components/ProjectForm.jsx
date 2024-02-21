import { useContext } from 'react';
import { ProjectContext } from '../App.jsx';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProjectForm() {

    const navigate = useNavigate();

    let { projects, setProjects } = useContext(ProjectContext);

    let { pid } = useParams();
    pid = parseInt(pid);

    let project;
    if (pid) {
        project = { ...projects.find(p => p.id === pid) };
    } else {
        let maxID = projects[projects.length - 1].id + 1;
        project = { "id": maxID, "title": '', "description": '' };
    }

    const handleTitleSubmit = (e) => {
        project.title = e.target.value;
    }

    const handleDescChange = (e) => {
        project.description = e.target.value;
    }

    const addUpdateProjForm = (e) => {
        e.preventDefault();
        let projectsClone = [...projects];
        if (pid) {
            let Objindex = projectsClone.findIndex((obj) => obj.id === pid);
            projectsClone[Objindex] = project;
        } else {
            projectsClone.push(project);
        }
        setProjects(projectsClone);
        navigate('/list');
    }

    return (
        <div>
            <h1>Project Form</h1>
            <form onSubmit={addUpdateProjForm}>
                <div>
                    <label>id:</label>
                    <input type="text" name="id" defaultValue={project.id} disabled />
                </div>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" defaultValue={project.title} onChange={handleTitleSubmit} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" defaultValue={project.description} onChange={handleDescChange} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
