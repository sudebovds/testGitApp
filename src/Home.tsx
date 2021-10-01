import axios from 'axios'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import SearchForm from './Components/SearchForm/SearchForm';
import { ContextInterface } from './Interfaces/Common'


const Home = () => {
  const [data, setData] = useState<ContextInterface | null>(null);

    return(
      <Container fluid className = 'wrapper'>
        <Row>
          <Col>
            <h1 className = 'text-center'>Find Repos</h1>
          </Col>
        </Row>
        <SearchForm
          data = {data}
          setData = {setData}
        />
        {data ? 
          <Row>
            <Col>
              <div className="list-group">
                {
                  data?.items.map((item: any) => {
                    return(
                      <a key = {item.node_id} href="#" className="list-group-item list-group-item-action" aria-current="true">
                        <div>
                          <h2>{item.name}</h2>
                          <p>Autor: {item.owner.login}</p>
                          <p>{item.description}</p>
                          <div>
                            {item.watchers} {item.open_issues} {item.forks}
                          </div>
                        </div>
                      </a>
                    )
                    })
                }
              </div>
            </Col>
          </Row>
        : null}
      </Container>
    )

}

export default Home
