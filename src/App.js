import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddView from "./views/AddView"
import UpdateView from "./views/UpdateView"
import CreateForm from "./components/CreateForm"
import Nav from "./components/Nav"

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<AddView />} />
          <Route path="/create" element={<CreateForm />} />
          <Route path="/:id" element={<UpdateView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
