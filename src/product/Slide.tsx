import React from "react";
import { FC } from "react";
import { Container,Col,Row,Button } from "react-bootstrap";


const Slide:FC =() => {
  return (
    <>
    <section style={{marginTop:"8%"}}>
        <Container >
            <Row style={{position:"relative"}}>
                <Col md={8} className='slideBox' >
                    <div style={{position:"absolute",top:"25%"}}>
                      <h2 style={{fontWeight:"700"}}>Nutrition For Your skin </h2>
                     <Button variant="dark">Read More</Button> 
                    </div>
                </Col>
                <Col md={4} style={{height:"50vh"}} className='smallSlide'>     
                </Col>
            </Row>
        </Container>
    </section>
      
    </>
  )
}

export default Slide

