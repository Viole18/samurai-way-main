import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message='Hi, how are you?' likesCount='0' />
        <Post message='Hi, you?' likesCount='18'/>
      </div>
    </div>
  )
}

export default MyPosts