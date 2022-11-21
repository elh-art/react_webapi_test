import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const UpdateForm = () => {
  const { id } = useParams()
  const [customer, setCustomer] = useState({ id: id, name: "", email: "" })

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://lexfront22.azurewebsites.net/api/customers/" + id
      )
      const data = await result.json()
      setCustomer(data)
    }
    fetchData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await fetch(
      "https://lexfront22.azurewebsites.net/api/customers/" + id,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      }
    )

    console.log(await result.json())
    setCustomer({ name: "", email: "" })
  }

  return (
    <div className="container">
      <h3 className="my-5">Uppdatera Kund</h3>
      <form className="mt-5 d-grid" onSubmit={handleSubmit}>
        <input
          type="text"
          value={customer.name}
          onChange={(e) =>
            setCustomer((currentValues) => ({
              ...currentValues,
              name: e.target.value,
            }))
          }
          className="form-control mb-3"
          placeholder="Ange namn..."
        />
        <input
          type="text"
          value={customer.email}
          onChange={(e) =>
            setCustomer((currentValues) => ({
              ...currentValues,
              email: e.target.value,
            }))
          }
          className="form-control mb-4"
          placeholder="Ange e-postadress..."
        />
        <button type="submit" className="btn btn-success">
          Uppdatera
        </button>
      </form>
    </div>
  )
}

export default UpdateForm
