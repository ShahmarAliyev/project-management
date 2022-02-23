import { useState } from "react";

const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];

function ProjectFilter() {
  const [currentFilter, setCurrentFilter] = useState("all");

  const handleClick = (filter) => {
    console.log(filter);
    setCurrentFilter(filter);
  };

  return (
    <div className="project-filter">
      <nav>
        <p> Filter by:</p>
        {filterList.map((f) => {
          return (
            <button
              className={currentFilter === f ? "active" : ""}
              key={f}
              onClick={() => handleClick(f)}
            >
              {f}
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default ProjectFilter;
