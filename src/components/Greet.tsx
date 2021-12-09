type GreetProps = {
    name: string
    messageNumber?: number
    isLogedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { messageNumber = 0} = props
    return (
        <div>
            <h2>
            {props.isLogedIn ? `Welcome ${props.name} You have ${messageNumber} unread message!` : `Welcome Guest! Please Log In`}
            </h2>
            
        </div>
    )
}