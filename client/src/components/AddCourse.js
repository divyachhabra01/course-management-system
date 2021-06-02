import React,{ useState} from 'react';

import{ Container} from 'reactstrap';
import {FormGroup,Form,Label,Input,Button} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
const AddCourse=()=>{
const[course,setCourse]=useState({});

let history=useHistory();
const postCourses=  course =>{
   axios.post('http://localhost:8080/api/v1/courses',course);
}
const onSubmit =  e=>{
  e.preventDefault();

  postCourses(course);


  history.push("/");


};
return(
<>

<div className="w-75 mx-auto my-5 shadow p-5">
<h2 className="text-centre mb-4">Fill Course Details </h2>

<Form onSubmit={onSubmit}>
      <FormGroup>
        <Label className="font-weight-bold " for="name" >Course Name</Label>
        <Input type="text" name="name" id="name"  placeholder="Enter Course Name" onChange={(e)=>{
          setCourse({...course,name:e.target.value});
        }}  />
      </FormGroup>
      <FormGroup>
        <Label className="font-weight-bold" for="description"> Course Description</Label>
        <Input type="text-area" name="description" id="description" style={{height:100}}placeholder="Enter Course Description" onChange={e=>{setCourse({...course,description:e.target.value});

        }}/>
        
      </FormGroup>
  <Container>
      <Button  type="submit"color="success"> Add</Button>
      <Link className="btn btn-danger mx-4" to="/">Cancel</Link>
      </Container>
     </Form>
      </div>
</>
);
};
export default AddCourse;

















