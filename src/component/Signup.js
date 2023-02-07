import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Signup(props) {

    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email: "",
        address:"",
        phoneNumber:"",
        password:"",
        check:"",
        gender:"",
    });
    
    
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    let    [gender ,setGender] = useState('');
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

    let name,value;
    const handleInputs = (e) =>{
        // console.log(user,38);
        e.preventDefault();
         setUser({...user,[e.target.name] : e.target.value})
         //console.log(,44)
        //  [e.target.name]: e.target.value
    }

    const handelcontrol = (e) =>{
        e.preventDefault();
        if(document.getElementById('inlineRadio1').checked == true)
        {
            setUser({...user, gender : "MALE"})
        }
        else if(document.getElementById('inlineRadio2').checked == true)
        {
            setUser({...user, gender : "FEMALE"})
        }
        else if(document.getElementById('inlineRadio3').checked == true)
        {
            setUser({...user, gender : "OTHER"})
        }
        console.log(user,60);
        
    }
    

    // const handelsubmit =(e)=>{
    //     e.preventDefault();
    //     if(document.getElementById('inlineRadio1').checked == true || document.getElementById('inlineRadio2').checked == true || document.getElementById('inlineRadio3').checked == true) { 
    //         setGendererr(false);
    //     } 
    //     else{
    //         setGendererr(true);
    //     }
        
    //     if(document.getElementById('inlineRadio1').checked == true)
    //     {
    //         gender = "Male"
    //     }
    //     else if(document.getElementById('inlineRadio2').checked == true)
    //     {
    //         gender ="Female"
    //     }
    //     else if(document.getElementById('inlineRadio3').checked == true)
    //     {
    //         gender = "Other"
    //     }

    //     // console.log(firstName,lastName ,email , gender , address, phoneNumber ,password,check);
    //     console.log(user,38);
    // }

    function onfirstname (){
       
    if(user.firstName.length== 0 || user.firstName  ==  " ")
    {
        setFirstNameerr(true);
    }}

    function onlastname (){
        if(lastName.length=== 0 || lastName  ===  " ")
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
        if(address.length=== 0 || address  ===  " ")
        {
            setAddresserr(true);
        }
    }

    function onphone (){
        if(phoneNumber.length=== 0 || phoneNumber  ===  " ")
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
        if(password.length=== 0 || password  ===  " "  || password.length >8)
        {
            setPassworderr(true);
        }
    }

    function oncheked(){
        const cb = document.querySelector('#accept');
        
        if(cb.checked == true){
            setCheckerr(true);
            check = "checked";
            setUser({...user, check : "Checked"})
        }
        else{
            setUser({...user, check : "NOT Checked"})
            setCheckerr(false);
        }

    }

    
   

    // if(lastName.length=== 0 || lastName  ===  " ")
    // {
    //     setLastNameerr(true);
    // }

    // if(email.length=== 0 || email  ===  " ")
    // {
    //     setEmailerr(true);
    // }
    // if(address.length=== 0 || address  ===  " ")
    // {
    //     setAddresserr(true);
    // }

    // if(phoneNumber.length=== 0 || phoneNumber  ===  " ")
    // {
    //     setPhoneerr(true);
    // }

    // if(password.length=== 0 || password  ===  " "  || password.length >8)
    // {
    //     setPassworderr(true);
    // }



    // const cb = document.querySelector('#accept');
    
    // if(cb.checked){
    //     setCheckerr(true);
    //     check = "checked";
    // }

    // if(document.getElementById('inlineRadio1').checked == true || document.getElementById('inlineRadio2').checked == true || document.getElementById('inlineRadio3').checked == true) { 
    //     setGendererr(false);
    // } 
    // else{
    //     setGendererr(true);
    // }
    
    
    

    return (
        <>
      <div className="container">
        <Form className='border rounded border-primary  p-3' onSubmit={handelcontrol}>
          
            <Form.Group className="mb-3" controlId="firstnaem"> 
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" defaultValue={user.firstName} name='firstName' onBlur={onfirstname}  onChange={handleInputs} placeholder="Enter First Name"  />
            {errfirstName&&user.firstName.length==0 ?
            <Form.Label className='text-danger'>Please Enter First Name</Form.Label>:""}
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastname">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" name='lastName' onBlur={onlastname} onChange={handleInputs} placeholder="Enter Last Name" />
            {errlastName&&user.lastName.length==0?
            <Form.Label className='text-danger'>Please Enter Last Name</Form.Label>:""}
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' onBlur={onemail} onChange={handleInputs} placeholder="Enter email" />
            {erremail&&user.email.length==0?
            <Form.Label className='text-danger'>Please Enter Email</Form.Label>:<Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>}

            
          </Form.Group>

          <Form.Group className="mb-3" controlId="radiobutton">
          <Form.Label className='px-2'>Gender</Form.Label>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={handelcontrol}/>
            <label className="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={handelcontrol} />
            <label className="form-check-label" for="inlineRadio2">Female</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"onChange={handelcontrol} />
            <label className="form-check-label" for="inlineRadio3">Other</label>
            </div>
            {errgender&&gender.length==0?
            <Form.Label className='text-danger'>Please Select a Gender</Form.Label>:""}
          </Form.Group>

          
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" name='address' rows={3} onBlur={onaddress}  onChange={handleInputs}/>
        {erraddress&&user.address.length==0?
            <Form.Label className='text-danger'>Please Enter The Address</Form.Label>:""}
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phone" name='phoneNumber' onBlur={onphone} onChange={handleInputs} placeholder="Phone Number" maxlength="10" />
            {errphoneNumber&&user.phoneNumber.length==0?
            <Form.Label className='text-danger'>Please Enter The Phone Number</Form.Label>:""}
          </Form.Group>



    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' onBlur={onpass} onChange={handleInputs} placeholder="Password" />
            {errpassword&&user.password.length==0?
            <Form.Label className='text-danger'>Please Enter the Phone Number</Form.Label>:""}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" onChange={oncheked} id="accept" label="Check me out" />
            {!errcheck&&check.length==0?
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