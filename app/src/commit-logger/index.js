import fs from 'fs'
import hook from './hook-template'
import { resolve } from 'path'


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
        fs.appendFileSync(resolve(repo.path, './.git/hooks/post-commit'), hook(this.logfilePath))
      })
    }

}
