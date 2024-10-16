import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";

type AssignmentProps = {
  id: string;
  title: string;
  completed: boolean;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

export function Assignment({ id, title, completed, onDelete, onComplete }: AssignmentProps) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={() => onComplete(id)}>
        <div />
      </button>
      <p>{id}</p>
      <p>{completed.toString()}</p>
      <p>
        {completed ? <span className={styles.textCompleted} /> : ""}{title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(id)}>
        <TbTrash size={20} />
      </button>

    </div>
  );
}
