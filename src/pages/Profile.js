import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    setUser(auth);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = savedUsers.map(u => u.username === user.username ? user : u);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('auth', JSON.stringify(user));
    alert('Profile updated');
  };

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" required />
        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
