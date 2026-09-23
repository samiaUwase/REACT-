// import Card from './Card.jsx'
// import Button from './Button.jsx'
import Student from './Student.jsx'
function App() {

  

  return (
    <>
    {/* <Card/>
    <Card/>
    <Button/> */}
    <Student name="Spongebob" age={34} isStudent={true}/>
    <Student name="samuel" age={35} isStudent={false}/>
    <Student name="patrick" age={54} isStudent={true}/>
    <Student name="plankton" age={24} isStudent={true}/>
     <Student/>

    </>
  )
}

export default App
