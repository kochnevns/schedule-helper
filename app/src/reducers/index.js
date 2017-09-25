import { combineReducers } from 'redux'
import folder from './folder.jsx'
import repos from './repos.jsx'
import app from './app.jsx'


export default combineReducers({
  folder, repos, app
})
