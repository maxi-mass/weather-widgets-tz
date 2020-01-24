import React from "react";
import { useSelector } from 'react-redux';
import "./App.css";
import Tabs from "./components/common/Tabs/Tabs";
import TextInput from "./components/common/TextInput/TextInput";
import Button from "./components/common/Button/Button";

const App = () => {

  const message = useSelector(state => state.weather.message);
  return (
    <div className="app-wrapper">
      <div className="main-content">
        <div className="find">
          <TextInput placeholder={"Название города"} />
          <Button text={"Найти"} />
        </div>
        <div className="message">{message}</div>
        <Tabs />
      </div>
    </div>
  );
};

export default App;
