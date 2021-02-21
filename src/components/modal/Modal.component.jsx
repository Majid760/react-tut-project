import React, { useState } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCol, MDBRow } from
'mdbreact';
import SignIn from '../../pages/signin/SignIn.component';

const ModalPage=()=> {
    let [modal16,setModal16]=useState(false);
    let [modalNumber,setModalNumber]=useState();

    const toggle = nr => () => {
    setModalNumber([modalNumber]= !['modal' + nr]);
    }
  return (
      <MDBContainer>
        <MDBBtn onClick={toggle(16)}>MDBModal</MDBBtn>
        <MDBModal isOpen={modal16} toggle={toggle(16)}>
          <MDBModalHeader toggle={toggle(16)}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            <MDBContainer fluid className="text-white">
              <MDBRow>
                <SignIn/>
              </MDBRow>
            </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggle(16)}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }


export default ModalPage;