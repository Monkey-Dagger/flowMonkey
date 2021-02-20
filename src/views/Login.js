import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { web3, portis } from '../services/web3';

const LoginPrompt = (props) => {

  const { modal, setModal, isAuth, setIsAuth } = props;

  // if already authenticated, dont show modal
  if(isAuth) { setModal(false); }

  let history = useHistory()

  const checkAuth = () => {
    if(!isAuth && !modal) {
      history.goBack();
    }
  }

  const closeModal = () => {
    setModal(false);
  };

  const MetamaskLogin = (e) => {
    e.preventDefault();
    
  }
  
  const PortisLogin = () => {
    
    portis.provider.enable();
    
    portis.onLogin((walletAddress, email, reputation) => {
      console.log(walletAddress)
      web3.eth.getBalance(walletAddress)
        .then( (balance) => {
          balance = Number(web3.utils.fromWei(balance))
          // TODO set address
        });
      setIsAuth(true); setModal(false);
    });

    portis.onError((err) => {
      console.log("This is an error -", err)
    })
  }

  return(
    <Modal 
      isOpen={modal} toggle={closeModal} autoFocus={true} size="sm"
      backdrop="static" keyboard={false} onClosed={checkAuth}
    >
      <ModalHeader toggle={closeModal}>
        Monkey Daggers - Login
      </ModalHeader>
      <ModalBody>
        <Button outline color="primary" onClick={MetamaskLogin}>
          Metamask
        </Button>
        {'  '}
        <Button outline color="secondary" onClick={PortisLogin}>
          Portis
        </Button>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  );
}

export default LoginPrompt;