import React from 'react';
import UserList from '../USERS/UserList';

function Bloger() {
  const users = [
    {
      name: 'Danial',
      surname: 'Abibulla',
      password: 'password1',
      phonenumber: '871234567',
      avatarUrl: '/img/logo.jpg',
      about:'Привет! Я тот парень, который верит в силу позитивного влияния и добрых поступков. Я стараюсь быть тем, кто делает людей вокругсчастливее, внося радость и позитив в их жизни.',
      group: 'IT2-2114'
    },
    {
      name: 'Batyrkhan',
      surname: 'Rukhanov',
      password: 'password2',
      phonenumber: '88712345678',
      avatarUrl: '/img/logo2.jpg',
      about:'Привет! Я тот парень, который верит в силу позитивного влияния и добрых поступков. Я стараюсь быть тем, кто делает людей вокругсчастливее, внося радость и позитив в их жизни.',
      group: 'IT2-2114'
    },
    {
      name: 'Adilbek',
      surname: 'Adilzhan',
      password: 'password3',
      phonenumber: '887123456789',
      avatarUrl: '/img/logo3.jpg',
      about:'Привет! Я тот парень, который верит в силу позитивного влияния и добрых поступков. Я стараюсь быть тем, кто делает людей вокругсчастливее, внося радость и позитив в их жизни.',
      group: 'IT2-2114'
    },
    {
      name: 'Yerasyl',
      surname: 'Tanatar',
      password: 'password4',
      phonenumber: '88712345689',
      avatarUrl: '/img/logo4.jpg',
      about:'Привет! Я тот парень, который верит в силу позитивного влияния и добрых поступков. Я стараюсь быть тем, кто делает людей вокругсчастливее, внося радость и позитив в их жизни.',

      group: 'IT2-2114'
    },
  ];

  return (
      <div className="app">
        <UserList users={users} />
      </div>
  );
}

export default Bloger;