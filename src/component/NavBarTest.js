import React from 'react';
import { Carousel } from 'react-bootstrap'
const NavBarTest = ({ imageList }) => {

	return (
		<>
			<div style={{ position: 'absolute', width: '60%', height:'13%', bottom: '20px', left: '500px', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>
			<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/collage.jpg"
      alt="First slide"
      width="100px"
      height="50px"
    />
    <Carousel.Caption>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/skyview01.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/collage.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
			</div>
		</>
		// <NavBar bg="light" expand="lg">
		// 	<Container>
		// 		<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
		// 		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		// 		<Navbar.Collapse id="basic-navbar-nav">
		// 			<Nav className="me-auto">
		// 				<Nav.Link href="#home">Home</Nav.Link>
		// 				<Nav.Link href="#link">Link</Nav.Link>
		// 				<NavDropdown title="Dropdown" id="basic-nav-dropdown">
		// 					<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		// 					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
		// 					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
		// 					<NavDropdown.Divider />
		// 					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
		// 				</NavDropdown>
		// 			</Nav>
		// 		</Navbar.Collapse>
		// 	</Container>
		// </NavBar>
	);
};

export default NavBarTest;