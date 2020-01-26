import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import Tab from "./Tab/Tab";
import styles from "./Tabs.module.css";

const Tabs = () => {
  const data = useSelector(state => state.weather.data);
  data.sort((item1, item2) => {
    return item1.ix - item2.ix;
  });

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs_labels}>
        <NavLink exact activeClassName={styles.active_tab} to="/all">
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
            path="/all"
            render={() => <Tab data={data} status={"all"} />}
          />
          <Route
            path="/active"
            render={() => <Tab data={data} status={"active"} />}
          />
          <Route
            path="/deleted"
            render={() => <Tab data={data} status={"deleted"} />}
          />
          <Route exact path="/" render={() => <Redirect to="/all" />} />
        </Switch>
      </div>
    </div>
  );
};

export default Tabs;
