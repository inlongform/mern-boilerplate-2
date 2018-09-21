import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../../actions/userActions";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      errors: {}
    };
  }
  componentDidMount() {
    this.props.getUsers();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  render() {
    const { users } = this.props.users;
    return (
      <div className="landing">
        <img src="/images/hello.png" alt="" height="50" />
        <h1>{users.msg}</h1>
      </div>
    );
  }
}

Landing.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Landing);
