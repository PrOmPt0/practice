import {observer} from "mobx-react";
import React from 'react'

@observer
class Timer extends React.Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }
    componentDidMount(){
        console.log(this.pros)
    }
    render() {
        // console.log(this.props.timerData.secondsPassed)
        // console.log(this.props.timerData.second)
        return (
            <span>
                Seconds passed : {this.props.timerData.secondsPassed}
            </span>
        )
    }
};

// ReactDOM.render(<Timer timerData={timerData} / >, document.body);

export default Timer