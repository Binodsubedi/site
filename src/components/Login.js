import React, { useEffect, useRef } from 'react';
import './../styles/loginPage.css';
import SiteBackend from '../apis/SiteBackend';

const Login = () => {
  const username = useRef();
  const password = useRef();

  useEffect(() => {
    const check = async () => {
      try {
        const response = await SiteBackend.get('/api/v1/user/pushLogin', {
          withCredentials: true,
        });

        if (response.data.status === 'success') {
          window.location.assign('/dashboard');
        }
      } catch (err) {}
    };

    check();
  }, []);

  const submitAction = async (e) => {
    e.preventDefault();

    const uname = username.current.value;
    const pass = password.current.value;

    const response = await SiteBackend.post(
      '/api/v1/user/login',
      {
        username: uname,
        password: pass,
      },
      { withCredentials: true }
    );

    console.log(response);

    if (response.data.status == 'success') {
      console.log('Success');
      window.location.assign('/dashboard');
    }
  };

  return (
    <div className="LoginPage">
      <form>
        <div className="LoginPage__Username">
          <label htmlFor="Username">Username:</label>
          <input type="text" id="Username" ref={username} />
        </div>

        <div className="LoginPage__Password">
          <label htmlFor="Password">Password:</label>
          <input type="password" id="Password" ref={password} />
        </div>
        <button className="Submit_btn" onClick={(e) => submitAction(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
