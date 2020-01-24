import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, NavLink } from "react-router-dom";
import Tab from "./Tab/Tab";
import styles from "./Tabs.module.css";

const Tabs = () => {
  const all = useSelector(state => state.weather.data.all);
  const active = useSelector(state => state.weather.data.active);
  const deleted = useSelector(state => state.weather.data.deleted);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs_labels}>
        <NavLink exact activeClassName={styles.active_tab} to="/">
          Все
        </NavLink>
        <NavLink activeClassName={styles.active_tab} to="/active">
          Активные
        </NavLink>
        <NavLink activeClassName={styles.active_tab} to="/deleted">
          Удаленные
        </NavLink>
      </div>
      <div className={styles.tabs_contents}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Tab data={all} status={"all"} />}
          />
          <Route
            path="/active"
            render={() => <Tab data={active} status={"active"} />}
          />
          <Route
            path="/deleted"
            render={() => <Tab data={deleted} status={"deleted"} />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Tabs;
