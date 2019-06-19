import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { authUser, logout } from '../store/actions';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      ethAddress: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    const { username, password, ethAddress } = this.state;
    const { authType } = this.props;
    e.preventDefault();
    this.props.authUser(authType || 'login', { username, password, ethAddress });
  }

  componentDidMount(){

  }


  render() {
    const { username, password, ethAddress } = this.state;
    const { authType } = this.props;
    let ethInput;
    let ethLabel;
    let cardActions;

    if (authType === 'register') {
      ethInput = <input
                    type="text"
                    value={ethAddress}
                    name="ethAddress"
                    onChange={this.handleChange}
                    autoComplete="off"
                    className="form-input validate"
                  />;
      ethLabel= <label className="form-label" htmlFor="ethAddress">
                    ethAddress {' '}
              </label>;
      cardActions = <Link className="" to="/login">login ?</Link>;
    } else {
      ethInput = null ;
      cardActions = <Link className="" to="/register">register ?</Link>;
    }
    return (
        
        <div className="row">
        <br></br><br></br><br></br><br></br>
        <form className="col s8 m6 l4 offset-s2 offset-m4 offset-l4" onSubmit={this.handleSubmit}>
          
            <div className="card blue-grey">
              <div className="card-content">
                <h1 className="card-title">{authType}</h1>
                    <div className="input-field">
                      <input id="email" type="email" value={username} name="username" onChange={this.handleChange} autoComplete="off" className="validate"/>
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                      <input id="password" type="password" value={password} name="password" onChange={this.handleChange} className="validate"/>
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field">
                      { ethLabel } { ethInput }
                    </div>
                    <div className="buttons_center">
                      <button className="button" type="submit">
                        Submit
                      </button>
                    </div>
              </div>
              <div className="card-action">
                <Link className="" to="/poll/new">Forgot password ?</Link> { cardActions }
              </div>
            </div>
          
        </form>
      </div>
    );
  }
}

export default connect(() => ({}), { authUser, logout })(Auth);