import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddView from "./views/AddView"
import UpdateView from "./views/UpdateView"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddView />} />
        <Route path="/:id" element={<UpdateView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
