import Avatar from "../../components/Avatar/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
function ProjectSummary({ project }) {
  const navigate = useNavigate();
  const { deleteDocument } = useFirestore("projects");
  const { user } = useAuthContext();

  const handleClick = (e) => {
    deleteDocument(project.id);
    navigate("/");
  };
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{document.name}</h2>
        <p>By {project.createdBy.displayName}</p>
        <p className="due-date">
          {" "}
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4> Project is assigned to:</h4>
        {project.assignedUsersList.map((u) => {
          return (
            <div className="info" key={u.id}>
              <Avatar src={u.photoURL} />
              <p className="project-name">{u.displayName}</p>
            </div>
          );
        })}
      </div>
      {user.uid === project.createdBy.id && (
        <button className="btn" onClick={handleClick}>
          Mark as Complete
        </button>
      )}
    </div>
  );
}

export default ProjectSummary;
