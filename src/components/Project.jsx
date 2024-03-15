import { useContext } from 'react';
import { ProjectContext } from '../App.jsx';
import { useNavigate, Link } from 'react-router-dom';


export default function Project(props) {
  let { projects, setDBUpdated } = useContext(ProjectContext);

  const navigate = useNavigate();

  const deleteProject = (pid) => {
    let url = 'api/projects/' + pid
    fetch(url, {
        method: "DELETE",
    })
        .then((response) => {
            return response.json();
        })
        .then((resp) => {
            setDBUpdated(true);
        })
        .catch((err) => {
            // Code called when an error occurs during the request
            console.log(err.message);
        });
  }

  return (
    <div className='projectsPage'>
      <h2>Your Projects</h2>
      <Link to="/project">Add a Project</Link>
      <table className="proj-table">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className='proj-body'>
          {projects.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.description}</td>
                <td><button className='primary' onClick={() => navigate(`/project/${e._id}`)}>Edit</button></td>
                <td><button onClick={() => { deleteProject(e._id) }}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
