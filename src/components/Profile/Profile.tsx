import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

interface Profile {
  posts: IPosts[]
}

interface IPosts {
  id: number;
  message: string;
  likesCount: number
}

const Profile = (props: Profile) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts}/>
    </div>
  )
}

export default Profile