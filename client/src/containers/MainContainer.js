import React from "react";
import CustomerList from "../components/customers/CustomerList";
import About from "../components/miscellaneous/About";
import ErrorPage from "../components/miscellaneous/ErrorPage";
import ReservationForm from "../components/reservations/ReservationForm";
import NavBar from "../components/sitewide/NavBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MainContainer = (props) => {
  return (
    <div className="main-container">
      <Router>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <ReservationForm
                    selectedDay={props.selectedDay}
                    customers={props.customers}
                    venueTables={props.venueTables}
                    refreshData={props.refreshData}
                  />
                );
              }}
            />
            <Route
              exact
              path="/customers"
              render={() => <CustomerList customers={props.customers} />}
            />
            <Route exact path="/about" component={About} />
            <Route component={ErrorPage} />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
};

export default MainContainer;
