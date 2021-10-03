import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { FetchReadme } from '../../API/apiFunctions'
import ReactMarkdown from 'react-markdown'
import { Modal, Button, Badge, Row, Col } from 'react-bootstrap'
import './detail.scss'


const Detail = ({...props}) => {
    const [readmy, setReadmy] = useState();

    let { name } = useParams<any>()

    const { state } = useLocation<any>()

    let owner: string | undefined = state?.owner;

    useEffect(() => {
        if(owner){
            FetchReadme(owner, name, setReadmy)
        }

        return setReadmy(undefined);
    }, [owner])

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
                {state?.description}
            </div>
            <Row>
                <Col md = {6}>
                    Browse code: <a href = {state?.svn_url} target = '_blank'>there</a>.
                </Col>        
            </Row>          
            <div className = 'modal__description'>
                <Row>
                    <Col md = {3}>
                        <Button variant="danger">
                            Open issues <Badge bg = '' className = 'modal__description_bage'>{state?.openIssues}</Badge>
                        </Button>
                    </Col>
                    <Col md = {3}>
                        <Button variant="success">
                            Forks <Badge bg = '' className = 'modal__description_bage'>{state?.forks}</Badge>
                        </Button> 
                    </Col>
                </Row> 
                <Row className = 'modal__description_devider'>
                    <hr />
                </Row>
                {readmy ? 
                    <Row className = 'modal__description_readmy'>
                        <Col>
                            <ReactMarkdown skipHtml = {true}>
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
