import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Tabs from "./components/common/Tabs/Tabs";
import TextInput from "./components/common/TextInput/TextInput";
import Button from "./components/common/Button/Button";
import { addCity } from "./store/actions/weatherActions";

const App = () => {
  const onPressEnter = e => {
    if (e.type === "keydown" && e.keyCode !== 13) {
      return;
    }
    dispatch(addCity(searchingText));
    setSearchingText("");
  };
  const dispatch = useDispatch();
  const [searchingText, setSearchingText] = useState("");
  const onChangeHandler = e => setSearchingText(e.target.value);
  const searchHandler = () => {
    dispatch(addCity(searchingText));
    setSearchingText("");
  };
  const message = useSelector(state => state.weather.message);
  return (
    <div className="app-wrapper">
      <div className="main-content">
        <div className="find">
          <TextInput
            onChange={onChangeHandler}
            value={searchingText}
            placeholder={"Название города"}
            onKeyDown={onPressEnter}
          />
          <Button text={"Найти"} onClick={searchHandler} />
        </div>
        <div className="message">{message}</div>
        <Tabs />
      </div>
    </div>
  );
};

export default App;
