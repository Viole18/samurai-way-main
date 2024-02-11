import classes from './MyPosts.module.css';
import Post from './Post/Post';

interface IMyPosts {
  posts: IPost[]
}

interface IPost {
  id: number;
  message: string;
  likesCount: number
}

const MyPosts = (props: IMyPosts) => {

let postsElements = props.posts.map ( (p: IPost) => <Post message={p.message} likesCount={p.likesCount} />)

  return (
    <div className={classes.postsBlock}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts