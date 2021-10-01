import axios from 'axios';
import React, { FC, useRef, useState, useEffect, Dispatch } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { ContextInterface } from '../../Interfaces/Common'

interface searchFormType{
    data: ContextInterface | null;
    setData: Dispatch<ContextInterface>;
}

const SearchForm: FC<searchFormType> = ({data, setData}) => {
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [searchQuery, setSearchQuery] = useState<string | null>(null);

    useEffect(() => {
        const query = searchQuery?.trim();

        axios.request({
            url: 'search/repositories',
            method: 'get',
            baseURL: 'https://api.github.com',
            params: {
              q: query,
              per_page: 30,
              page: 1
            }
          })
            .catch(err => console.error(err))
            .then(response => {
              setData(response?.data);
            })
    }, [searchQuery])

    return (
        <Row>
            <Col md = {6} style = {{margin: 'auto'}}>
                <Form onSubmit = {(e: React.FormEvent) => {
                    e.preventDefault()
                    
                    if(searchInputRef?.current?.value){
                        setSearchQuery(searchInputRef.current.value)
                    }
                }}>
                    <Form.Group 
                        className="mb-3" 
                        controlId="formBasicSearch"
                    >
                        <Form.Control ref = {searchInputRef} type="text" placeholder="Type the repo name" />
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    )
}

export default SearchForm
