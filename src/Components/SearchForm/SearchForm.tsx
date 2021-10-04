import React, { FC, useRef, useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useAction'
import { ClearData } from '../../store/action-creators/data'


const SearchForm: FC = () => {
    const { searchQuery, page, data } = useTypedSelector(state => state.repos);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const { fetchData, setSearchQuery } = useActions();

    useEffect(() => {
        if(searchQuery){
            fetchData(searchQuery, page)
        }
        
    }, [searchQuery])

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        
        setSearchQuery(searchInputRef?.current?.value)
    }

    const submitButtonHandler = (e: React.MouseEvent) => {
        e.preventDefault();

        setSearchQuery(searchInputRef?.current?.value)
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
                    <Button variant = 'primary' type = 'reset' onClick = {submitButtonHandler} >Find</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default SearchForm
