import React, { Component } from "react";
import Customer from "./Customer";
import "../../styles/CustomerList.css";

class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      filteredCustomers: []
    }

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.filterCustomers = this.filterCustomers.bind(this);
  }

  sortByReservationCount(customers) {
    return customers.sort(
      (a, b) => b.reservations.length - a.reservations.length
    );
  }

  filterCustomers() {
    const allCustomers = [...this.props.customers];
    if (this.state.filter) {
      const filteredCustomers = allCustomers.filter(customer => {
        return (
          customer.firstName.toLowerCase().includes(this.state.filter) ||
          customer.lastName.toLowerCase().includes(this.state.filter) ||
          customer.phone.includes(this.state.filter)
        );
      });
      this.setState({filteredCustomers: filteredCustomers});
    } else {
      this.setState({filteredCustomers: allCustomers});
    }
  }

  handleFilterChange(event) {
    this.setState({filter: event.target.value.toLowerCase()}, () => this.filterCustomers());
  }

  render() {
    const customers = this.state.filter ? this.state.filteredCustomers : this.props.customers;
    const sortedCustomers = this.sortByReservationCount(customers);
    const customerNodes = sortedCustomers.map((customer, index) => {
      return (
        <Customer key={index} customer={customer} />
      );
    });

    return (
      <div className="customer-list">
        <input
          type="text"
          id="filter"
          placeholder="Filter by name or phone number..."
          onChange={this.handleFilterChange}
        />
        <table className="customer-table">
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
