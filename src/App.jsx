import "./App.css";
import Hesder from "./components/header/hesder";

function App() {
  // let name = "ivan";
  // console.log(name);

  // const getName = (isAdmin) => {
  //   if (isAdmin === true) {
  //     return "привет админ";
  //   } else {
  //     return "ты не вдмин";
  //   }
  // };
  // const arrayName = [{name:'Ivan',},{name:'Eric'}];
  // const onHandleClick = (id) =>{
  //   console.log(id);
  // }

  const isAdmin = true;
  return (
    <>
      <div>
        <Hesder />
      </div>
      <div>
        {/* {isAdmin === true ? <h1>Hello Admin</h1> : <h1>Hello user</h1>} */}
        {isAdmin && <h1>Hello admon</h1>}
        {!isAdmin && <h1>Hello user</h1>}
      </div>
      {/* <h2>{getName(true)}</h2> */}
      {/* <div>
        <button className="btn" onClick={() => onHandleClick(1323)}>click mi</button>
      </div> */}
      {/* <div>
        { {arrayName.map((item,index) =>(
          <p key={index}>{item.name}</p>
        ))}}
      </div> */}
    </>
  );
}

export default App;
