import React, { useEffect,useState} from 'react';

import {Container} from 'reactstrap';
import {FormGroup,Form,Label,Input,Button} from 'reactstrap';
import {useHistory,useParams,Link} from 'react-router-dom';
import axios from 'axios';

const UpdateCourse=()=>{
const[course,updateCourse]=useState(
  {name:"",
description:""});

useEffect(()=>{
  loadCourses()
 },[]);
const {id}=useParams();
let history=useHistory();

const loadCourses=async ()=>{
   const response= await axios.get(`http://localhost:8080/api/v1/${id}`)
    updateCourse(response.data);
}
const onSubmit =  e=>{
  
  axios.put(`http://localhost:8080/api/v1/${id}`,course);
  e.preventDefault();
  history.push("/");



};
return(
<>

<div className="w-75 mx-auto my-5 shadow p-5">
<h2 className="text-centre mb-4">Edit Course Details </h2>

<Form onSubmit={onSubmit}>
      <FormGroup>
        <Label className="font-weight-bold " for="name" >Course Name</Label>
        <Input type="text" name="name" value = {course.name} id="name" placeholder="Enter Course Name" onChange={e=>{
  
          updateCourse({...course,[e.target.name]:e.target.value});
        }}  />
      </FormGroup>
      <FormGroup>
        <Label className="font-weight-bold" for="description"> Course Description</Label>
        <Input type="text-area" name="description"  id="description" value = {course.description} 
        style={{height:100}}placeholder="Enter Course Description" onChange={e=>{updateCourse({...course,[e.target.name]:e.target.value});
        }}/>  
      </FormGroup>
  <Container>
      <Button type="submit"color="success">Update</Button>
      <Link className="btn btn-danger mx-3" to="/"> Cancel</Link>
      </Container>
     </Form>
      </div>
</>
);
      };
export default UpdateCourse;

















