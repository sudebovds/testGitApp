import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { Modal, Button, Badge, Row, Col } from 'react-bootstrap'
import './detail.scss'
import { FetchReadme } from '../../API/apiFunctions'
import ReactMarkdown from 'react-markdown'

const Detail = ({...props}) => {
    const [readmy, setReadmy] = useState();

    let { name } = useParams<any>()

    const { state } = useLocation<any>()

    useEffect(() => {
        if(state.owner){
            FetchReadme(state.owner, name, setReadmy)
        }
    }, [state.owner])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                {state.description}
            </div>
            <div className = 'modal__description'>
                <Row>
                    <Col md = {3}>
                        <Button variant="danger">
                            Open issues <Badge bg = '' className = 'modal__description_bage'>{state.openIssues}</Badge>
                        </Button>
                    </Col>
                    <Col md = {3}>
                        <Button variant="success">
                            Forks <Badge bg = '' className = 'modal__description_bage'>{state.forks}</Badge>
                        </Button> 
                    </Col>
                </Row> 
                <Row className = 'modal__description_devider'>
                    <hr />
                </Row>
                {readmy ? 
                    <Row className = 'modal__description_readmy'>
                        <Col>
                            <ReactMarkdown>
                                {readmy}
                            </ReactMarkdown>
                        </Col>
                    </Row>
                    :
                    null 
                }
         
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Detail
