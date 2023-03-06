import React from 'react'
import { FC } from 'react';
import { Container,Row,Col,Nav,Form,Button } from 'react-bootstrap';

import './style.css'

const Navbar:FC=() =>{
  return (
    <>
    <section className='navbar'>
      <Container fluid  bg-secondary className='text-center' >
        <Row className='text-center' >
         <div className='logoBox'>
         <Col lg={12}  sm={12} className="ms-4" > 
         <h5 style={{fontWeight:"900"}}>
          Glowing <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xwvxbycZlwoy9_p_4DHeJaMoECHHW-LguQ&usqp=CAU' style={{width:"60px", height:'auto'}}/>
        </h5>
        </Col>
         </div>
        </Row>
       
        <Row> 
        <Col  lg={6} md={12} sm={12} >
          
        <div className='searchBox'>
         
          <Form className="d-flex">
       
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
               
            <Button  variant="dark">Search</Button>
          </Form>
        
          </div>
    
          </Col>

     
      <Col style={{display:"flex",justifyContent:'end'}}  >
      <div className='linkBox'>
          <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home" style={{color:"black",fontWeight:"600"}}>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1" style={{color:"black",fontWeight:"600"}} >Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2" style={{color:"black",fontWeight:"600"}} >Link</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
          </Col>
 
        </Row>
   
      </Container>
    </section>

  <section style={{position:"relative"}} className='hero' >
    <Container className='text-center '>
      <Row  className='mt-3' >
        <Col  style={{position:'absolute',top:'30%', right:"20%"}} >
          <div className='heroBox'>

          <h2 style={{}}>Shine & Glow</h2>
          <h2 style={{}} >Beauty of Skin</h2>
          <p>rur rwoir o oirwoiwoi rhtjujyj tjuryj  </p>
          <Button variant='dark'>Click for more</Button>
     
          </div>
        
      
         
        </Col>
      </Row>
    </Container>
  </section>
  
 
    </>
  )
}

export default Navbar
