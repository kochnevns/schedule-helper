import React, {Component} from 'react'
import { resolve } from 'path'
import Repository from './Repository.jsx'
import RepositoryModel from './../RepositoryModel'
import { connect } from 'react-redux'
import config from 'config'
import { getRepos } from './../actions/repos'


class ReposList extends Component {

    constructor(props) {
      super(props)
      this.confirmRepos = this.confirmRepos.bind(this)
      this.props.onGetRepos(this.props.path)
    }
    confirmRepos() {
      this.props.onConfirmRepos()
    }

    render () {
        return (
            <div className="reposList">
            <ul className="mdl-list">
              {
                this.props.repos.map( repo => repo && <Repository model={repo}></Repository>)
              }
            </ul>
            { this.props.repos.length && <button className="mdl-button--colored mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.confirmRepos}>Confirm</button> }
            </div>
        )
    }

}
export default connect(
  state => ({
    repos: state.repos
  }),
  dispatch => ({
    onGetRepos: (path) => {
      dispatch(getRepos(path))
    },
    onConfirmRepos: () => {
      dispatch({type: "CONFIRM_REPOS", payload: true })
      dispatch({type: "GO_INJECT_HOOKS"})
    }
  })
)(ReposList)
