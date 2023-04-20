import { Container, Row, Col } from 'react-bootstrap'
import SideBar from '../../organism/SideBar'
import TableSide from '../../organism/TableSide'

const TablePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className='mvh-100 bg-toolbox'>
          <SideBar />
        </Col>
        <Col className='h-100'>
          <TableSide />
        </Col>
      </Row>
    </Container>
  )
}

export default TablePage
