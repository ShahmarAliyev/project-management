import React, { useState } from "react";
import "./Create.css";

function Create() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignUsers, setAssignedUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="create-form">
      <h2 className="page-title"> Create a new project </h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Project details:</span>
          <textarea
            type="text"
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          />
        </label>
        <label>
          <span>Project details:</span>
          <input
            type="date"
            required
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>

        <label>
          <span>Project category: </span>
        </label>
        <label>
          <span>Assign to:</span>
        </label>
        <button className="btn">Create</button>
      </form>
    </div>
  );
}

export default Create;
