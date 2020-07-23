import React, { Component } from "react";
import Reservation from "./Reservation";

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

    return <ul>{reservationNodes}</ul>;
  }
}

export default ReservationList;
