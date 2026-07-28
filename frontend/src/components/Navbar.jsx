import { Link } from "react-router-dom";

function Navbar(){

return (

<nav className="navbar">

<div className="brand">
<span>RN</span>
RiyadNova AI
</div>


<div className="nav-links">

<Link to="/">
Home
</Link>

<Link to="/dashboard">
Dashboard
</Link>

<Link to="/idea-analyzer">
Nova Engine
</Link>

<Link to="/profile">
Profile
</Link>

</div>


</nav>

);

}

export default Navbar;