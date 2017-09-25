import { walk } from './../utils'
import  CommitLogger  from './../commit-logger/'
import { resolve } from 'path'
const initialState = []

function filterRepos(repo) {
  if (!repo) {
    return false
  }
  if (repo.checked) {
    return true
  }
  else {
    return false
  }
}

export default function repos(state = initialState, action) {
  if (action.type === 'SEARCH_REPOS_SUCCESS') {
    return [ ...state, ...action.payload]
  }
  else if (action.type === 'REPO_CHECKED') {
    return [ ...state.map( (repo) => {
      if (repo && repo.name === action.payload) {
        repo.checked = true
      }
      return repo
    })]
  }
  else if (action.type === 'GO_INJECT_HOOKS') {
    new CommitLogger(resolve(process.cwd(), './git-log.log'), state.filter(filterRepos))
  }
  return state
}
