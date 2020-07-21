import React, { Component } from "react";

class Customer extends Component {
  constructor({props}) {
    super(props);
    this.deleteCustomer = this.deleteCustomer.bind();
  }

  deleteCustomer(id) {
    const customerDeleteUrl = "http://localhost:8080/customers/";
    return fetch(customerDeleteUrl + id, {
      method: "delete",
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
        <td><a href={`mailto:${email}`} target="_blank">{email}</a></td>
        <td>{this.props.customer.reservations.length}</td>
        {/* <button
          onClick={() => this.deleteCustomer(this.props.id)}
          className="btn-delete"
        >
          Delete
        </button> */}
      </tr>
    );
  }
}

export default Customer;