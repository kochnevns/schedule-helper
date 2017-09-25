import React, {Component} from 'react'
import { connect } from 'react-redux'

class Repository extends Component {

    constructor(props) {
      super(props)
      this.checkedChange = this.checkedChange.bind(this)

    }

    render () {
        return (
            <div className="repository mdl-list__item">
              <input type="checkbox" onChange={this.checkedChange}></input>
              <span id={this.props.model.name}>{this.props.model.name}</span>
            </div>
        )
    }
    checkedChange() {
      console.log(document.getElementById(this.props.model.name))
      this.props.onCheckedChange(document.getElementById(this.props.model.name).innerHTML)
    }

}
export default connect(
  state => ({
    repos: state.repos
  }),
  dispatch => ({
    onCheckedChange: (name) => {
      dispatch({ type: "REPO_CHECKED", payload: name })
    }
  })
)(Repository);
