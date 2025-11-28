import { useState } from "react";

function App02_5() {
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");

  const handleContentOnChange = (e) => {
    setContent(e.target.value);
  };
  const handleWriterOnChange = (e) => {
    setWriter(e.target.value);
  };

  const handleOnClick = () => {
    const todo = {
      content: content,
      writer: writer,
      writeDate: new Date().toLocaleString(),
    };
    setTodos([...todos, todo]);
    setContent("");
    setWriter("");
  };

  return (
    <>
      <input
        type="text"
        value={content}
        onChange={handleContentOnChange}
        placeholder="내용"
      />
      <input
        type="text"
        value={writer}
        onChange={handleWriterOnChange}
        placeholder="작성자"
      />
      <button onClick={handleOnClick}>등록</button>
      <ul>
        {todos.map((todo) => (
          <li>
            내용: {todo.content} 작성자: {todo.writer} 작성일: {todo.writeDate}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App02_5;
