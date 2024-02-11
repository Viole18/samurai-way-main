import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Novbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';


interface IApp {
  posts: Iposts[]
  dialog: Idialog[]
  message: Imessage[]
}

interface Iposts {
  likesCount: number
  id: number
  message: string
}

interface Idialog {
  id: number
  name: string
}

interface Imessage {
  id: number
  message: string
}

const App = (props: IApp) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={ () => <Profile posts={props.posts} />}/>
          <Route path='/dialogs' render={ () => <Dialogs dialog={props.dialog} message={props.message} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/setting' component={Setting} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
