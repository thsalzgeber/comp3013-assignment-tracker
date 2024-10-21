import { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

type NewAssignmentProps = {
  onAddAssignment: (newAssignment: string, selectedDeadline: Date) => void;
}

export function Header({ onAddAssignment }: NewAssignmentProps) {

  const [newAssignment, setNewAssignment] = useState("");
  const [selectedDeadline, setSelectedDeadline] = useState<Date>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAssignment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAssignment.trim() && selectedDeadline) {
      onAddAssignment(newAssignment, selectedDeadline);
      setNewAssignment("");
      setSelectedDeadline(undefined);
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
        <DayPicker
          mode="single"
          selected={selectedDeadline}
          onSelect={setSelectedDeadline}
          disabled={{ before: new Date() }}
          captionLayout="dropdown"
          footer={selectedDeadline ? `Selected: ${format(selectedDeadline, 'MMM dd, yyyy')}` : "Pick a day."
          } />

        <button disabled={!newAssignment.trim() || !selectedDeadline}>
          Create <AiOutlinePlusCircle size={20} />

        </button>

      </form>
    </header>
  );
}