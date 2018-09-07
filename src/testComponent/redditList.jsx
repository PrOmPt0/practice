import React, {Component, PureComponent} from 'react'
import {get} from "axios";
import {observer} from "mobx-react";
import {action, observable} from 'mobx';

import StyleS from '../css/style.css'

const redditURL = 'https://www.reddit.com/r/china/hot.json?limit=10&raw_json=1&show=all&g=GLOBAL'

@observer
export default class RedditList extends Component {
    @observable list = []
    componentDidMount() {
        this.fetchParams()
    }
    @action
    async fetchParams() {
        let res = await get(redditURL),
            data = res.data.data.children
        this.list = data
    }

    render() {
        return (
            <ul className={StyleS.preLeft}>
                {/* {JSON.stringify(this.list,null,2)} */}
                {this
                    .list
                    .map(({data}) =>< List key = {
                        data.id
                    }
                    data = {
                        data
                    } />)}
            </ul>
        )
    }
}

class List extends PureComponent {
    render() {
        let {title, url: link} = this.props.data
        return <li>
            <a href={link}>{title}</a>
        </li>
    }
}