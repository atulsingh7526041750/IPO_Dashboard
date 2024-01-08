import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a login process (replace with actual authentication logic)
    // For demonstration purposes, any data is considered a successful login
    const loginData = {
      username: 'user',
      password: 'password',
    };

    if (formData.username === loginData.username && formData.password === loginData.password) {
      toast.success("Login Successful");
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    } else {
      toast.error('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Username:
          <input
            type="text"
            name="username"
            placeholder='user'
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <button type="submit" style={styles.button}>
          Login
        </button>
        <p style={styles.link}>
          For new User <a href='/registration'>Click Here</a>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginTop: '50px',
    textAlign: 'center',
  },
  heading: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '3px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  link: {
    marginTop: '10px',
    fontSize: '14px',
  },
};

export default LoginForm;
