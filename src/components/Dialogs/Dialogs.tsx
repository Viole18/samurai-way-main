import DialogItem from './DIalogsItem/DialogsItem'
import classes from './Dialogs.module.css'
import Message from './Message/Message'

interface Dialogs {
    dialog:  Ddata[]
    message:  Mdata[]
}

interface Ddata {
    id: number;
    name: string;
}
interface Mdata {
    id: number;
    message: string;
}

const Dialogs = (props: Dialogs) => {

    let dialogsElements = props.dialog.map( (d: Ddata) => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.message.map( (m: Mdata) => <Message message={m.message} />)

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>

        </div>
    )
}

export default Dialogs