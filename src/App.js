import logo from "./logo.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState();

  async function fetchData() {
    await Promise.all([
      (await fetch("https://random.dog/woof.json")).json(),
      (await fetch("https://random.dog/woof.json")).json(),
      (await fetch("https://random.dog/woof.json")).json(),
      (await fetch("https://random.dog/woof.json")).json(),
      (await fetch("https://random.dog/woof.json")).json(),
      (await fetch("https://random.dog/woof.json")).json(),
    ]).then((result) => {
      console.log("Result:" + JSON.stringify(result));

      setList(result.map((x) => x.url));
      console.log("Result: " + result[0].url);
      console.log("List: " + JSON.stringify(list));
    });
  }

  // similar to ngOninit
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <button onClick={fetchData}>Refresh</button>
      </header>

      {list &&
        list.map((val) => {
          return (
            // <video width="300" height="500" autoplay="" loop={true}>
            //   <source src={val} />
            // </video>
            <img className="home5Main1Img" src={val} />
          );
        })}
    </div>
  );
}

export default App;
