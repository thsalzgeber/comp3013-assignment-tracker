import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { TAssignmentList } from "../Types/types";
import { format } from 'date-fns';

type AssignmentProps = {
  assignment: TAssignmentList;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

export function Assignment({ assignment, onDelete, onComplete }: AssignmentProps) {

  function calculateDaysBetween(startDate: Date, endDate: Date): number {
    const milliSecondsInDay = 1000 * 60 * 60 * 24;
    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInDays = Math.ceil(diffInTime / milliSecondsInDay);
    return diffInDays;
  }
  let date = new Date();

  let deadLine = `Deadline: ${format(assignment.deadline, 'yyyy-MM-dd')}`;

  const getDeadlineText = () => {

    if (calculateDaysBetween(date, assignment.deadline) < -1) {
      return <span className={`${styles.deadline} ${styles.dueInPast}`}>Due {calculateDaysBetween(date, assignment.deadline) * -1} days ago</span>;

    } else if (calculateDaysBetween(date, assignment.deadline) === -1) {
      return <span className={`${styles.deadline} ${styles.dueYesterday}`}>Due: Yesterday</span>;

    } else if (calculateDaysBetween(date, assignment.deadline) === 0) {
      return <span className={`${styles.deadline} ${styles.dueNow}`}>Due: Today</span>;

    } else if (calculateDaysBetween(date, assignment.deadline) === 1) {
      return <span className={`${styles.deadline} ${styles.tomorrow}`}>Due: Tomorrow</span>;
    }
    else if (calculateDaysBetween(date, assignment.deadline) > 1) {
      return <span className={`${styles.deadline} ${styles.future}`}>Due in {calculateDaysBetween(date, assignment.deadline)} days</span>
    }
  };


  return (
    <div className={styles.assignment}>

      <button className={styles.checkContainer} onClick={() => onComplete(assignment.id)}>
        {assignment.completed ? <FaCheckCircle size={20} /> : <div className={styles.checkContainer} />}
      </button>

      {assignment.completed ? <p className={styles.textCompleted}> {assignment.title}</p> : <p>{assignment.title}</p>}


      {assignment.completed ?
        <span className={`${styles.deadlinecompleted}`}>{getDeadlineText()} </span>
        : <span >{getDeadlineText()} </span>}

      <button className={styles.deleteButton} onClick={() => onDelete(assignment.id)}>
        <TbTrash size={20} />
      </button>

    </div>
  );
}
