import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { TAssignmentList } from "../Types/types";

type AssignmentProps = {
  assignment: TAssignmentList;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

export function Assignment({ assignment, onDelete, onComplete }: AssignmentProps) {
  return (
    <div className={styles.assignment}>

      <button className={styles.checkContainer} onClick={() => onComplete(assignment.id)}>
        {assignment.completed ? <FaCheckCircle size={20} /> : <div className={styles.checkContainer} />}
      </button>

      {assignment.completed ? <p className={styles.textCompleted}> {assignment.title}</p> : <p>{assignment.title}</p>}

      <button className={styles.deleteButton} onClick={() => onDelete(assignment.id)}>
        <TbTrash size={20} />
      </button>

    </div>
  );
}
