import React, { useState } from "react";
//import "./styles.css";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);

  const add = (e) => {  
    e.preventDefault();
    let obj = {
      key: Math.floor((Math.random() * 10) + 1),
      val: text
    }
    setArr([...arr, obj]);
    setText("");
  };

  const deleteObj = (e, key) => {
    e.preventDefault();
    let newArr = arr.filter((t)=> t.val !== key);
    setArr([...newArr]);
  }
  return (
    <div>
      <div>
        <input type="text" onChange={(e) =>{setText(e.target.value)}} placeholder="Add text" value={text}></input>
        <button type="submit" onClick={e=>add(e)}>
          Add
        </button>
      </div>
      
      {(arr.length !== 0) && 
        <div> 
          {arr.map((t)=>(
            <div className="list">
              <ul>
                <li key={t.key}>
                  {t.val}
                  <button>up</button>
                  <button>down</button>
                  <button onClick={e=>deleteObj(e, t.key)}>delete</button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      }
      
    </div> 
  );
}
