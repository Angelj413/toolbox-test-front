import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles } from '../../../services/files.services'

const SideBar = () => {
  const dispatch = useDispatch()
  const { files } = useSelector((state) => state.files)
  const { pending } = files
  const { control, handleSubmit } = useForm({
    defaultValues: {
      fileName: ''
    }
  })
  const onSubmit = data => dispatch(getFiles(data.fileName))

  return (
    <Container className='h-100'>
      <Row>
        <Col className='d-flex justify-content-center mt-3'>
          <img
            src='https://resumator.s3.amazonaws.com/customer_20180208142221_FSXIX0H666MNM11B/social_icons/20180224185736_toolbox_add.jpg'
            alt='Logo Toolbox'
            className='img-fluid h-25'
            style={{ borderRadius: '5px' }}
          />
        </Col>
      </Row>
      <Row>
        <Col className='d-flex flex-column align-items-center justify-content-center mt-3'>
          <h2 className='text-light'>
            Toolbox Test
          </h2>
          <p className='lead text-light'>
            Angel Morante
          </p>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex flex-column align-items-center justify-content-center mt-3'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name='fileName'
              control={control}
              render={({ field }) => (
                <InputGroup className='mb-3'>
                  <Form.Control
                    {...field}
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                    placeholder='File Name'
                  />
                  <Button variant='outline-secondary' type='submit'>
                    {pending ? 'Loading...' : 'Search'}
                  </Button>
                </InputGroup>
              )}
            />
          </form>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex flex-column align-items-center justify-content-center mt-3'>
          <ul>
            <li className='text-light'>You can see all lines for all files</li>
            <li className='text-light'>You can search a specific file's lines by file name</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default SideBar
