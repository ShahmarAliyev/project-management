import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";
import { timeStamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./Create.css";
const categories = [
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

function Create() {
  const { documents } = useCollection("users");
  const { user } = useAuthContext();
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);
  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);
    if (!category) {
      setFormError("Please select a project category");
      return;
    }
    if (assignedUsers.length < 1) {
      setFormError("Please select a user to assign");
      return;
    }
    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedUsersList = assignedUsers.map((assignedUser) => {
      return {
        displayName: assignedUser.value.displayName,
        photoURL: assignedUser.value.photoURL,
        id: assignedUser.value.id,
      };
    });

    const project = {
      name,
      details,
      category: category.value,
      dueDate: timeStamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy,
      assignedUsersList,
    };

    console.log(project);
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
          <Select
            onChange={(option) => {
              setCategory(option);
            }}
            options={categories}
          />
        </label>
        <label>
          <span>Assign to:</span>
          <Select
            onChange={(option) => {
              setAssignedUsers(option);
            }}
            options={users}
            isMulti
          />
        </label>
        <button className="btn">Create</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}

export default Create;
