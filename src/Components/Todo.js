// usestate to manage state of the todo
// handle sumbit function is called when the form is submitted, it will adds the
// the inputValue to the todos state and reset the inputValue to ane mpty string



import React, {useState} from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    // empty array, it will set to an empty array
    // app has an empty state to work with before any todo items are added
    //user interacts with the app by adding, removing and completing todo items
    // the state will be updated and the comp will rerender to reflect the new state
    //it allows the component to maintain an intrnal record of the todo items
    const [inputValue, setInputValue] = useState('');
//it is similiar to [], but it will initilizes the state with an empty string instead of an empty array
// the purpose is to initialize the state of the input field as an empty string.
// This allows the component to maintain an internal record of the input value, and respond to user interactions by updating the state and re-rendering the component accordingly.


    // this function is called when the form is submitted
    function handleSubmit(e) {
        e.preventDefault();
        // preventDefault() method is used to prevent the default behavior of an event from happening.
    //    By calling e.preventDefault() it prevents the browser's default action of sending a request to the server, which is typically to reload the page. This allows you to handle the form submission event in JavaScript,
    //  In the case of a form, the default behavior is to submit the form and refresh the page, which would cause the application to lose its state. To prevent this from happening, the e.preventDefault()
    //  method is called in the handleSubmit function, so that the form is not submitted and the page is not refreshed. 
    setTodos([...todos, inputValue]);
        // it adds the inputvalue to the todos state
        setInputValue('');
        // reset the inputvalue to an empty string
    }

    function handleDelete(index){
        // this function is called when the delete button is pressed, it remove
        // the todo from the state
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos); 
    }

  return (
    <div className="todo-app">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
        //   setInputValue update the inputvalue state every time the user types in the input field
          onChange={e => setInputValue(e.target.value)}
        //   The onChange event is triggered when the value of an input element changes. In this case, the onChange event is being used to track changes to the input field in the form.
        
          placeholder="Add a new to-do"
        />
        <button type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {/* map functions is used to iterate over the todos state and create a list item element for each item */}
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
  

export default Todo

///////////////////////////////////////

// import React, {useState} from 'react';

// function Todo() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTodos([...todos, {text: inputValue, completed: false}]);
//     setInputValue('');
//   }

//   function handleDelete(index) {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   }

//   function handleToggle(index) {
//     const newTodos = [...todos];
//     newTodos[index].completed = !newTodos[index].completed;
//     setTodos(newTodos);
//   }

//   return (
//     <div className="todo-app">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={e => setInputValue(e.target.value)}
//           placeholder="Add a new to-do"
//         />
//         <button type="submit">Add</button>
//       </form>
//       <ul className="todo-list">
//         {todos.map((todo, index) => (
//           <li 
//             key={index} 
//             className={`todo-item ${todo.completed ? 'completed' : ''}`}
//             onClick={() => handleToggle(index)}
//           >
//             {todo.text}
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Todo;
