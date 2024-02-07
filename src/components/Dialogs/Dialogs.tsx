import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

const Dialogs = (props: any) => {
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <div className={classes.dialog + ' ' + classes.active}>
                        <NavLink to='/dialogs/1'>Dimych</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to='/dialogs/2'>Artem</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to='/dialogs/3'>Sveta</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to='/dialogs/4'>Valera</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to='/dialogs/5'>Slava</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to='/dialogs/6'>Lesha</NavLink>
                    </div>
                </div>
                <div className={classes.messages}>
                    <div className={classes.message}>Hi</div>
                    <div className={classes.message}>How are you?</div>
                    <div className={classes.message}>Yo</div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs