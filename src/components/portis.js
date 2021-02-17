import React, { Component, useState } from 'react';
import { web3, portis } from '../services/web3';

import { globalContext } from '../context'
import { Card, Button } from 'ui-neumorphism'

class ShowPortis extends Component {
  
  callPortis = () => portis.showPortis();

  render() {
    return(
      <Button 
        dark 
        rounded 
        type="button" 
        onClick={this.callPortis}
        >
          see portis account
        </Button>
    );
  }
}

class LoginPortis extends Component {
  
  portisLogin = () => {
    portis.provider.enable();
    
    portis.onLogin((walletAddress, email, reputation) => {
      web3.eth.getBalance(walletAddress)
        .then( (balance) => {
          balance = Number(web3.utils.fromWei(balance))
          this.context.authenticated(walletAddress, balance);
      });
    });

    portis.onError((err) => {
      console.log("This is an error -", err)
    })
  }

  render() {
    
    return(
      <Button 
        dark 
        rounded 
        type="button" 
        onClick={this.portisLogin}
        >
          login with portis
        </Button>
    );
  }
}; LoginPortis.contextType = globalContext;

class LogoutPortis extends Component {
  
  portisLogout = () => {
    // portis.provider.enable();
    portis.logout();
    portis.onLogout(() => {
      this.context.authenticated(null,null);
    });
  }

  render() {
    
    return(
      <button 
        className="btn btn-primary btn-pill text-info mr-2 mb-2" 
        type="button" 
        onClick={this.portisLogout}
      >
        logout of portis
      </button>
    );
  }
}; LogoutPortis.contextType = globalContext;


export { ShowPortis, LoginPortis, LogoutPortis };