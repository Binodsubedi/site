import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import SiteBackend from '../apis/SiteBackend';
import './../styles/dashboard.css';

const Dashboard = () => {
  const imagee = useRef();
  const title = useRef();
  const bodyText = useRef();

  useEffect(() => {
    // const change = true;

    const res = async () => {
      try {
        const response = await SiteBackend.get('/api/v1/user/pushLogin', {
          withCredentials: true,
        });

        // console.log(response.data);

        // change = response.status === 200 ? false : true;

        // if (change) {
        //     window.location.assign('/login');
        // }
      } catch (err) {
        window.location.assign('/login');
      }
    };

    res();
  }, []);

  const send = async (e) => {
    e.preventDefault();
    const form = new FormData();

    form.append('title', title.current.value);
    form.append('bodyText', bodyText.current.value);
    form.append('photo', imagee.current.files[0]);

    // console.log(imagee.current.files[0]);

    // axios({
    //   method: 'POST',
    //   url: 'http://192.168.1.154:3000/api/v1/post/createPost',
    //   form,
    // });

    const resp = await SiteBackend.post('/api/v1/post/createPost', form, {
      withCredentials: true,
    });

    console.log(resp);

    if (resp.data.type === 'Success') {
      alert('Request successful');
      // title.current.value = '';
      // bodyText.current.value = '';
      // imagee.current.files[0] = null;
      // } else {
      //   alert('Request un-successful');
    }

    // if (!resp) {
    //   alert('Un-successful');
    // }
  };

  const logout = async (e) => {
    e.preventDefault();
    const response = await SiteBackend.get('/api/v1/user/logout', {
      withCredentials: true,
    });

    if (response.data.status === 'success') {
      window.location.assign('/login');
    }
  };

  return (
    <div className="Dashboard">
      <button className="Dashboard__logout" onClick={(e) => logout(e)}>
        Log-out
      </button>
      <div className="Dashboard__options">
        <input type="file" className="photto" ref={imagee} />
        <div className="Dashboard__options--title">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" ref={title} />
        </div>
        <div className="Dashboard__options--body">
          <textarea type="text" id="body" cols={60} rows={20} ref={bodyText} />
        </div>

        <button className="submit" onClick={(e) => send(e)}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
