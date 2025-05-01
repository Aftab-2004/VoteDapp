import React, { Component } from 'react';
import NewElection from './components/custom/NewElection';
import NavBar from './components/custom/Navbar';
import Home from './components/custom/Home';
import Vote from './components/custom/Vote';
import VoteCount from './components/custom/VoteCount';
import ElectionData from './components/custom/ElectionData';
import Choose from './components/custom/Choose';
import { BrowserRouter, Route } from 'react-router-dom';
import NewCandidate from './components/custom/NewCandidate';
import Login from './components/custom/Login';
import './components/custom/Forms.css';

class App extends Component {

    getVal = () => {
        console.log('Test!')
    }

    render(){
        const appStyle = {
            minHeight: '100vh',
            backgroundColor: 'var(--background-dark)',
            color: 'var(--text-primary)'
        };

        const contentStyle = {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '2rem'
        };

        return (
            <BrowserRouter>
                <div style={appStyle}>
                    <NavBar getVal={this.getVal}/>
                    <div style={contentStyle}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/newelection" component={NewElection} />
                        <Route exact path="/elections" component={ElectionData} />
                        <Route exact path="/candidates/:id" component={NewCandidate} />
                        <Route exact path="/vote/:id" component={Vote} />
                        <Route exact path="/choose" component={Choose} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/voteCount/:id" component={VoteCount}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
