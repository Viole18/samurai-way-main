import DialogItem from './DIalogsItem/DialogsItem'
import classes from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props: any) => {

    let dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Artem' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Valera' },
        { id: 5, name: 'Slava' },
        { id: 6, name: 'Lesha' },
    ]

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yo' },
    ]

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messagesData.map(m => <Message message={m.message} />)

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