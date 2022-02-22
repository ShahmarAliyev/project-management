import Avatar from "../../components/Avatar/Avatar";
function ProjectSummary({ project }) {
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{document.name}</h2>
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
    </div>
  );
}

export default ProjectSummary;
