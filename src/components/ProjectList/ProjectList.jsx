import "./ProjectList.css";
function ProjectList({ projects }) {
  return (
    <div>
      {projects.length === 0 && <p>No Projects Yet</p>}
      {projects.map((project) => {
        return <div key={project.id}>{project.name}</div>;
      })}
    </div>
  );
}

export default ProjectList;
