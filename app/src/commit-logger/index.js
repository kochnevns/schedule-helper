import fs from 'fs'
import hook from './hook-template'
import path from 'path'

const EVENTS_DIVIDER = '*****\n'

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h)
    return this
}

function parseShit(shit) {
  let shits = shit.split(EVENTS_DIVIDER)
  return shits.filter( shit => !!shit).map(function(event){
    let [date, title] = event.split('\n')
    return {
      title,
      start: new Date(date),
      end: new Date(date).addHours(1),
    }
  })
}
export default class CommitLogger {

    constructor(logfilePath, repositories) {
      this.logfilePath = logfilePath
      this.repositories = repositories
      if (!this._logFileExists()) {
        this._crateLogFile()
        this._injectHooks()
      }
    }
    _logFileExists() {
      return fs.existsSync(this.logfilePath)
    }

    _crateLogFile() {
      fs.appendFileSync(this.logfilePath, new Buffer(''))
    }

    _injectHooks() {
      this.repositories.forEach( ( repo ) => {
        fs.appendFileSync(path.resolve(repo.path, './.git/hooks/post-commit'), hook(this.logfilePath), { mode: 0o755})
      })
    }
    static getEvents() {
      return parseShit('' + fs.readFileSync(path.resolve(process.cwd(), './git-log.log')))
    }

}
