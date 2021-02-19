import React from "react";
import classNames from "classnames";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { web3, portis } from '../services/web3';

const LoginPrompt = (props) => {

  const MetamaskLogin = (e) => {
    e.preventDefault();
    
  }
  
  const PortisLogin = () => {
    
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

  return(
    <>
    <div>
      <Card>
        <CardImg top width="100%" src="" alt="monke-beeer" />
        <CardBody>
          <CardTitle tag="h5">Monkey Daggers</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Dashboard Login
          </CardSubtitle>
          <Button outline color="primary" onClick={MetamaskLogin}>
            Metamask
          </Button>
          <br/>
          <Button outline color="secondary" onClick={PortisLogin}>
            Portis
          </Button>
        </CardBody>
      </Card>
    </div>
    </>
  );
}

export default LoginPrompt;