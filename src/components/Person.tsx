import { PersonProps } from "./Person.type"

export const Person = (props: PersonProps) => {
    return (
        <div>
            {console.log(props)}
            {props.name.first} {props.name.last}
        </div>
    )
}
