
// import React, { useState } from 'react';
// import { FaUser } from 'react-icons/fa';
// import { RxCross2 } from 'react-icons/rx';
// import { FaLock } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// const Login = () => {
//   const [values, setValues] = useState({
//     user: '',
//     password: '',
//   });
//   const [showSignupForm, setShowSignupForm] = useState(true);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log('our data:', values);

  
//     console.log('Successfully logged in!');
//   };
//   const handleCrossClick = () => {
//     setShowSignupForm(false);
//   };

//   return (
//     showSignupForm && (
//     <div className="border border-2 border-black rounded-lg w-[350px] h-[400px] bg-secondary mt-20 ml-80 ">
//       <div className="flex justify-between border-b border-black pb-5">
//         <h1 className="text-3xl text-white">Login</h1>
//         <RxCross2 className="text-primary w-8 h-8 mt-2 cursor-pointer"onClick={handleCrossClick} />
//       </div>
//       <form onSubmit={handleSubmit} action="" className="ml-8 items-center justify-center">
//         <div className="flex mt-6 relative">
//           <input
//             type="text"name="user" value={values.user}   onChange={handleChange}placeholder="user"
//             className="bg-teritory text-white p-2 rounded-lg w-[270px]"/>
//           <FaUser className="absolute top-4 left-60" />
//         </div>
       
        
//         <div className="flex mt-6 relative">
//           <input
//             type="password" name="password" value={values.password} onChange={handleChange}placeholder="password"
//             className="bg-teritory text-white p-2 rounded-lg w-[270px]"/>
//           <FaLock className="absolute top-4 left-60" />
//         </div>
        
//         <p class="text-white mt-4">Forgot password?</p>
       
//         <button className="border  border-2 bg-primary text-white rounded-lg w-[270px] p-2 mt-6 font-bold ">
//           Login
//         </button>
       
//         <p className="mt-4 mr-4 text-white text-center ">Don't have account?<Link to="/signup"><span>Signup</span></Link></p>
      
//       </form>
//     </div>
//     )
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaUser } from 'react-icons/fa';
// import { RxCross2 } from 'react-icons/rx';
// import { FaLock } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// const Login = () => {
//   const navigate =useNavigate();
//   const [values, setValues] = useState({
//     user: '',
//     password: '',
//   });


//   const [showSignupForm, setShowSignupForm] = useState(true);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const loggeduser = JSON.parse(localStorage.getItem("user"));
//     if (values.user === loggeduser.user && values.password === loggeduser.password)
//     {
//       navigate("/")
//     }
//     else{
//       alert("wrong User or password");
//     }
//   };
//   const handleCrossClick = () => {
//     setShowSignupForm(false);
//   };

//   //form validation
//   const [errors, setErrors] = useState({
//     user: '',
//     password: '',
  
//   });
//   const validateForm = (passedValues) => {
//     let isValid = true;
//     const error = { user: "", password: "" };
 
//     if (!passedValues.user) {
//       error.user = "user is required";
//       isValid = false;
//     }
   
//     if (!passedValues.password) {
//       error.password = "password is required";
//       isValid = false;
//     }
//     // if (error.title || error.image || error.price || error.details)
//     //   isValid = false;
//     setErrors(error);
//     return isValid;
//   };

//   return (
//     showSignupForm && (
//     <div className="border border-2 border-black rounded-lg w-[350px] h-[400px] bg-secondary mt-32 ml-80 ">
//       <div className="flex justify-between border-b border-black pb-5">
//         <h1 className="text-3xl text-white">Login</h1>
//         <RxCross2 className="text-primary w-8 h-8 mt-2 cursor-pointer"onClick={handleCrossClick} />
//       </div>
//       <form onSubmit={handleSubmit} action="" className="ml-8 items-center justify-center">
//         <div className="flex mt-6 relative">
//           <input
//             type="text"name="user" value={values.user}   onChange={handleChange}placeholder="user"
//             className="bg-teritory text-white p-2 rounded-lg w-[270px]"/>
//           <FaUser className="absolute top-4 left-60" />
//           {errors.user && (
//                   <p className="text-red-500 pt-1.5">{errors.user}</p>
//                 )}
//         </div>
       
        
//         <div className="flex mt-6 relative">
//           <input
//             type="password" name="password" value={values.password} onChange={handleChange}placeholder="password"
//             className="bg-teritory text-white p-2 rounded-lg w-[270px]"/>
//           <FaLock className="absolute top-4 left-60" />
//           {errors.password && (
//                   <p className="text-red-500 pt-1.5">{errors.password}</p>
//                 )}
//         </div>
        
//         <p class="text-white mt-4">Forgot password?</p>
       
//         <button className="border  border-2 bg-primary text-white rounded-lg w-[270px] p-2 mt-6 font-bold ">
//           Login
//         </button>
       
//         <p className="mt-4 mr-4 text-white text-center ">Don't have account?<Link to="/signup"><span>Signup</span></Link></p>
      
//       </form>
//     </div>
//     )
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  
  const [values, setValues] = useState({
    user: '',
    password: '',
  });

  const [showSignupForm, setShowSignupForm] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (values.user === loggeduser.user && values.password === loggeduser.password) {
      navigate("/");
    } else {
      alert("Wrong username or password");
    }
  };

  const handleCrossClick = () => {
    setShowSignupForm(false);
  };

  // Form validation
  const [errors, setErrors] = useState({
    user: '',
    password: '',
  });

  const validateForm = (passedValues) => {
    let isValid = true;
    const error = { user: "", password: "" };

    if (!passedValues.user) {
      error.user = "Username is required";
      isValid = false;
    } else if (passedValues.user.length < 6) {
      error.user = "Username must be at least 6 characters long";
      isValid = false;
    }

    if (!passedValues.password) {
      error.password = "Password is required";
      isValid = false;
    } else if (passedValues.password.length < 6) {
      error.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(error);
    return isValid;
  };

  return (
    showSignupForm && (
      <div className="border border-2 border-black rounded-lg w-[350px] h-[400px] bg-secondary mt-32 ml-80 ">
        <div className="flex justify-between border-b border-black pb-5">
          <h1 className="text-3xl text-white">Login</h1>
          <RxCross2 className="text-primary w-8 h-8 mt-2 cursor-pointer" onClick={handleCrossClick} />
        </div>
        <form onSubmit={handleSubmit} action="" className="ml-8 items-center justify-center">
          <div className="flex mt-6 relative">
            <input
              type="text"
              name="user"
              value={values.user}
              onChange={handleChange}
              placeholder="Username"
              className="bg-teritory text-white p-2 rounded-lg w-[270px]"
            />
            <FaUser className="absolute top-4 left-60" />
            {errors.user && (
              <p className="text-red-500 pt-1.5">{errors.user}</p>
            )}
          </div>

          <div className="flex mt-6 relative">
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              className="bg-teritory text-white p-2 rounded-lg w-[270px]"
            />
            <FaLock className="absolute top-4 left-60" />
            {errors.password && (
              <p className="text-red-500 pt-1.5">{errors.password}</p>
            )}
          </div>

          <p className="text-white mt-4">Forgot password?</p>

          <button className="border  border-2 bg-primary text-white rounded-lg w-[270px] p-2 mt-6 font-bold ">
            Login
          </button>

          <p className="mt-4 mr-4 text-white text-center">Don't have an account? <Link to="/signup"><span>Signup</span></Link></p>
        </form>
      </div>
    )
  );
};

export default Login;
