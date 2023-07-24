import * as React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState({});
  const [isChecked, setChecked] = useState(false);
  const [todoCount, setTodoCount] = useState(0);

  useEffect(() => {
    // You can use this useEffect to fetch data from an API or perform any other side effect.
    // Since you are not doing any side effect in this example, this useEffect is empty.
  }, []);

  const addTodo = () => {
    const updatedTodos = { ...todos };
    updatedTodos[Date.now()] = {
      title: `Todo${todoCount + 1}`,
      checked: false,
    };
    setTodoCount(todoCount + 1);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const todo = todos[id];
    todo["checked"] = !todo["checked"];
    const updatedTodos = { ...todos };
    updatedTodos[id] = todo;
    // setTodos({ ...updatedTodos });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Todo</h1>
      <p>anything</p>
      <button onClick={addTodo}>+</button>
      <div>
        {console.log(todos)}
        {Object.keys(todos).map((todo) => {
          return (
            <label key={todo}>
              {todos[todo].title}
              <input
                type="checkbox"
                checked={todos[todo].checked}
                onChange={() => {
                  toggleTodo(todo);
                }}
              />
            </label>
          );
        })}
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
