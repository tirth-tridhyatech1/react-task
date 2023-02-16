import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

function Footerfun() {
  return (
    <>
    
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a'  }}>
      <MDBContainer className='pt-4 mt-2'></MDBContainer>

      <div className='d-flex justify-content-center pb-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright : 
        <a className='text-white' href='/'>
          Reacttask.com
        </a>
      </div>
    </MDBFooter>






    </>
  )
  
}

export default Footerfun;