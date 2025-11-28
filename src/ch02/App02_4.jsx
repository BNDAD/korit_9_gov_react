import { useState } from "react";

function App02_4() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App02_4;

function TodoInput({ todos, setTodos }) {
  const [to, setTo] = useState("");
  const [writer, setWriter] = useState("");

  const handleTodoOnChange = (e) => {
    console.log(e.target.value);
    setTo(e.target.value);
  };
  const handleWriterOnChange = (e) => {
    console.log(e.target.value);
    setWriter(e.target.value);
  };

  const handleOnClick = () => {
    const dolist = {
      content: to,
      writer: writer,
      writeDate: new Date().toLocaleString(),
    };
    setTodos([...todos, dolist]);
    setTo("");
    setWriter("");
  };

  return (
    <>
      <input
        type="text"
        value={to}
        onChange={handleTodoOnChange}
        placeholder="내용"
      />
      <input
        type="text"
        value={writer}
        onChange={handleWriterOnChange}
        placeholder="작성자"
      />
      <button onClick={handleOnClick}>등록</button>
    </>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          내용: {todo.content} 작성자: {todo.writer} 작성일: {todo.writeDate}
        </li>
      ))}
    </ul>
  );
}
