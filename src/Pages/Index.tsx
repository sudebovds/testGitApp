import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import SearchForm from '../Components/SearchForm/SearchForm'

const Index = () => {

    return (
        <Container className = 'index'>
            <Row className = 'index__row'>
                <Col className = 'index__header'>
                    <h1 className = 'index__header_title'>Find repo</h1>
                </Col>
            </Row>
            <Row className = 'index__row'>
                <Col className = 'index__form'>
                    <SearchForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Index
