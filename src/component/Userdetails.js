import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Userdetails() {
    

  const [isedit, setisedit] = useState(false);
  const [isvalid,setIsvalid] = useState(false);
  

  const [user, setUser] = useState({
    firstName:"Tirth",
    lastName:"Makadia",
    email: "tirth.m@tridhyatech.com",
    address:"Rajkot",
    phoneNumber:"1234567890",
    password:"password1",
    check:false,
    gender:"MALE",
});

const [errfirstName, setFirstNameerr] = useState(false);
    const [errlastName, setLastNameerr] = useState(false);
    const [erremail, setEmailerr] = useState(false);
    const [errgender ,setGendererr] = useState(false);
    const [erraddress, setAddresserr] = useState(false);
    const [errphoneNumber, setPhoneerr] = useState(false);
    const [errpassword , setPassworderr] = useState(false);
    const [errcheck ,setCheckerr] = useState(false);


    function onfirstname (){
       
      if(user.firstName.length== 0 || user.firstName  ==  " ")
      {
          setFirstNameerr(true);
         
      }}
  
      function onlastname (){
          if(user.lastName.length=== 0 || user.lastName  ===  " ")
          {
              setLastNameerr(true);
             
          }
          
      }
  
      function onemail (){
          if(user.email.length== 0 || user.email  ==  " ")
          {
              setEmailerr(true);
          }
          else
          {
              var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
              if(!user.email.match(mailformat))
              {
                  alert("please Enter valid email address");
              }
          }
      }
  
      function onaddress (){
          if(user.address.length=== 0 || user.address  ===  " ")
          {
              setAddresserr(true);
          }
      }
  
      function onphone (){
          if(user.phoneNumber.length=== 0 || user.phoneNumber  ===  " ")
          {
              setPhoneerr(true);
          }
          var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
          if((!user.phoneNumber.match(phoneno)))
          {
              alert("plase Enter valid Phone Number");
          }
  
      }
  
      function onpass (){
          if(user.password.length=== 0 || user.password  ===  " "  || user.password.length >8)
          { 
              setPassworderr(true);
          }
      }
  
      function oncheked(){
          const cb = document.querySelector('#accept');
          
          if(cb.checked == true){
              setCheckerr(true);
          }
          else{
              setCheckerr(false);
          }
  
      }


      
    // validation code end


  function onedit(e) {
      if(isedit == false)
      {
        setisedit(true);
        e.preventDefault();
      }
      else{
        setisedit(false);
        e.preventDefault();
      }
    }

    const handleInputs = (e) =>{
      // console.log(user,38);
      e.preventDefault();
      //  setUser({...user, [e.target.name] : e.target.checked})
       setUser({...user,[e.target.name] : e.target.value})
      //  setUser({[user.check]:e.target.checked})
       //console.log(e.target.value,44)
      //  [e.target.name]: e.target.value
  }
  const hanlechcek = e =>{
    e.preventDefault();
    setUser({...user, [e.target.name] : e.target.checked})
    oncheked();
  }
  console.log(user);

    return (
      <>
      
      
      <div className="container">
        <Form className='border rounded border-primary  p-3' onSubmit={handleInputs}  >
          
            <Form.Group className="mb-3" controlId="firstnaem"> 
            <Form.Label>First name</Form.Label>
            {isedit ?
            <Form.Control type="text" name='firstName' onChange={handleInputs} onBlur={onfirstname} defaultValue={user.firstName}  placeholder="Enter First Name"  />:
            <Form.Label className='text'>: {user.firstName}</Form.Label>}
            {errfirstName&&user.firstName.length==0 ?
            <Form.Label className='text-danger'>Please Enter First Name</Form.Label>:""}
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastname">
            <Form.Label>Last name</Form.Label>
            {isedit?
            <Form.Control type="text" name='lastName' onBlur={onlastname} onChange={handleInputs} defaultValue={user.lastName} placeholder="Enter Last Name" />:
            <Form.Label className='text'> : {user.lastName}</Form.Label>}
             {errlastName&&user.lastName.length==0?
            <Form.Label className='text-danger'>Please Enter Last Name</Form.Label>:""}
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            {isedit?
            <Form.Control type="email" name='email' onBlur={onemail} onChange={handleInputs} defaultValue={user.email}  placeholder="Enter email" />:
            <Form.Label className='text'> : {user.email}</Form.Label>}
            {erremail&&user.email.length==0?
              <Form.Label className='text-danger'>Please Enter Email</Form.Label>:""}
          

            
          </Form.Group>
            
         
          <Form.Group className="mb-3" controlId="radiobutton">
          {isedit?
          <>
          <Form.Label className='px-2'>Gender</Form.Label>
          
            <div className="form-check form-check-inline">
            {user.gender ==="MALE"?
            <input className="form-check-input" type="radio" defaultChecked={true} onChange={handleInputs} name="gender" id="inlineRadio1" value="MALE"  />:
            <input className="form-check-input" type="radio"  onChange={handleInputs} name="gender" id="inlineRadio1" value="MALE"/>}
            <label className="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div className="form-check form-check-inline">
            {user.gender ==="FEMALE"?
            <input className="form-check-input" type="radio" defaultChecked={true} onChange={handleInputs} name="gender" id="inlineRadio2" value="FEMALE"  />:
            <input className="form-check-input" type="radio"  onChange={handleInputs} name="gender" id="inlineRadio2" value="FEMALE"  />}
            <label className="form-check-label" for="inlineRadio2">Female</label>
            </div>
            <div className="form-check form-check-inline">
            {user.gender =="OTHER"?
            <input className="form-check-input" type="radio" defaultChecked={true} onChange={handleInputs} name="gender" id="inlineRadio3" value="OTHER"  />:
            <input className="form-check-input" type="radio"  onChange={handleInputs} name="gender" id="inlineRadio3" value="OTHER"  />}
            <label className="form-check-label" for="inlineRadio3">Other</label>
            </div></> :
            <Form.Label className='text'>Gender : {user.gender}</Form.Label>}
            {errgender&&user.gender.length==0?
            <Form.Label className='text-danger'>Please Select a Gender</Form.Label>:""}
          </Form.Group>
        
          
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        {isedit?
        <Form.Control as="textarea" name='address'onBlur={onaddress} onChange={handleInputs} defaultValue={user.address} rows={3} />:
            <Form.Label className='text'> : {user.address}</Form.Label>}
            {erraddress&&user.address.length==0?
            <Form.Label className='text-danger'>Please Enter The Address</Form.Label>:""}
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            {isedit?
            <Form.Control type="phone" name='phoneNumber' onBlur={onphone} onChange={handleInputs} defaultValue={user.phoneNumber} placeholder="Phone Number" maxLength="10" />:
            <Form.Label className='text'> : {user.phoneNumber}</Form.Label>}
             {errphoneNumber&&user.phoneNumber.length==0?
            <Form.Label className='text-danger'>Please Enter The Phone Number</Form.Label>:""}
          </Form.Group>



    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            {isedit?
            <Form.Control type="password" name='password'  onBlur={onpass} onChange={handleInputs} defaultValue={user.password} placeholder="Password" />:
            <Form.Label className='text'> : {user.password}</Form.Label>}
            {errpassword&&user.password.length==0?
            <Form.Label className='text-danger'>Please Enter the Phone Number</Form.Label>:""}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            {isedit?
            <Form.Check type="checkbox" name='check' defaultChecked={user.check}  onChange={hanlechcek}  id="accept" label="Check me out" />:
            <Form.Label className='text'>checked : {user.check.toString()}</Form.Label>}
            {!user.check&& isedit==true?
            <Form.Label className='text-danger'>Please Chcek the checkbox</Form.Label>:""}
          </Form.Group>
          <Button variant="primary" disabled={isvalid} type="submit" onClick={onedit} >
          {isedit == false?"Update":"Submit"}
          </Button>
        </Form>
      
        </div>
        
      </>
      
  )
  
}
export default Userdetails;


