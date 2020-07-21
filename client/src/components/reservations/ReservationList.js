import React, { Component } from "react";
import Reservation from "./Reservation";

class ReservationList extends Component {
  render() {
    const reservationNodes = this.props.reservations.map(
      (reservation, index) => {
        return (
          <Reservation key={index} reservation={reservation} />
        );
      }
    );

    return <ul>{reservationNodes}</ul>;
  }
}

export default ReservationList;
