import React, {Component} from 'react'
import './styles/global.css'
import FolderChooser from './components/FolderChooser.jsx'
import { connect } from 'react-redux'
import config from 'config'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';



let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

class App extends Component {
    render() {
      BigCalendar.setLocalizer(
        BigCalendar.momentLocalizer(moment)
      )
        return (
            <div className="app_root">
              { !this.props.app && <FolderChooser></FolderChooser> }

              { this.props.app &&  <BigCalendar
                events={[]}
                defaultDate={new Date}
              />}

            </div>
        )
    }
}

export default connect(
  state => ({
    app: state.app
  }),
  dispatch => ({})
)(App)
