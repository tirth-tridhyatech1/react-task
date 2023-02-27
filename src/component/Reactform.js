import { React ,useState } from 'react'
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Reactform() {

    const [Isedit, setIsedit] = useState(false);
    const [Formdata, setFormdata] = useState({})
    const { register, handleSubmit, reset,watch, formState: { errors } } = useForm({mode:"all"});
    const onSubmit = data =>{
            console.log(data);
            // setValue("fullname", "");
            setIsedit(true);
            setFormdata(data);
            reset();
    }
    const updatedata =()=>{
      setIsedit(false); 
    }
  return (
    <div className="container">
      {!Isedit?
        <Form className='border rounded border-primary  p-3' onSubmit={handleSubmit(onSubmit)} >
          
            <Form.Group className="mb-3" controlId="firstnaem"> 
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name='firstName' defaultValue={Formdata.fullname} value={watch.fullname} placeholder="Enter full Name" 
            {...register("fullname", { required: true })}  />
             {errors.fullname && <span>Please enter The Full Name</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' defaultValue={Formdata.email} placeholder="Enter email" 
            {...register("email", { required: true })}  /> 
            {errors.email && <span>Please enter Valid email address</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phone" name='phoneNumber' defaultValue={Formdata.phone} placeholder="Phone Number" maxLength="10"
               {...register("phone", { required: true })}  onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}   />
               {errors.phone && <span>Please enter Phone Number</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' defaultValue={Formdata.password}  placeholder="Password"
              {...register("password", { required: true })} />
              {errors.password && <span>Please enter the Password</span>}
          </Form.Group>

            <Form.Group className="mb-3" controlId="confirmpass">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name='ConfirmPassword'
              placeholder="confirm password " defaultValue={Formdata.confirmpass}
                {...register("confirmpass", { required: true , validate:value=> value==watch("password") })} />
                {errors.confirmpass &&  errors.confirmpass.type == 'required' &&<span>Please enter the confirm Password</span>}
                {errors.confirmpass && errors.confirmpass.type == 'validate' && <span>Please Enter Same Password</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Choose Your State</Form.Label>
          <select className="form-select" defaultValue={Formdata.state} aria-label="Default select example"  {...register("state", { required: true })}>
        <option value="">selecte state</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Delhi">Delhi</option>
        </select>
        {errors.state && <span>Plaese Select state</span>}
        </Form.Group>

          <Form.Group className="mb-3" controlId="radiobutton">
          <Form.Label className='px-2'>Gender</Form.Label>
            <div className="form-check form-check-inline">
            <input className="form-check-input"  type="radio" defaultChecked={Formdata.Gender == "MALE"} {...register("Gender", { required: true })} value="MALE" />
            <label className="form-check-label" >Male</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" defaultChecked={Formdata.Gender == "FEMALE"}  {...register("Gender", { required: true })}  value="FEMALE"  />
            <label className="form-check-label" >Female</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" defaultChecked={Formdata.Gender == "other"} {...register("Gender", { required: true })}  value="other" />
            <label className="form-check-label" >Other</label>
            </div>
            {errors.Gender && <span>Plaese Select Gender</span>}
          </Form.Group>


            <input type="date" className='mb-4' max="9999-12-31" max-length="8"  defaultValue={Formdata.date}  {...register("date", { required: true })} />



          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" defaultChecked={Formdata.terms == true } {...register('terms', { required: true })}  label="i agree all terms & conditions" />
            {errors.terms && <span>Plaese agree all terms & conditions</span>}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button> 
          {/* <Button variant="warning" >Update</Button> */}
        </Form> :
       <>
       <Form className='border rounded border-primary  p-3' >
        <Form.Label className='px-2'>FullName : {Formdata.fullname}</Form.Label>
        <Form.Label className='px-2'>Email : {Formdata.email}</Form.Label>
        <Form.Label className='px-2'>Phone-Number : {Formdata.phone}</Form.Label>
        <Form.Label className='px-2'>Password : {Formdata.password}</Form.Label>
        <Form.Label className='px-2'>Satate : {Formdata.state}</Form.Label>
        <Form.Label className='px-2'>Gender : {Formdata.Gender}</Form.Label>  
        <Form.Label className='px-2'>DATE : {Formdata.date}</Form.Label>  
        <Form.Label className='px-2'>terms and conditions : {Formdata.terms.toString()}</Form.Label>
        </Form>
        <Button variant="warning" onClick={updatedata}>Update</Button>
        </>
        } 
        </div>
  )
}
export default Reactform