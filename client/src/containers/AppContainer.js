import React, { Component } from "react";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import "../styles/AppContainer.css";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      venueTables: [],
      reservations: [],
    };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    const fetchCustomers = fetch("http://localhost:8080/customers")
      .then((res) => res.json())
      .then((data) => this.setState({ customers: data }))
      .catch((err) => console.error(err));

    const fetchVenueTables = fetch("http://localhost:8080/venue-tables")
      .then((res) => res.json())
      .then((data) => this.setState({ venueTables: data }))
      .catch((err) => console.error(err));

    const fetchReservations = fetch("http://localhost:8080/reservations")
      .then((res) => res.json())
      .then((data) => this.setState({ reservations: data }))
      .catch((err) => console.error(err));

    return Promise.all([fetchCustomers, fetchVenueTables, fetchReservations]);
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="app-container">
        <div className="screen">
          <SideBar reservations={this.state.reservations} onReservationCancel={this.fetchData} />
          <MainContainer
            customers={this.state.customers}
            venueTables={this.state.venueTables}
            onCustomerSubmit={this.fetchData}
            onReservationSubmit={this.fetchData}
          />
        </div>
      </div>
    );
  }
}

export default AppContainer;
