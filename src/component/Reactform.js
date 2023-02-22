import { React } from 'react'
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Reactform() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode:"onChange"});
    const onSubmit = data =>{
        if(data.password===data.confirmpass)
        {
            console.log(data);
        }  
    }
  return (
    <div className="container">
        <Form className='border rounded border-primary  p-3' onSubmit={handleSubmit(onSubmit)} >
          
            <Form.Group className="mb-3" controlId="firstnaem"> 
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name='firstName'  placeholder="Enter full Name"  
            {...register("fullname", { required: true })}  />
             {errors.fullname && <span>Please enter The Full Name</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" 
            {...register("email", { required: true })}  /> 
            {errors.email && <span>Please enter Valid email address</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phone" name='phoneNumber' placeholder="Phone Number" maxLength="10"
               {...register("phone", { required: true })}  onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}   />
               {errors.phone && <span>Please enter Phone Number</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password'  placeholder="Password"
              {...register("password", { required: true })} />
              {errors.password && <span>Please enter the Password</span>}
          </Form.Group>

            <Form.Group className="mb-3" controlId="confirmpass">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name='ConfirmPassword'
              placeholder="confirm password "
                {...register("confirmpass", { required: true , validate:value=> value===watch("password") })} />
                {errors.confirmpass &&  errors.confirmpass.type === 'required' &&<span>Please enter the confirm Password</span>}
                {errors.confirmpass && errors.confirmpass.type === 'validate' && <span>Please Enter Same Password</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Choose Your State</Form.Label>
          <select className="form-select" aria-label="Default select example"  {...register("state", { required: true })}>
        <option selected disabled>selecte state</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Delhi">Delhi</option>
        </select>
        {errors.state && <span>Plaese Select state</span>}
        </Form.Group>

          <Form.Group className="mb-3" controlId="radiobutton">
          <Form.Label className='px-2'>Gender</Form.Label>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" {...register("Gender", { required: true })} value="MALE" />
            <label className="form-check-label" >Male</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" {...register("Gender", { required: true })}  value="FEMALE"  />
            <label className="form-check-label" >Female</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" {...register("Gender", { required: true })}  value="other" />
            <label className="form-check-label" >Other</label>
            </div>
            {errors.Gender && <span>Plaese Select Gender</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox"  {...register('terms', { required: true })}  label="i agree all terms & conditions" />
            {errors.terms && <span>Plaese Select Gender</span>}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>  
        </div>
  )
}
export default Reactform