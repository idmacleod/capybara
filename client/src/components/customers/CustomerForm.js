import React, { Component } from "react";

class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addCustomer() {
    const newCustomer = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      reservations: [],
    };

    return fetch("http://localhost:8080/customers", {
      method: "POST",
      body: JSON.stringify(newCustomer),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(newCustomer => {
        this.props.refreshData()
          .then(() => this.props.selectCustomerById(newCustomer.id));
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addCustomer();
    this.setState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    }, () => this.props.closeModal());
  }

  handleFirstNameChange(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  handleLastNameChange(event) {
    this.setState({
      lastName: event.target.value,
    });
  }

  handlePhoneChange(event) {
    this.setState({
      phone: event.target.value,
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    return (
      <div className="customer-form">
        <h2>New Customer</h2>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" value="Create" />
                  <button onClick={this.props.closeModal}>Cancel</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default CustomerForm;
