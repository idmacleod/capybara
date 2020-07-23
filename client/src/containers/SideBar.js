import React from "react";
import CalendarComponent from "../components/sitewide/CalendarComponent";
import ReservationList from "../components/reservations/ReservationList";
import "../styles/SideBar.css";

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <CalendarComponent onDaySelect={this.props.onDaySelect} />
        <ReservationList
          reservations={this.props.filteredReservations}
          onReservationCancel={this.props.onReservationCancel}
          filterReservations={this.props.filterReservations}  
        />
      </div>
    );
  }
}

export default SideBar;