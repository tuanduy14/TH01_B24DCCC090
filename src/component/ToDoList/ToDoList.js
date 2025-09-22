import React, { useState } from 'react';
import Cv from "./cv";
function ToDoList() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    setTodoList([...todoList, task]);
    setTask('');
  };

  const handleDelete = (indexToDelete) => {
    const newList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(newList);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Bài 1: To-do List</h2>
      <input
        type="text"
        placeholder="Nhập công việc"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul>
        {todoList.map((item, index) => (
          <Cv key={index} ten={item} onDelete={() => handleDelete(index)} />
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;