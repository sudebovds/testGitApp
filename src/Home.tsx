import { useTypedSelector } from './hooks/useTypedSelector';
import { tryLoading } from './helpers/SupportFunctions';
import SearchForm from './Components/SearchForm/SearchForm';
import ResultList from './Components/ResultList/ResultList';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


const Home = () => {

  const { data, loading, error } = useTypedSelector(state => state.repos);

    return(
      <Container fluid className = 'wrapper'>
        <Row>
          <Col>
            <h1 className = 'text-center'>Find Repos</h1>
          </Col>
        </Row>
        <SearchForm />

        {
          data ? 
          <>
            {tryLoading(loading, error)}
              <ResultList />
            </>
            : null
        }

      </Container>
    )

}

export default Home
