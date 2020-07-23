import React, { Component } from "react";
import Reservation from "./Reservation";
import "../../styles/ReservationList.css";
import moment from "moment";

class ReservationList extends Component {
  render() {
    const reservationNodes = this.props.filteredReservations.map(
      (reservation, index) => {
        return (
          <Reservation
            key={index}
            reservation={reservation}
            filterReservations={this.props.filterReservations}
            refreshData={this.props.refreshData}
          />
        );
      }
    );

    const day = moment(this.props.selectedDay).format("dddd, MMMM Do");

    return (
      <div className="reservation-list">
        <h3>{day}</h3>
        <ul>{reservationNodes}</ul>
      </div>
    );
  }
}

export default ReservationList;