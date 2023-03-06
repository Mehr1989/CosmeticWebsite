import React from 'react'
import { FC } from 'react'
import { Container,Col,Row,Card,Button } from 'react-bootstrap'
import { productData } from './data'

const Product:FC=() => {
  return (
    <>
    <section>

       <Container fluid className='mt-5'>
        <Row>
        <div>
        <h1 style={{float:"left",fontWeight:"700",marginBottom:'2%'}}>Trending Products</h1>
      
    </div>
    {productData.data.map((list)=>(<>

<Col lg={3} md={6} sm={12} >
  <Card style={{ border:"2px solid black",height:'auto' }} className='m-2  box' >
   <div style={{width:"100%", height:"30vh",marginTop:"2%"}}>
    <Card.Img  src={list.source} style={{width:"60%", height:"100%"}} />

     </div>

     <Card.Body>
<Card.Title style={{fontWeight:"700"}}>{list.title}</Card.Title>
<div style={{display:"flex",flexWrap:'wrap', height:"12vh"}}>

<Card.Text >{list.text}</Card.Text>
</div>



<Button variant="dark"   >Go somewhere</Button>

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

export default Product
