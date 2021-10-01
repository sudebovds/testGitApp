import React, { FC } from 'react'
import { Row, Col } from 'react-bootstrap'
import { ContextInterface } from '../../Interfaces/Common'

const ResultList: FC<ContextInterface> = (data) => {
    return (
        <Row>
            <Col>
                <div className="list-group">
                    {
                        data.items.map((item: any) => {
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
    )
}

export default ResultList
