import React, {Component} from 'react'
import {remote} from 'electron'
import ReposList from './ReposList.jsx'
import { connect } from 'react-redux'

const dialog = remote.dialog;


class FolderChooser extends Component {

    constructor(props) {
      super(props)
      this.selectFolder = this.selectFolder.bind(this)
    }

    render () {
        return (
            <div>
            { !this.props.folder && <h3>Choose repositories folder</h3> }
              <div>
                { !this.props.folder && <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.selectFolder}>Choose</button> }
                { this.props.folder && <div>{this.props.folder}</div> }
              </div>
              {this.props.folder && <ReposList path={this.props.folder}></ReposList> }
            </div>
        )
    }

    selectFolder () {
      let path = dialog.showOpenDialog({properties: ['openDirectory']});
      this.props.onSelectFolder(path[0]);
    }
}
export default connect(
  state => ({
    folder: state.folder
  }),
  dispatch => ({
    onSelectFolder: (folder) => {
      dispatch({ type: 'SELECT_FOLDER', payload: folder})
    }
  })
)(FolderChooser)
