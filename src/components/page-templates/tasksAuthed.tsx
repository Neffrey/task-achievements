// TYPES

import AddTaskForm from "~/components/forms/addTaskForm";

// COMPONENTS

const TasksAuthed = () => {
  // RETURN
  return (
    <div className="grid grid-cols-4 items-center p-20 ">
      <h1 className="text-xl">Tasks for User</h1>
      <div className="p-4" />
      <AddTaskForm />
    </div>
  );
};
export default TasksAuthed;
