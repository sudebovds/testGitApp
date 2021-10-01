import axios from 'axios'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import SearchForm from './Components/SearchForm/SearchForm';
import { ContextInterface } from './Interfaces/Common'
import ResultList from './Components/ResultList/ResultList';


const Home = () => {
  const [data, setData] = useState<any>(null);

    return(
      <Container fluid className = 'wrapper'>
        <Row>
          <Col>
            <h1 className = 'text-center'>Find Repos</h1>
          </Col>
        </Row>
        <SearchForm
          setData = {setData}
        />
        {data ? 
          <ResultList 
            data = {data.items}
          />
        : null}
      </Container>
    )

}

export default Home
