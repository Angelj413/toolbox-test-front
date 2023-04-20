
import { Container, Row, Col } from "react-bootstrap"
import TableComponent from "../../molecules/Table"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useMemo } from "react";
import { getFiles } from "../../../services/files.services";

const TableSide = () => {

  const { files } = useSelector((state) => state.files);
  const { data } = files
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFiles())
  }, [dispatch])

  const columns = useMemo(() => [
    {
      header: 'File Name',
      accessor: 'file'
    },
    {
      header: 'Text',
      accessor: 'text'
    },
    {
      header: 'Number',
      accessor: 'number'
    },
    {
      header: 'Hex',
      accessor: 'hex'
    }
  ], [])

  const tableData = useMemo(() => {
    let finalData = []
    data.forEach(item => {
      const file = item.file
      item.lines.forEach(i => {
        finalData.push({
          file,
          ...i
        })
      })
    })
    return finalData
  }, [data])

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col className="d-flex justify-content-center w-100 pt-5" style={{ maxHeight: '100vh', overflow: 'scroll' }}>
          {tableData.length ? <TableComponent columns={columns} data={tableData} /> : <p className="text-light">No data found</p>}
        </Col>
      </Row>
    </Container>
  )
}

export default TableSide