import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Tab from "./Tab/Tab";
import styles from "./Tabs.module.css";

const Tabs = () => {
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
          <Route exact path="/" render={() => <Tab widgets={["all"]} />} />
          <Route path="/active" render={() => <Tab widgets={["active"]} />} />
          <Route path="/deleted" render={() => <Tab widgets={["deleted"]} />} />
        </Switch>
      </div>
    </div>
  );
};

export default Tabs;
