import React from 'react';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import Error from '../assets/Error.png';
const NotFound=()=>{
  return(
<>
<Container>
<img src={Error} alt="404 error"></img>
</Container>
<Container>
<Link className="btn btn-info  my-5" to="/">
Back Home

</Link>

</Container>



</>
  )
};
export default NotFound;