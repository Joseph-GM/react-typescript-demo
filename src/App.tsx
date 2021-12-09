import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Headng';
import { Person} from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status'
import {Oscar} from './components/Oscar'
import {Button} from './components/Button'
import {Input} from './components/Input'
import {Container} from './components/Container'
import {LoggedIn} from './state/LoggedIn'
import {User} from './state/User'
import {Counter} from './state/Counter'

import {ThemeContextProvider} from './context/ThemeContext';
import {Box} from './context/Box'

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Lee'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Lee'
    },
    {
      first: 'Joseph',
      last: 'Kim'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className="App">
      <Greet name="Joseph" messageNumber={20} isLogedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='success'/>
      <Oscar>
        <Heading>Oscar goes to Parasite</Heading>
      </Oscar>
      <Greet name="Eunyull" isLogedIn={true} />
      <Button handleClick={(event, id)=>{
        console.log('Button Clicked', event, id)
      }} />
      <Input value='' handlechange={event => {
          console.log(event)
      }} />
      <Container styles={{border: '1px solid black', padding: '1rem'}}/>
      <LoggedIn />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
