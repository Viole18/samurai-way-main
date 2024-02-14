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
  state: {
    profilePage: {
      posts: Iposts[]
    },
    dialogsPage: {
      dialogs: Idialog[]
      messages: Imessage[]
    }
  }

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
  console.log(props)
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile'
            render={() => <Profile posts={props.state.profilePage.posts} />} />
          <Route path='/dialogs'
            render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
              messages={props.state.dialogsPage.messages} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/setting' component={Setting} />
        </div>
      </div>
    
  );
}



export default App;
