import React, {Component} from 'react';
import logo from './logo.svg';
import AppStyle from './App.css';
import Todo from './testComponent/first.jsx'
import {observable} from 'mobx'
import RedditList from './testComponent/redditList.jsx';

class App extends Component {
  /*  state = {
    secondsPassed: 0
  }
  componentDidMount() {
    setInterval(() => {
      // console.log(timerData)
      this.setState(prev => ({
        secondsPassed: prev.secondsPassed++
      }))
    }, 100);
  } */
  render() {
    // let ID = Todo.id console.log(Todo)
    return (
      <div className={AppStyle.App}>
        <header className={AppStyle["App-header"]}>
          <img src={logo} className={AppStyle["App-logo"]} alt="logo"/>
          <h1 className={AppStyle["App-title"]}>Welcome to React</h1>
        </header>
        <p className={AppStyle["App-intro"]}>
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <Todo timerData={timerData}/> {/* jkjhkjhkjhkjhkj {ID} */}
        {console.log(timerData)}
        <RedditList/>
      </div>
    );
  }
}
var timerData = observable({secondsPassed: 0});

setInterval(() => {
  // console.log(timerData)
  timerData.secondsPassed++;
}, 500);
export default App;
