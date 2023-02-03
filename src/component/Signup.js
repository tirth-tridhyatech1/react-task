import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Signup(props) {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    let [gender ,setGender] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhone] = useState('');
    const [password , setPassword] = useState('');
    let [check ,setCheck] = useState('');

    // error variable
    const [errfirstName, setFirstNameerr] = useState(false);
    const [errlastName, setLastNameerr] = useState(false);
    const [erremail, setEmailerr] = useState(false);
    const [errgender ,setGendererr] = useState(false);
    const [erraddress, setAddresserr] = useState(false);
    const [errphoneNumber, setPhoneerr] = useState(false);
    const [errpassword , setPassworderr] = useState(false);
    const [errcheck ,setCheckerr] = useState(false);


    const handelsubmit =(e)=>{
        e.preventDefault();
        if(firstName.length=== 0 || firstName  ===  " ")
        {
            setFirstNameerr(true);
        }

        if(lastName.length=== 0 || lastName  ===  " ")
        {
            setLastNameerr(true);
        }

        if(email.length=== 0 || email  ===  " ")
        {
            setEmailerr(true);
        }else{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email.match(mailformat))
        {
            alert("please Enter valid email address");
        }
        }
        
        

        if(address.length=== 0 || address  ===  " ")
        {
            setAddresserr(true);
        }

        if(phoneNumber.length=== 0 || phoneNumber  ===  " ")
        {
            setPhoneerr(true);
        }

        if(password.length=== 0 || password  ===  " "  || password.length >8)
        {
            setPassworderr(true);
        }

        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if((!phoneNumber.match(phoneno)))
        {
            alert("plase Enter valid Phone Number");
        }


        const cb = document.querySelector('#accept');
        console.log(cb.checked); 
        if(cb.checked){
            setCheckerr(true);
            check = "checked";
        }

        if(document.getElementById('inlineRadio1').checked == true || document.getElementById('inlineRadio2').checked == true || document.getElementById('inlineRadio3').checked == true) { 
            setGendererr(false);
        } 
        else{
            setGendererr(true);
        }
        
        if(document.getElementById('inlineRadio1').checked == true)
        {
            gender = "Male"
        }
        else if(document.getElementById('inlineRadio2').checked == true)
        {
            gender ="Female"
        }
        else if(document.getElementById('inlineRadio3').checked == true)
        {
            gender = "Other"
        }

        
        

       





        console.log(firstName,lastName ,email , gender , address, phoneNumber ,password,check);

    }

    return (
        <>
      <div className="container">
        <Form className='border rounded border-primary  p-3' onSubmit={handelsubmit}>
          
            <Form.Group className="mb-3" controlId="firstnaem"> 
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" onChange={e =>setFirstName(e.target.value)} placeholder="Enter First Name"  />
            {errfirstName?
            <Form.Label className='text-danger'>Please Enter First Name</Form.Label>:""}
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastname">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" onChange={e =>setLastName(e.target.value)} placeholder="Enter Last Name" />
            {errlastName?
            <Form.Label className='text-danger'>Please Enter Last Name</Form.Label>:""}
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={e =>setEmail(e.target.value)} placeholder="Enter email" />
            {erremail?
            <Form.Label className='text-danger'>Please Enter Email</Form.Label>:""}

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="radiobutton">
          <Form.Label className='px-2'>Gender</Form.Label>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label className="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label className="form-check-label" for="inlineRadio2">Female</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
            <label className="form-check-label" for="inlineRadio3">Other</label>
            </div>
            {errgender?
            <Form.Label className='text-danger'>Please Select a Gender</Form.Label>:""}
          </Form.Group>

          
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows={3}  onChange={e =>setAddress(e.target.value)}/>
        {erraddress?
            <Form.Label className='text-danger'>Please Enter The Address</Form.Label>:""}
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" onChange={e =>setPhone(e.target.value)} placeholder="Phone Number" />
            {errphoneNumber?
            <Form.Label className='text-danger'>Please Enter The Phone Number</Form.Label>:""}
          </Form.Group>



    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={e =>setPassword(e.target.value)} placeholder="Password" />
            {errpassword?
            <Form.Label className='text-danger'>Please Enter the Phone Number</Form.Label>:""}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" id="accept" label="Check me out" />
            {!errcheck?
            <Form.Label className='text-danger'>Please Chcek the checkbox</Form.Label>:""}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      
        </div>
    
   


             {/* signupform  end */}



        
      </>
      
  )
  
}
export default Signup;