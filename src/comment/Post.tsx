
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from './postSlice';
import { useEffect } from 'react';
import { FC } from "react";
import { Container,Row,Col } from 'react-bootstrap';


const Post:FC =() => {
    const { posts, isLoading, error } = useSelector((state:any) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllPosts());
    }, [dispatch]);

  return (
    <>
   

    
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>something went wrong</h3>}
      <section>
        <Container fluid  className='mt-5'>
         
            <Row style={{backgroundColor:"#d3e8d7"}}>
            <div>
        <h1 style={{float:"left",fontWeight:"700",marginBottom:'2%'}}>Your Comments:</h1>
      
    </div>
        {posts &&
          posts.slice(0,4).map((post :any) => {
            return (
                <>
                
              <section>
                <Col md={8} sm={12} className='m-3' style={{backgroundColor:"#86ba90", 
                                                     borderRadius:"8px",border:'3px dotted black'}}>
            
              <article key={post.id as number}>
                <small>{post.id as number}</small>
                <h4 >{post.title as string}</h4>
                <p>{post.body as string}</p>
                
              </article>
              </Col>
              </section>
              </>
            );
          })}
          </Row>
        </Container>
      </section>
      
    </>
  )
}

export default Post
