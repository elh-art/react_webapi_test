import React, {useState} from "react"

const AddForm = () => {
  const [ customer, setCustomer ] = useState({ name: '', email: ''})

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await fetch('https://lexfront22.azurewebsites.net/api/customers', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    })

    console.log(await result.json())
    setCustomer({ name: '', email: ''})
  }

  return (
    <div className="container">
      <h3 className="my-5">Lägg till Kund</h3>
      <form className="mt-5 d-grid" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={customer.name} 
          onChange={(e) => setCustomer((currentValues) => ({...currentValues, name: e.target.value}))}
          className="form-control mb-3" placeholder="Ange namn..."/>
        <input 
          type="text"
          value={customer.email} 
          onChange={(e) => setCustomer((currentValues) => ({...currentValues, email: e.target.value}))}
          className="form-control mb-4" placeholder="Ange e-postadress..."/>
        <button type="submit" className="btn btn-success">SPARA</button>
      </form>
    </div>
  )
}

export default AddForm