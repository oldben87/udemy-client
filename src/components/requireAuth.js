import React from 'react'
import { connect } from 'react-redux'

export default (ChildComponent) => {
  class ComposedComponent extends React.Component {
    // component just rendered
    componentDidMount() {
      this.shouldNavigateAway()
    }

    //just updated
    componentDidUpdate() {
      this.shouldNavigateAway()
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/')
      }
    }
    render() {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return { auth: state.auth.authenticated }
  }

  return connect(mapStateToProps)(ComposedComponent)
}
