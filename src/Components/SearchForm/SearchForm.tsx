import React, { ChangeEvent, useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { FetchingData } from '../../assets/SupportFunctions';

const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [pageItemsCount, setPageItemsCount] = useState(30);
    const [data, setData] = useState(null);

    const onChangeHandler = (e: ChangeEvent, stateChanger: (data: any) => void) => {
        e.preventDefault();

        stateChanger(e.target?.value);
    }

    const formSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if(searchQuery){
            FetchingData({
                url: 'search/repositories',
                query: searchQuery,
                per_page: pageItemsCount,
                dataFunction: setData
            });
        } else{
            console.log('empty input');
        }
    }

    console.log(data);

    return (
        <Form className = 'form' onSubmit = {formSubmitHandler}>
            <Row className = 'form__row mb-3'>
                <Form.Group as={Col} controlId="formGridSearch">
                    <Form.Label>Search</Form.Label>
                    <Form.Control type="search" placeholder="Type the repo name" onChange = {(e) => onChangeHandler(e, setSearchQuery)} />
                </Form.Group> 
                    <Form.Group as={Col} controlId="formGridCount">
                    <Form.Label>Items per page</Form.Label>
                    <Form.Control type="number" onChange = {(e) => onChangeHandler(e, setPageItemsCount)} />
                </Form.Group>                                                       
            </Row>

            <Button variant="primary" type="submit">
                Serch
            </Button>
        </Form>    
    )
}

export default SearchForm
