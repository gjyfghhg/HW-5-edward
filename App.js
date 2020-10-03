import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Album from "./components/Album";

// function App() {
//   return (
//     <>
//       <div>
//         <h1>hello world</h1>
//       </div>
//       <p>my name is Edward</p>
//       <Album title="Edward Chang" />
//       <Album title="asdf" />
//       <Album title="fdsa" />
//       <Album title="jkl;" />
//       <Album title=";lkj" />
//     </>
//   );
// }
// const Album = ({ title, color }) => {
//   return (
//     <div>
//       <h1 style={{ color }}>{title}</h1>
//       <Button />
//     </div>
//   );
// };

// const Button = () => {
//   return (
//     <div>
//       <button>Click me</button>
//     </div>
//   );
// };

function App() {
  return (
    <>
      <div class="top-container">
        <h1>Album example</h1>
        <h3>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </h3>
      </div>
      <div class="container">
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
      </div>
    </>
  );
}

export default App;
