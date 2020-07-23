import React, { Component } from "react";

class Customer extends Component {
  render() {
    const email = this.props.customer.email;

    return (
      <tr>
        <td>{this.props.customer.firstName} {this.props.customer.lastName}</td>
        <td>{this.props.customer.phone}</td>
        <td><a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">{email}</a></td>
        <td>{this.props.customer.reservations.length}</td>
      </tr>
    );
  }
}

export default Customer;