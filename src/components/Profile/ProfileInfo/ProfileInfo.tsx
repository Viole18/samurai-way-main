import classes from './ProfileInfo.module.css';



const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.banner}>
        <img src="https://sun9-24.userapi.com/impg/-g5ZnoL6noQw_bqTeQg4V4I07p2V6jz4TYWzJw/C77bxLc6bX4.jpg?size=960x384&quality=95&crop=0,134,2560,1024&sign=c7509b4a3dbf2c85726d16af2b3d59e8&c_uniq_tag=G_hHU1CiHy1TV0WF8Jd12sW4RcZccq2p_j0UC-Gsp3k&type=helpers" alt="fone" />
      </div>
      <div className={classes.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo