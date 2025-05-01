import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends Component {
    state = {
        location: ""
    }

    componentWillReceiveProps(){
        console.log(this.props)
        this.setState({
            location: this.props.history.location.pathname
        })
    }
    
    render(){
        const navStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: 'var(--background-light)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        };

        const containerStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto'
        };

        const logoStyle = {
            color: 'var(--text-primary)',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textDecoration: 'none'
        };

        const navLinksStyle = {
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0
        };

        const linkStyle = {
            color: 'var(--text-primary)',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease'
        };

        if(this.state.location === "/" || this.state.location === "/choose" || this.state.location === "/vote" || this.state.location === "/login"){
            return ( 
                <nav style={navStyle}>
                    <div style={containerStyle}>
                        <a style={logoStyle}>E-Election</a>
                    </div>
                </nav>
            )
        } else {
            return(
                <nav style={navStyle}>
                    <div style={containerStyle}>
                        <a style={logoStyle}>E-Election</a>
                        <ul style={navLinksStyle}>
                            <li><NavLink to="/" style={linkStyle} activeStyle={{color: 'var(--primary-color)'}}>Home</NavLink></li>
                            <li><NavLink to="/newelection" style={linkStyle} activeStyle={{color: 'var(--primary-color)'}}>New Election</NavLink></li>
                            <li><NavLink to="/elections" style={linkStyle} activeStyle={{color: 'var(--primary-color)'}}>Elections</NavLink></li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
}

export default withRouter(Navbar)