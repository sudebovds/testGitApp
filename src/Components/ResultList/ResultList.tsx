import React, { FC, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Detail from '../Detail/Detail'

interface dataType{
    node_id: string;
    name: string;
    full_name: string;
    owner: {
        login: string;
    };
    description: string;
    open_issues: number;
    forks: number;
}


const ResultList: FC<dataType[]> = ({data}) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Router>
            <Row>
                <Col>
                    <div className="list-group">
                        {
                            data.map((item: any) => {
                                return(
                                    <Link to = {`/${item.name}`} key = {item.node_id} href="#" className="list-group-item list-group-item-action" aria-current="true" onClick = {() => setModalShow(true)}>
                                        <div>
                                            <h2>{item.name}</h2>
                                            <p>Autor: {item.owner.login}</p>
                                            <p>{item.description}</p>
                                            <div>
                                            {item.watchers} {item.open_issues} {item.forks}
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </Col>
            </Row>

            <Switch>
                <Route path = '/:name' children = { <Detail
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                />} />
            </Switch>
        </Router>
    )
}

export default ResultList
