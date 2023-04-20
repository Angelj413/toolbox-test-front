import PropTypes from 'prop-types'
import { Container, Table } from 'react-bootstrap'

const TableComponent = ({ columns, data }) => {
  return (
    <Container>
      <Table striped bordered hover variant='dark h-auto' style={{ maxWidth: '80%', maxHeight: '80vh' }}>
        <thead>
          <tr>
            {columns?.map(column => {
              return <th key={column.header}>{column.header}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {
            data?.map((item, i) => {
              return (
                <tr key={i}>
                  {
                    columns.map((column, index) => {
                      return <td key={index}>{item[column.accessor]}</td>
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Container>
  )
}

TableComponent.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    header: PropTypes.string,
    accessor: PropTypes.string
  })),
  data: PropTypes.arrayOf(PropTypes.object)
}

TableComponent.defaultProps = {
  columns: [],
  data: []
}

export default TableComponent
