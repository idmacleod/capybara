import React, { Component } from "react";
import "../../styles/Reservation.css";
import moment from "moment";

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.deleteReservation = this.deleteReservation.bind(this);
  }

  deleteReservation(id) {
    const reservationDeleteUrl = "http://localhost:8080/reservations/";
    return fetch(reservationDeleteUrl + id, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => this.props.onReservationCancel())
    .then(() => this.props.refresh());
  }

  render() {
    const start = moment(this.props.reservation.start).format("HH:mm");
    const end = moment(this.props.reservation.end).format("HH:mm");

    return (
      <div className="reservation">
        <ul className="reservation-details">
          <li>{start} - {end}</li>
          <li>{`${this.props.reservation.customer.firstName} ${this.props.reservation.customer.lastName}`}</li>
          <li>{`${this.props.reservation.partySize} Guest(s) / Table ${this.props.reservation.venueTable.id}`}</li>
          {this.props.reservation.reservationNotes && (<li className="italics"> Notes: {this.props.reservation.reservationNotes}</li>)}
        </ul>
        <div className="cancel">
          <button onClick={() => this.deleteReservation(this.props.reservation.id)}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default Reservation;
