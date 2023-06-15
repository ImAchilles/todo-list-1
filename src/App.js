// import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react';


// function App() {

//   // <!!!---HOOK-STATES-START---!!!>

//   const [task, setTask] = useState('');
//   const [updatedTask, setUpdatedTask] = useState(task);
//   const [elements, setElements] = useState([]);
//   const [isCrossedOut, setIsCrossedOut] = useState(false);

//   // <!!!---HOOK-STATES-END---!!!>

//   // <!!!---EVENT-HANDLES-START---!!!>

//   const handleButtonClick = () => {
//     if (task !==""){
//       setUpdatedTask(task);
//       const taskElement = <p style={wordStyle}>{updatedTask}</p>
//       const taskCheck = <button onClick={handleButtonClickCrossOut}>Check</button>
//       setElements([...elements, taskElement, taskCheck]);
//     }
//   };
//   const handleButtonClickCrossOut = () => {
//     setIsCrossedOut(!isCrossedOut);
//   };
//   const onSubmit = (event) => {
//     event.preventDefault();
//     setTask('');
//   };
//   const handleOnchange = (event) => {
//     setTask(event.target.value);
//   };

//   // <!!!---EVENT-HANDLES-END---!!!>


//     // <!!!---CROSS-OUT-CSS-STYLE-START---!!!>

//   const wordStyle = {
//     textDecoration: isCrossedOut ? 'line-through' : 'none'
//   };

//     // <!!!---CROSS-OUT-CSS-STYLE-END---!!!>



  
//           return (
//             <div className="App">
//               <form onSubmit={onSubmit}>

//                 <input type="text" id='task' name='task' onChange={handleOnchange} value={task}></input>

//                 <button type="submit" onClick={handleButtonClick}>Add Task</button>
//                     {elements.map((element, index) => (
//                       <div key={index}>{element}</div>
//                 ))}

//                 <p style={wordStyle}>{updatedTask}</p>

//               </form>
//             </div>
//           );
//         }

// export default App;



import React, { useState } from 'react';


function App() {

  // <---State-Start--->

  const [task, setTask] = useState('');
  const [finishedTask, setFinishedTask] = useState([]);

  // <---State-End--->

  // <---Handles-Start--->  

  const handleAddTask = (event) => {
    setTask(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(task !== '') {
    const newTask = {
      text: task,
      crossOut: false
    };
    
    setFinishedTask([...finishedTask, newTask]);
    setTask('');
  };
  };
  const onCrossOutClick = (index) => {
    const crossedOutTask = [...finishedTask];
    crossedOutTask[index].crossOut = !crossedOutTask[index].crossOut;
    setFinishedTask(crossedOutTask);
  };

  // <---Handles-End--->




  return (
    <div>
        <input type='text' value={task} onChange={handleAddTask}></input>
        <button onClick={handleSubmit}>Add Task</button>
        {finishedTask.map((task, index) => (
          <div key={index}>
          <ul style={{ textDecoration: task.crossOut ? 'line-through' : 'none' }}>
              {task.text}
            </ul>
            <button onClick={() => onCrossOutClick(index)}>
              Cross-Out!
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;


