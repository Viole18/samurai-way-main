import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 0 },
  { id: 2, message: 'How are you?', likesCount: 18  },
  { id: 3, message: 'Hi, you?', likesCount: 32  },
  { id: 4, message: 'Da DA DADADADAD?', likesCount: 12  },
]

let dialogs = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Artem' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Valera' },
  { id: 5, name: 'Slava' },
  { id: 6, name: 'Lesha' },
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yo' },
  { id: 6, message: 'Yo' },
]

ReactDOM.render(
    <App posts={posts} dialog={dialogs} message={messages}/>,
  document.getElementById('root')
);