import React from "react";
import { FC } from "react";
import { Container,Col,Row,Card,Button } from "react-bootstrap";
import { featureData } from "./data";


const Feature:FC =() => {
  return (
    <>

 <section style={{marginTop:'3%'}}>

    <Container   className="mt-3 " >
      <Row style={{display:"flex",justifyContent:"center"}} >
  
     {featureData.data.map((list)=>(<>

                     <Col lg={3} md={6} sm={12}>
                      <Card  className='m-2  ' >
                        <div style={{width:"100%", height:"20vh",marginTop:"2%"}}>
                        <Card.Img  src={list.source} style={{width:"60%", height:"60%"}} />

                        </div>
                     
                    <Card.Body>
                    <Card.Title style={{fontWeight:"700"}}>{list.title}</Card.Title>
                    <Card.Text>{list.text}</Card.Text>
      
                    
                   </Card.Body>
                   </Card>
                   </Col>
                  
               
                                          
                                </>))}
          
           </Row>
      </Container>
      </section>
      
    </>
  )
}

export default Feature
