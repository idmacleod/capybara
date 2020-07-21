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
        <Customer key={index} customer={customer} />
      );
    });

    return (
      <div className="customer-list">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Reservations</th>
            </tr>
            {customerNodes}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CustomerList;
