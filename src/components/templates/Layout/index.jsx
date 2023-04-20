import Container from 'react-bootstrap/Container'

function Layout ({ children }) {
  return (
    <Container fluid className='vh-100'>
      {children}
    </Container>
  )
}

export default Layout
