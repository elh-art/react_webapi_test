import React, { useState } from "react"
import axios from "axios"

const CreateForm = () => {
  
  const [product, setProduct] = useState({})
  const [image, setImage] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("name", product.name)
    formData.append("description", product.description)
    formData.append("price", product.price)
    formData.append("imageFile", image)

    const result = await axios.post('https://fndfund22-api2.azurewebsites.net/api/products', formData)
    console.log(result.data)
  }
 
  return (
    <div className="container">
      <div className="display-6 my-3">Upload a product</div>
      <form onSubmit={handleSubmit}>
        <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} className="form-control mb-3" placeholder="Product Name" type="text" />
        <input value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} className="form-control mb-3" placeholder="Product description" type="text" />
        <input value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} className="form-control mb-3" placeholder="Product price" type="text" />
        <input value={product.imageFile} onChange={(e) => setImage(e.target.files[0])} className="form-control mb-3" placeholder="Product image" type="file" accept="image/*"/>
        <button type="submit" className="btn btn-outline-secondary mt-2">Create Product</button>
      </form>
    </div> 
  )
}

export default CreateForm
