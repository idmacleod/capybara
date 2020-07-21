import React, { Component } from "react";

class Customer extends Component {
  constructor({props}) {
    super(props);
    this.deleteCustomer = this.deleteCustomer.bind();
  }

  deleteCustomer(id) {
    const customerDeleteUrl = "http://localhost:8080/customers/";
    return fetch(customerDeleteUrl + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(window.location.reload(false));
  }

  render() {
    const email = this.props.customer.email;

    return (
      <tr>
        <td>{this.props.customer.firstName} {this.props.customer.lastName}</td>
        <td>{this.props.customer.phone}</td>
        <td><a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">{email}</a></td>
        <td>{this.props.customer.reservations.length}</td>
        {/* <td className="button">
          <button className="delete">Delete</button>
        </td> */}
      </tr>
    );
  }
}

export default Customer;