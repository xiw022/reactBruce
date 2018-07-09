import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Project from './components/Project.js';

class App extends Component {
    state = {
        processes: [
            {id: 'a', title: 'Dejaphoto', description:
            'an Android app for not only effortlessly viewing your photos to reminisce on past times'
            ,comment: 'good'},
            {id: 'b', title: 'Bruce ICO Info', description: 'Check real time ICO information',
            comment: 'nice'},
            {id: 'c', title: '股票预测大王', description: 'The one and the only path to being rich',
            comment: 'crazy'}
        ],
        showProj: [
            {show: false}
        ]
    }

    showProjectHandler = (i) => {
        const tmp = this.state.showProj;
        tmp[i] = !tmp[i];
        this.setState({showProj: tmp});
    }

    changeContentHandler = (event, id) => {
        const personIndex = this.state.processes.findIndex(p => {
            return p.id === id;
        });
        const process = {
            ...this.state.processes[personIndex]
        };
        process.comment = event.target.value;
        const processes = [...this.state.processes];
        processes[personIndex] = process;
        this.setState({
            processes: processes
        });
    }
  render() {
      const style = {
          backgroundColor: "white",
          font: 'inherit',
          border: '1px solid blue',
          padding: "8px",
          cursor: 'cursor'
      };
      let processes = null;

      processes = (
      <div>
      {this.state.processes.map((process, index) => {
          return <Project
          title={process.title}
          description={process.description}
          comment={process.comment}
          key={process.id}
          altered={(event)=>this.changeContentHandler(event, process.id)}/>
      })}
      </div>
   );

    return(
      <div className="App">
      <Header/>
        {processes}
        <p className="intro">
          Powered by Xiuhao Wang
        </p>
      </div>
    );
  }
}

export default App;
