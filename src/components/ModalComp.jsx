import React from 'react'
import Modal from 'react-modal';

function ModalComp(props) {
    return (
        <div >
            <Modal style={{
                overlay: {
                    background: '#1F1F1F77',
                    zIndex:'1000',      },
                  content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    padding: '0',
                    opacity: '1',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    background: '#FFFFFF',
                    boxShadow: '0px 0px 16px 2px rgba(0, 0, 0, 0.09)',
                    borderRadius: '8px',
                    textAlign: 'center'
                   
                  },
            }} isOpen={props.clickToOpenModal} onRequestClose={props.clickToCloseModal}>

                <div className="modal">
                <iframe src={props.video} title="0" height='320' width="350" ></iframe>
                </div>
            </Modal>
        </div>
    )
}

export default ModalComp;
