import React from "react";
import { productData } from "./data";
import { FC } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from "react-bootstrap";



const Main:FC=()=> {
  
  return (
    <section style={{marginTop:'3%'}}>

    <Container   className="mt-3">
      <Row >
  
     {productData.data.map((list)=>(<>

                     <Col lg={4} md={6} sm={12}>
                      <Card style={{ border:"3px dotted black" }} className='m-2  box' >
                        <div style={{width:"100%", height:"37vh",marginTop:"2%"}}>
                        <Card.Img  src={list.source} style={{width:"90%", height:"95%"}} />

                        </div>
                     
                    <Card.Body>
                    <Card.Title style={{fontWeight:"700"}}>{list.title}</Card.Title>
      
                    <Button variant="dark" >Go somewhere</Button>
                   </Card.Body>
                   </Card>
                   </Col>
                  
               
                                          
                                </>))}
          
           </Row>
      </Container>
      </section>
  )
}

export default Main
