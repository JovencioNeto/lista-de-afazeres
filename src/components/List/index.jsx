import React from "react";

export default function List({ task, removeAll, completedAll}) {
  return (
    <div className="task" style={{textDecoration: task.isCompleted ? "line-through" : ""}}>
      <div className="content">
        <p>{task.text}</p>
        <p className="category">({task.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completedAll(task.id)}>Completar</button>
        <button className="remove" onClick={() => removeAll(task.id)}>x</button>
      </div>
    </div>
  );
}
