import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './HeaderStyle.css'

class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <>
          <Link to="/feature">Feature</Link>
          <Link to="/signout">Sign Out</Link>
        </>
      )
    } else {
      return (
        <>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </>
      )
    }
  }

  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header)
