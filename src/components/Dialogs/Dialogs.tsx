import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

const DialogItem = (props: any)=> {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
                        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
                    </div>
    )
}

const Message = (props: any)=> {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props: any) => {
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <DialogItem name='Dimych' id='1' />
                    <DialogItem name='Artem' id='2' />
                    <DialogItem name='Sveta' id='3' />
                    <DialogItem name='Valera' id='4' />
                    <DialogItem name='Slava' id='5' />
                    <DialogItem name='Lesha' id='6' />
                </div>
                <div className={classes.messages}>
                    <Message  message='Hi'/>
                    <Message  message='How are you?'/>
                    <Message  message='Yo'/>
                </div>
            </div>

        </div>
    )
}

export default Dialogs