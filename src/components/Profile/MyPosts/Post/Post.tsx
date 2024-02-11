import classes from './Post.module.css';

interface IPost {
  message: string,
  likesCount: number
}

const Post = (props: IPost) => {
  return (
    <div className={classes.item}>
      <img src="https://sun9-60.userapi.com/s/v1/if1/MV3fQXwu0BNlH_RNdoso9UQgXHWLOr7arA_frnn4OdqvNGRMeUwFuSn41x9XuDOXzi4P0AYE.jpg?quality=96&crop=890,0,1156,1156&as=50x50,100x100,200x200,400x400&ava=1&u=jNZcM9awZqKjfOTCwypTcohVtP-3mdBnehvMJt_wt6I&cs=200x200" alt="" />
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post