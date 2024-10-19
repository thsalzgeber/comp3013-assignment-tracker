import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { TAssignmentList } from "./components/Types/types";


function App() {
  const [newAssignments, setNewAssignment] = useState<TAssignmentList[]>([])

  function handleNewAssignment(assignment: string, deadline: Date) {
    setNewAssignment(prevAssignment => {
      const newAssignment: TAssignmentList = {
        id: crypto.randomUUID(),
        title: assignment,
        deadline: deadline,
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
      assignment.id === id ? { ...assignment, completed: !assignment.completed } : assignment

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
