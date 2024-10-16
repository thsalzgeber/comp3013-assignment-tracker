import { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

type NewAssignmentProps = {
  onAddAssignment: (newAssignment: string) => void;
}

export function Header({ onAddAssignment }: NewAssignmentProps) {

  const [newAssignment, setNewAssignment] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAssignment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAssignment.trim()) {
      onAddAssignment(newAssignment);
      setNewAssignment("");
    }
  };

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={newAssignment}
          onChange={handleInputChange}
        />
        <button disabled={!newAssignment.trim()}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}