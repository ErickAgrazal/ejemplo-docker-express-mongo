import React, { Component } from 'react'

const AppContext = React.createContext()

class AuthContext extends Component {
    constructor(props){
        super(props);
        this.setState = {
            isLoggedIn: false
        };
    }

    LogIn = () => {
        this.setState({
         isLoggedIn: true
        });
    }

    logOut = () => {
        this.setState({
            isLoggedIn: false
        });
    }
    render() {
        return (
            <AuthContext.Provider
            value={{
                ...this.state,
                LogIn: this.LogIn,
                logOut: this.logOut,
            }}
            >
            { this.props.children }
            </AuthContext.Provider>
        );
    }
}

export const Consumer = AuthContext.Consumer;
export const Provider = AppContext.Consumer;