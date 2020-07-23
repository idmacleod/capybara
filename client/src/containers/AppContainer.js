import React, { Component } from "react";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import moment from "moment";
import "../styles/AppContainer.css";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      venueTables: [],
      reservations: [],
      selectedDay: moment().format().slice(0, 10),
      filteredReservations: []
    };

    this.fetchData = this.fetchData.bind(this);
    this.handleDaySelect = this.handleDaySelect.bind(this);
    this.refresh = this.refresh.bind(this);
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

  sortByStartTime(reservations) {
    return reservations.sort((a, b) => {
      const momentA = moment(a.start);
      const momentB = moment(b.start);
      if (moment(momentA).isBefore(momentB)) {
        return -1;
      }
      if (moment(momentB).isBefore(momentA)) {
        return 1;
      }
      return 0;
    });
  }

  handleDaySelect(day) {
    const selectedDay = moment(day).format().slice(0, 10);
    const allReservations = [...this.state.reservations];
    const filteredReservations = allReservations.filter((reservation) => {
      const reservationDay = moment(reservation.start).format().slice(0, 10);
      return reservationDay === selectedDay;
    });
    const sortedReservations = this.sortByStartTime(filteredReservations);
    this.setState({
      selectedDay: selectedDay,
      filteredReservations: sortedReservations,
    });
  }

  refresh() {
    this.handleDaySelect(this.state.selectedDay);
  }

  render() {
    return (
      <div className="app-container">
        <div className="screen">
          <SideBar
            filteredReservations={this.state.filteredReservations}
            onDaySelect={this.handleDaySelect}
            refresh={this.refresh}
            onReservationCancel={this.fetchData}
          />
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
