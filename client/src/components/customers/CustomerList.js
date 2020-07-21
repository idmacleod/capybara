import React, { Component } from "react";
import Customer from "./Customer";
import "../../styles/CustomerList.css";

class CustomerList extends Component {
  sortByReservationCount(customers) {
    return customers.sort(
      (a, b) => b.reservations.length - a.reservations.length
    );
  }

  render() {
    const sortedCustomers = this.sortByReservationCount(this.props.customers);
    const customerNodes = sortedCustomers.map((customer, index) => {
      return (
        <Customer
          key={index}
          id={customer.id}
          firstName={customer.firstName}
          lastName={customer.lastName}
          phone={customer.phone}
          email={customer.email}
          reservations={customer.reservations.length}
        />
      );
    });

    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Reservations</th>
        </tr>
        {customerNodes}
      </table>
    );
  }
}

export default CustomerList;
