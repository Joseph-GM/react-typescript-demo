import {Name} from './Person.type'

type personListProps = {
    names : Name[]
}
export const PersonList = (props: personListProps) => {
    return(
        <div>
            {props.names.map(name => {
                return(
                    <div>{name.first} {name.last}</div>
                )
            })}
        </div>
    )
}