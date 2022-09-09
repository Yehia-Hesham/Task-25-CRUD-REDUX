import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/Users/Users';
import UserForm from './components/form/form';

function App() {
  const my_user = {
    id: "60d0fe4f5311236168a109ca",
    title: "ms",
    firstName: "Sara",
    lastName: "Andersen",
    picture: "https://randomuser.me/api/portraits/women/58.jpg",
    gender: "female",
    email: "sara.andersen@example.com",
    dateOfBirth: "1996-04-30T19:26:49.610Z",
    phone: "92694011",
    location: {
        street: "9614, SÃ¸ndermarksvej",
        city: "Kongsvinger",
        state: "Nordjylland",
        country: "Denmark",
        timezone: "-9:00"
    },
    registerDate: "2021-06-21T21:02:07.374Z",
    updatedDate: "2021-06-21T21:02:07.374Z"
}
  return (
    <div className="App">
      <Users/>
      {/* <UserForm/> */}
    </div>
  );
}

export default App;
