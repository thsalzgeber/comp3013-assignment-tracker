import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { TAssignmentList } from "../Types/types";

type AssignmentsProps = {
  assignmentList: TAssignmentList[];
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
          <span>{assignmentList.filter(assignment => assignment.completed).length} of {assignmentList.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {
          assignmentList.map((assignment) =>
            < Assignment
              key={assignment.id}
              assignment={assignment}
              onDelete={onDeleteAssigment}
              onComplete={onCompletedAssignment} />
          )
        }

      </div>
    </section>
  );
}
