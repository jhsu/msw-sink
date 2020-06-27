import React, { useEffect } from "react";
import "./styles.css";

export default function App() {
  useEffect(() => {
    fetch('/user').then(res => res.json()).then(console.log)
  }, [])
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
