
import './App.css';
import { React} from 'react';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import {Container} from 'reactstrap'
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';
import UpdateCourse from './components/UpdateCourse';
import Course from './components/Course';
import NotFound from './components/NotFound';

const App=()=>{
 
  return (
    <Router>
 <div className="App">
 <Container>
 <Header/>
<Switch>
 <Route exact path ="/" component={AllCourses}/>
 <Route exact path ="/add" component={AddCourse}/>
<Route exact path="/update/:id" component={UpdateCourse}/>
<Route exact path="/view/:id" component={Course}/>
<Route component={NotFound}></Route>
 </Switch>
 </Container>
    </div>  
    </Router>

  );
}


export default  App;
