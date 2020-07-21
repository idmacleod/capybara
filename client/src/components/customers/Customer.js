import React, { Component } from "react";

class Customer extends Component {
  constructor(props) {
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
    return (
      <tr>
        <td>{this.props.firstName} {this.props.lastName}</td>
        <td>{this.props.phone}</td>
        <td>{this.props.email}</td>
        <td>{this.props.reservations}</td>
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
