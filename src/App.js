import React from "react";
import "./App.css";
import Tabs from "./components/common/Tabs/Tabs";
import TextInput from "./components/common/TextInput/TextInput";
import Button from "./components/common/Button/Button";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="main-content">
        <div className="find">
          <TextInput placeholder={"Название города"} />
          <Button text={"Найти"} />
        </div>
        <Tabs />
      </div>
    </div>
  );
};

export default App;
