import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
        <div>
        <img src="https://klike.net/uploads/posts/2022-10/1664882480_b.jpg" alt="fone" />
        </div>
        <div>
          ava + description
        </div>
        <div>
          new post
        </div>
        <div className={classes.posts}>
          <div className={classes.item}>Post1</div>
          <div className={classes.item}>Post2</div>
        </div>
      </div>
    )
}

export default Profile