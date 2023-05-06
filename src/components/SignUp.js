import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function SignUp() {

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const validationSchema = Yup.object({
    name: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
  });
  
  const onSubmit = (values) => {
    values.preventDefault();
    console.log(values);
  };
    const [showPass, setShowPass] = useState(false)
    const [confPass, setConfPass] = useState(false)
    const SignUpSubmit=(e)=>{
        e.preventDefault();
            }
            const showPassword = () => {
                setShowPass(!showPass)
            }
            const showConfirmPassword= () => {
                setConfPass(!confPass)
            }
  return (
    <>
      <div className='Main-login'>
      <div className='logo-here'>
    <h3 >VNCinema</h3>
</div>
      <div className='Wrapper'>
            
            <div className="overlay"></div>
            <div className='inner-card'>
                <h3>Sign Up</h3>
                <div>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ errors, touched }) => (
        <Form>
          <div>
            
            <Field type="text" name="name" id="name" placeholder='Name'/>
            {errors.name && touched.name && <p className=" text-danger">{errors.name}</p>}
          </div>
          <div>
           
            <Field type="email" name="email" id="email" placeholder='Email'/>
            {errors.email && touched.email && <p className=" text-danger">{errors.email}</p>}
          </div>
          <div>
          <div className='position-relative cursor-set'>
            <Field type={showPass? 'text': 'password'} name="password" id="password" placeholder='Password' />
            {showPass ?  <span onClick={showPassword} className='show'><i class="fa-regular fa-eye"></i></span>: <span onClick={showPassword} className='show'><i class="fa-regular fa-eye-slash"></i></span>}
            </div>
            {errors.password && touched.password && <p className="text-danger">{errors.password}</p>}
          </div>
          <div>
          <div className='position-relative cursor-set'>
            <Field type={confPass? 'text': 'password'} name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />
            {confPass ? <span onClick={showConfirmPassword} className='show'><i class="fa-regular fa-eye"></i></span> : <span onClick={showConfirmPassword} className='show'><i class="fa-regular fa-eye-slash"></i></span>}
            </div>
            {errors.confirmPassword && touched.confirmPassword && <p className=" text-danger mt-0">{errors.confirmPassword}</p>}
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
                    {/* <form onSubmit={SignUpSubmit} action="">
                        <input type="Text" name="" id="" placeholder='Name' />
                        
                        <input type="email" name="" id="" placeholder='Email' />
                        <div className='position-relative cursor-set'>
                                    <input type={showPass? 'text': 'password'} name="" id="" placeholder='Password' />
                                    {showPass ? <span onClick={showPassword} className='show'><i class="fa-regular fa-eye-slash"></i></span> : <span onClick={showPassword} className='show'><i class="fa-regular fa-eye"></i></span>}
                                </div>
                                <div className='position-relative cursor-set'>
                                    <input type={confPass? 'text': 'password'} name="" id="" placeholder='Confirm Password' />
                                    {confPass ? <span onClick={showConfirmPassword} className='show'><i class="fa-regular fa-eye-slash"></i></span> : <span onClick={showConfirmPassword} className='show'><i class="fa-regular fa-eye"></i></span>}
                                </div>
                        <button type='submit'>Sign Up</button>
                    </form> */}
                    
                </div>
                {/* <div className='inner-card-check'>
                        <div className='inner-card-remember'>
                        <input type="checkbox" id='check'  />
                         <label htmlFor="check">Remember Me</label>
                        </div>
                       <div>
                       <p><a className='Help' href="">Need Help?</a></p>
                       </div>
                    </div> */}
                    <div className='signup'>
                        <p>Already Have an Account? <Link className='Now-btn' to="/login">Sign In</Link></p>
                        {/* <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn more.</a></p> */}
                    </div>
            </div>
            </div>
        </div>
    </>
  )
}
