import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav className="container mt-2">
      <ul className=" list-unstyled nav-links list-group list-group-horizontal">
        <NavLink
          className="list-group-item btn btn-primary me-2"
          style={({ isActive }) => {
            return isActive ? { borderBottom: "2px solid purple" } : {}
          }}
          to="/"
        >
          <li>Add Customer</li>
        </NavLink>
        <NavLink
          className="list-group-item btn btn-primary me-2"
          style={({ isActive }) => {
            return isActive ? { borderBottom: "2px solid purple" } : {}
          }}
          to="/:id"
        >
          <li>Update Customer</li>
        </NavLink>
        <NavLink
          className="list-group-item btn btn-primary me-2"
          style={({ isActive }) => {
            return isActive ? { borderBottom: "2px solid purple" } : {}
          }}
          to="/create"
        >
          <li>Create Product</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Nav
