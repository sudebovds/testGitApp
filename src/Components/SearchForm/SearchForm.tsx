import React, { FC, useRef, useState, useEffect, Dispatch } from 'react'
import axios from 'axios'
import { Col, Form, Row } from 'react-bootstrap'
import { ContextInterface } from '../../Interfaces/Common'
import { FetchingData } from '../../API/apiFunctions'

interface searchFormType{
    setData: Dispatch<ContextInterface>;
}

const SearchForm: FC<searchFormType> = ({ setData }) => {
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [searchQuery, setSearchQuery] = useState<string | null>(null);

    useEffect(() => {
        FetchingData(searchQuery, setData)
        
    }, [searchQuery])

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        
        if(searchInputRef?.current?.value){
            setSearchQuery(searchInputRef.current.value)
        }
    }

    return (
        <Row>
            <Col md = {6} style = {{margin: 'auto'}}>
                <Form onSubmit = {onSubmitHandler}>
                    <Form.Group 
                        className="mb-3" 
                        controlId="formBasicSearch"
                    >
                        <Form.Control ref = {searchInputRef} type="text" placeholder="Type the repo name and push the Enter" />
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    )
}

export default SearchForm
