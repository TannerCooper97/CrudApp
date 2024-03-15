import { useContext } from 'react';
import { ProjectContext } from '../App.jsx';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProjectForm() {
    let { projects, setProjects, setDBUpdated } = useContext(ProjectContext);
    
    const navigate = useNavigate();

    let { pid } = useParams();
    // pid = parseInt(pid);

    let project;
    if (pid) {
        project = { ...projects.find(p => p._id === pid) };
    } else {
        let maxID = 1;
        if (projects.legnth > 0){
            maxID = projects[projects.legnth - 1].id + 1;
        }
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

        let url = "";
        let fetch_method = "";
        if (pid) {
            url = 'api/projects/' + project._id;
            fetch_method = "PUT";
        } else {
            url = 'api/projects';
            fetch_method = "POST";
        }

        fetch(url, {
            method: fetch_method,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(project),
            credentials: "include"
        })
            .then((response) => {
                return response.json();
            })
            .then((resp) => {
               setDBUpdated(true);
               navigate('/list');
            })
            .catch((err) => {
                // Code called when an error occurs during the request
                console.log(err.message);
            });
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
