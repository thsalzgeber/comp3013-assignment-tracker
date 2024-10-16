import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { AssignmentList } from "../../App"

type AssignmentsProps = {
  assignmentList: AssignmentList[];
  onDeleteAssigment: (id: string) => void;
  onCompletedAssignment: (id: string) => void;
}

export function Assignments({ assignmentList, onDeleteAssigment, onCompletedAssignment }: AssignmentsProps) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignmentList.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>0 of {assignmentList.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {
          assignmentList.map((assignment) =>
            < Assignment key={assignment.id} id={assignment.id} title={assignment.title} completed={assignment.completed} onDelete={onDeleteAssigment} onComplete={onCompletedAssignment} />
          )
        }

      </div>
    </section>
  );
}
