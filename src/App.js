import "./App.css";

import { Component } from "react";

class App extends Component {
  showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      console.log(text);
      alert(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  render = () => {
    return (
      <div className="App">
        <input type="file" onChange={(e) => this.showFile(e)} />
      </div>
    );
  };
}

export default App;
