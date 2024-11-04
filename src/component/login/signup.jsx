
// import React, { useState } from 'react';
// import { MdOutlineEmail } from 'react-icons/md';
// import { FaUser } from 'react-icons/fa';
// import { RxCross2 } from 'react-icons/rx';
// import { FaLock } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// const Signup = () => {
//   const [values, setValues] = useState({
//     user: '',
//     email: '',
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

   
//     console.log('Successfully signup!');
//   };
//   const handleCrossClick = () => {
  
//     setShowSignupForm(false);
//   };

//   return (
//     showSignupForm && (
//     <div className="border border-2 border-black rounded-lg w-[350px] h-[400px] bg-secondary mt-20 ml-80">
//       <div className="flex justify-between border-b border-black pb-5">
//         <h1 className="text-3xl text-white">Signup</h1>
//         <RxCross2 className="text-primary w-8 h-8 mt-2 cursor-pointer"onClick={handleCrossClick} />
//       </div>
//       <form onSubmit={handleSubmit} action="" className="ml-8 items-center justify-center mt-0">
//         <div className="flex mt-6 relative">
//           <input
//             type="text"
//             name="user"
//             value={values.user}
//             onChange={handleChange}
//             placeholder="user"
//             className="bg-teritory text-white p-2 rounded-lg w-[270px]"
//           />
//           <FaUser className="absolute top-4 left-60" />
//         </div>
//         <div className="flex mt-6 relative">
//           <input
//             type="email"
//             name="email"
//             value={values.email}
//             onChange={handleChange}
//             placeholder="email"
//             className="bg-teritory text-white p-2 rounded-lg w-[270px]"
//           />
//           <MdOutlineEmail className="absolute top-4 left-60" />
//         </div>
//         <div className="flex mt-6 relative">
//           <input
//             type="password"
//             name="password"
//             value={values.password}
//             onChange={handleChange}
//             placeholder="password"
//             className="bg-teritory text-white p-2 rounded-lg w-[270px]"
//           />
//           <FaLock className="absolute top-4 left-60"/>
//         </div>
//         <button className="border border-2 bg-primary text-white rounded-lg w-[270px] p-2 mt-6 font-bold">
//           Signup
//         </button>
//         <p className='text-white mt-4 ml-4'>Already have an account?<Link to="/login"><span>Login</span></Link></p>
//       </form>
//     </div>
//     )
//   );
// };

// export default Signup;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { MdOutlineEmail } from 'react-icons/md';
// import { FaUser } from 'react-icons/fa';
// import { RxCross2 } from 'react-icons/rx';
// import { FaLock } from "react-icons/fa";
// import { Link, json } from 'react-router-dom';
// const Signup = () => {
//   const navigate =useNavigate();
//   const [values, setValues] = useState({
//     user: '',
//     email: '',
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
//     // console.log('our data:', values);
//     // console.log('Successfully signup!');
//     localStorage.setItem("user", JSON.stringify(values));
//     navigate("/login")
//   };
//   const handleCrossClick = () => {
  
//     setShowSignupForm(false);
//   };

//   return (
//     showSignupForm && (
//     <div className="border border-2 border-black rounded-lg w-[350px] h-[400px] bg-secondary mt-32 ml-80 mb-4">
//       <div className="flex justify-between border-b border-black pb-5">
//         <h1 className="text-3xl text-white">Signup</h1>
//         <RxCross2 className="text-primary w-8 h-8 mt-2 cursor-pointer"onClick={handleCrossClick} />
//       </div>
//       <form onSubmit={handleSubmit} action="" className="ml-8 items-center justify-center mt-0">
//         <div className="flex mt-6 relative">
//           <input
//             type="text"
//             name="user"
//             value={values.user}
//             onChange={handleChange}
//             placeholder="user"
//             className="bg-teritory text-white p-2 rounded-lg w-[270px]"
//           />
//           <FaUser className="absolute top-4 left-60" />
//         </div>
//         <div className="flex mt-6 relative">
//           <input
//             type="email"
//             name="email"
//             value={values.email}
//             onChange={handleChange}
//             placeholder="email"
//             className="bg-teritory text-white p-2 rounded-lg w-[270px]"
//           />
//           <MdOutlineEmail className="absolute top-4 left-60" />
//         </div>
//         <div className="flex mt-6 relative">
//           <input
//             type="password"
//             name="password"
//             value={values.password}
//             onChange={handleChange}
//             placeholder="password"
//             className="bg-teritory text-white p-2 rounded-lg w-[270px]"
//           />
//           <FaLock className="absolute top-4 left-60"/>
//         </div>
//         <button className="border border-2 bg-primary text-white rounded-lg w-[270px] p-2 mt-6 font-bold">
//           Signup
//         </button>
//         <p className='text-white mt-4 ml-4'>Already have an account?<Link to="/login"><span>Login</span></Link></p>
//       </form>
//     </div>
//     )
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { FaUser, FaLock } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    user: '',
    email: '',
    password: ''
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

    if (validateForm(values)) {
      // Form is valid, proceed with signup
      localStorage.setItem("user", JSON.stringify(values));
      navigate("/login");
    }
  };

  const handleCrossClick = () => {
    setShowSignupForm(false);
  };

  // Form validation and error handling
  const [errors, setErrors] = useState({
    user: '',
    email: '',
    password: ''
  });

  const validateForm = (passedValues) => {
    let isValid = true;
    const error = { user: "", email: "", password: "" };

    if (!passedValues.user) {
      error.user = "Username is required";
      isValid = false;
    }
    if (!passedValues.email) {
      error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(passedValues.email)) {
      error.email ="email is not valid"
      isValid = false;
    }
    if (!passedValues.password) {
      error.password = "Password is required";
    }else if (passedValues.password.length<6){
      error.password="password should be at least 6 character"
    
      isValid = false;
    }

    setErrors(error);
    return isValid;
  };

  return (
    showSignupForm && (
      <div className="border border-2 border-black rounded-lg w-[350px] h-[600px] bg-secondary mt-32 ml-80 mb-4">
        <div className="flex justify-between border-b border-black pb-5">
          <h1 className="text-3xl text-white">Signup</h1>
          <RxCross2 className="text-primary w-8 h-8 mt-2 cursor-pointer" onClick={handleCrossClick} />
        </div>
        {/* <form onSubmit={handleSubmit} className="ml-8 items-center justify-center mt-0"> */}
        <form onSubmit={handleSubmit} className="ml-8 items-center justify-center mt-0">
        <div>
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
            </div>
            {errors.user &&(
  <p className="text-red mt-6 mr-20">{errors.user}</p>
)}
</div>

<div className='mb-4'>
              
          <div className="flex mt-6 relative ">
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-teritory text-white p-2 rounded-lg w-[270px]"
            />
            <MdOutlineEmail className="absolute top-4 left-60" />
            </div>
            {errors.email &&(
  <p className="text-red pt-1.5">{errors.email}</p>
)}
          </div>
            <div className='mb-4'>
            <div className="flex mt-6 relative">
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              className="bg-teritory text-white p-2 rounded-lg w-[270px]"
            />
            <FaLock className="absolute top-4 left-60 mb-6" />
            </div>
            {errors.password && (
  <p className="text-red pt">{errors.password}</p>
)}
          </div>
 
  
          <button type="submit" className="border border-2 bg-primary text-white rounded-lg w-[270px] p-2 mt-6 font-bold">
            Signup
          </button>
          <p className='text-white mt-4 ml-4'>Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
        </form>
      </div>
    )
  );
};

export default Signup;
