
import React, { useState, } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



export default function LogIn({ LoginChecked }) {
    const initialValues = {
        email: '',
        password: '',
  
      };
      const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Invalid Password').required('Password is required'),
        // confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
      });
      const onSubmit = (values) => {
        values.preventDefault();
        console.log(values);
      };
    const navigate = useNavigate()
    const [checkLogin, setCheckLogin] = useState(true)
    const [showPass, setShowPass] = useState(false)
    const loginSubmit = (e) => {
        e.preventDefault();
        setCheckLogin(true)
        navigate('/')
    }
    LoginChecked(checkLogin)
    const showPassword = () => {
        setShowPass(!showPass)
    }
    return (
        <div>
            <div className='Main-login'>
                <div className='logo-here'>
                    <h3 >VNCinema</h3>
                </div>

                <div className="overlay"></div>
                <div className='Wrapper'>
                    <div className='inner-card'>
                        <h3>Sign In</h3>
                        <div>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ errors, touched }) => (
        <Form>
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
          
          <button type="submit">Sign In</button>
        </Form>
      )}
    </Formik>
                            {/* <form onSubmit={loginSubmit} action="">
                                <input type="email" name="" id="" placeholder='Email' />
                                <div className='position-relative cursor-set'>
                                    <input type={showPass? 'text': 'password'} name="" id="" placeholder='Password' />
                                    {showPass ? <span onClick={showPassword} className='show'><i class="fa-regular fa-eye-slash"></i></span> : <span onClick={showPassword} className='show'><i class="fa-regular fa-eye"></i></span>}
                                </div>
                                <button type='submit'>Sign In</button>
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
                            <p>New to Our App? <Link className='Now-btn' to="/SingUp">Sign Up</Link></p>
                            {/* <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn more.</a></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
