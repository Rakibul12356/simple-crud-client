

import './App.css'

const App = () => {

 const handleAddUser=event=>{
  event.preventDefault();
  const form = event.target
  const name =form.name.value
  const email =form.email.value
  const user = {name,email}
  console.log(user)
  fetch('http://localhost:5000/users',{
    method:"POST",
    headers:{"Content-Type":"application/json"
    },
    body:JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data =>{
    console.log(data)
    if(data.insertedId){
      form.reset()
    }
  })
 } 
  return (
    <>
      <h1 className='text-3xl'>Simple Crud</h1>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          name="name"
          id=""
          className='border' />
        <br />
        <br />
        <input
          type="email"
          name="email"
          id="" 
          className='border-2'/>
        <br />
        <br />
        <input
          type="submit"
          value="add User" />
        <br />
      </form>
    </>
  )
}

export default App
