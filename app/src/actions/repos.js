import { walk } from './../utils'
import RepositoryModel from './../RepositoryModel'
const findRepoRegExp = /(\/[\s\S]*\/)([a-z A-Z -]*)(\/\.git\/)/g


export const getRepos = (path) => dispatch => {
  walk(path, (err, res) => {
    let repos = Array.from(new Set(res.filter( folder => ~folder.indexOf('.git')).map( (folder) => {
      let match = findRepoRegExp.exec(folder.replace(/\\/g, '/'))
      return match ? `${match[1]}${match[2]},${match[2]}` : undefined
    })))
    dispatch({ type: 'SEARCH_REPOS_SUCCESS', payload: repos.map( (folder) => {
      if (folder) return new RepositoryModel(...folder.split(','))
    })})
  })
}
