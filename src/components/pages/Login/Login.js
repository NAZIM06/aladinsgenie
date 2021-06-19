import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Login</h2>
            <form name="form">
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username"  className={'form-control'} />
                    
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password"  className={'form-control'} />
                   
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Login</button>
                    <Link to="/register" className="btn btn-link">Register</Link>
                    <Link to="/forgot-password" className="btn btn-link">Forgot Password</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;

// import React from 'react';
// import { useForm } from 'react-hook-form';
// // import './Login.css'

// export default function Login() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
//       <input type="number" placeholder="Password" {...register("Password", { min: 6})} />

//       <input type="submit" />
//     </form>
//   );
// }
