import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 0 },
    { id: 2, message: 'How are you?', likesCount: 18  },
    { id: 3, message: 'Hi, you?', likesCount: 32  },
    { id: 4, message: 'Da DA DADADADAD?', likesCount: 12  },
]

let postsElements = posts.map ( p => <Post message={p.message} likesCount={p.likesCount} />)

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