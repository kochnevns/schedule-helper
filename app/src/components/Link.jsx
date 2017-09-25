import React, {Component} from 'react'
import {shell} from 'electron'
import styles from '../styles/local.css'
import fs from 'fs'

export default class Link extends Component {

    link (url) {
        shell.openExternal(url)
    }

    render () {
        console.log(fs)
        return (
            <a href='#' onClick={ () => {this.link(this.props.to)} } className={styles.link} >
                {this.props.children}
            </a>
        )
    }
}
