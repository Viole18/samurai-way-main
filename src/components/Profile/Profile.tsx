import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = () => {

  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 0 },
    { id: 2, message: 'How are you?', likesCount: 18  },
    { id: 3, message: 'Hi, you?', likesCount: 32  },
    { id: 4, message: 'Da DA DADADADAD?', likesCount: 12  },
]

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts}/>
    </div>
  )
}

export default Profile