import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../App'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Customer() {
    let navigate = useNavigate();
    let [customer , setCustomer]=useState([]);

    let getCustomer = async()=>{
        try{
            let res = await axios.get(API_URL);
            setCustomer(res.data);
            // console.log(res.data);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getCustomer()
    },[])
   
  return <>
 <div className='supplier_page'>
    <div className='supplier_page_nav'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className='page_title'>Customer Data</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
<div className='people_cards_container'>
<div  className='people_cards'>
{
    customer.map((e,i)=>{
        
       return <Card key={i} style={{ width: '18rem' }}>
      <Card.Img variant="top" className='supplier_image' src={e.avatar} />
      <Card.Body className='card_body'>
        <Card.Title>Mr. {e.name}</Card.Title>
        <div><span>Email :</span> {e.email}</div>
        <div><span>Phone :</span> {e.phoneNumber}</div>
        <div><span>Additional Contact :</span> {e.addPhoneNumber}</div>
        <Card.Text className='address'>
          <span>Adress :</span> {`${e.doorNo} ${e.address} ${e.city} ${e.pinCode}`}
        </Card.Text>
      </Card.Body>
    </Card>
   
     
    })
}
</div>
</div>

 
 </div>
  </>
}

export default Customer