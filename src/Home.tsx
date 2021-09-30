import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import Index from './Pages/Index';

interface ContextInterface {
  totalCount: number;
  items: {
      node_id: string;
      name: string;
      full_name: string;
      owner: {
          login: string;
      };
      description: string;
      open_issues: number;
      forks: number;
  }[]
}

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

    return(
      <Container fluid className = 'wrapper'>
        <Row>
          <Col>
            <Index />
          </Col>
        </Row>
      </Container>
    )

}

export default Home
