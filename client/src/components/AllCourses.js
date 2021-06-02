import React, { useEffect,useState} from 'react';
import {Table,Button} from 'reactstrap';
import axios from 'axios';
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom';
toast.configure();


const AllCourses=()=>{
  const[courses,setCourse]=useState([]);
 useEffect(()=>{
  loadCourses();
  toast.success("Courses have been loaded!",{autoClose:3000});

  },["hot"]);
 
  const loadCourses=async ()=>{
  const response=  await axios.get('http://localhost:8080/api/v1/courses')
      setCourse(response.data.reverse());
      
  }
  const deleteCourse= id=>{
   axios.delete(`http://localhost:8080/api/v1/${id}`);
    loadCourses();

  };

  return (
    <>
     <div className="w-75 mx-auto  my-5 shadow p-5">
    <Table responsive>
       
      <thead>
      <tr>
        <th scope ="col">  Course Id</th>
        
        <th scope="col">Course Name</th>
        <th scope="col">  Course Description</th>
        <th  colSpan="3"scope="col"> Actions </th>
        </tr>
      </thead>
      <tbody>
      { (courses.length>0 )?courses.map((course)=>(
        <tr>
        
         <td key={course.id}>{course.id}</td>
    
         <td> {course.name}</td>
         <td> {course.description}</td>
         <td>
        <Button color="danger"  onClick={()=>deleteCourse(course.id) }> Delete</Button>
        </td>
        
      <td>
       <Link className="btn btn-warning w-100" to={`/update/${course.id}`}> Update</Link>
</td> 
      
           <td>
             <Link className="btn btn-info w-100" to={`/view/${course.id}`}> View </Link>
           </td>
         </tr>

         
         )):"No Courses "}
      
          
  
         </tbody>
         
     </Table>
     <Link className="btn btn-success w-100" to="/add">Add Course </Link>

     </div>
     </>
  );
      };
      
  export default AllCourses;