import React,{  useEffect,useState} from 'react';
import {Container,ListGroup, ListGroupItem } from 'reactstrap';
import {Link,useParams} from 'react-router-dom';
import axios from 'axios';
const Course=()=>{
  const {id}=useParams();
 
const[course,setCourse]=useState({
name:"",
description:""
    });
    
useEffect(()=>{
  loadCourses();  
    },[]);

    const loadCourses= async()=>{
      const response=await axios.get(`http://localhost:8080/api/v1/${id}`)
      setCourse(response.data);
    };

  return(
    <>
   <Container className="w-75 mx-auto  my-5 shadow py-5">
   <h2 className="text-centre font-weight-bold my-3 mx-3"> Course Details</h2>
   <ListGroup>
      <ListGroupItem className="font-weight-bold ">  Course Name: {course.name}</ListGroupItem>
      <ListGroupItem className="font-weight-bold"> Course Description: {course.description}</ListGroupItem>
      <ListGroupItem className="font-weight-bold"> Course ID: {id}</ListGroupItem>
      </ListGroup>
      <Link className= "btn btn-primary my-4"to="/">Back</Link>



   </Container>
    </>
  );

};
export default Course;
