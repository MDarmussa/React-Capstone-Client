import React, { useState, setState } from "react";
import axios from 'axios';

export default function Register() {
  const [formInfo, setFormInfo]= useState ({
    username: '',
    email: '',
    password: '',
  })

 
  const handleChange = (event) => {
    // responsible for updating state
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
    // this.setState({
    //   [name]: value, //taking the name declared in each target input
    // });
  };

  const payload={
    username: formInfo.username,
    email: formInfo.email,
    password: formInfo.password
  }  

  const handleSubmit = (event) => { //responsible for sending user input to the server
    //log the formInfo state to the browser
    event.preventDefault();//stops browser from refreshing 
    // console.log(formInfo);
    // navigate(`/FormSubmission`, {formInfo})
    setFormInfo({ username: "", email: "", password: "" });

    axios({
      url: 'http://localhost:8080/user/register', //taken from server.js line 33
      method: 'POST',
      data: payload
      
        })
        .then( ()=>{
          console.log('Data has been sent to the server!')
        })
        .catch(()=>{
          console.log('ERROR; Data has NOT been sent to the server!')
        } )
      
  };
  //make the post requst 


  console.log("State", formInfo);

  return (
    <div>
      <h2>Registration</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formInfo.username} //gets the latest value from whatever is entered by the user
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={formInfo.password}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

// export default function SignUp() {

//     const [username, setUsername] = React.useState("");

//     const userUpdate = (event) => {
//         setUsername(event.target.value);
//       };

//       const [email, setEmail] = React.useState("");

//       const emailUpdate = (event) => {
//           setEmail(event.target.value);
//         };

//         const [password, setPassword] = React.useState("");

//         const passwordUpdate = (event) => {
//             setPassword(event.target.value);
//           };

// const submitUser = () => {
//   //this will post the data to the backend when user submits the sign in form

//   const postURL = "http://localhost:8080/api/user/register"; //this is the backend route
//   fetch(postURL, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       username: true,
//       email: true,
//       password: true,
//     }),
//   }).then(()=>{
//       alert("user has been posted")
//   })
// };
// console.log(submitUser)

// return (
//     <div>
//         <form onSubmit={submitUser}>
//             <label>Username:</label>
//             <input required onChange={userUpdate}></input>
//             <label>Email:</label>
//             <input required onChange={emailUpdate}></input>
//             <label>Password:</label>
//             <input required onChange={passwordUpdate}></input>
//             <button type="submit"> Submit</button>
//         </form>
//     </div>
// )

// }
