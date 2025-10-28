import React from 'react';

const Login = (props) => {
  return (
    <div className='login'>
      <input type='text' placeholder='Enter username' />
      <button onClick={props.login}>Login</button>
    </div>
  );
};

export default Login;
