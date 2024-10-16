import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

export type AssignmentList = {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [newAssignments, setNewAssignment] = useState<AssignmentList[]>([])

  function handleNewAssignment(assignment: string) {
    setNewAssignment(prevAssignment => {
      const newAssignment: AssignmentList = {
        id: crypto.randomUUID(),
        title: assignment,
        completed: false
      }
      return [...prevAssignment, newAssignment];
    })
  }

  function handleDeleteAssignment(id: string) {
    setNewAssignment(prevAssignments => prevAssignments.filter((assignment) => assignment.id !== id));

  }

  const handleCompletedAssignment = (id: string) => {
    setNewAssignment(newAssignments.map(assignment =>
      assignment.id === id ? { ...assignment, completed: true } : assignment

    ))
  }

  return (
    <>
      <Header onAddAssignment={handleNewAssignment} />
      <Assignments assignmentList={newAssignments} onDeleteAssigment={handleDeleteAssignment} onCompletedAssignment={handleCompletedAssignment} />
    </>
  );
}

export default App;
