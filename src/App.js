import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo == "") {
      return;
    }

    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  console.log(toDos);

  return (
    <div>
      <h1>My To Do({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          type="text"
          placeholder="Write your to do ..."
          onChange={onChange}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App;
