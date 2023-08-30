import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src="logo.svg" alt="" />
            <span>halfwaydevAdmin</span>
        </div>
        <div className="icons">
            <img src="/search.svg" alt="" className="icon" />
            <img src="/app.svg" alt="" className="icon" />
            <img src="/expand.svg" alt="" className="icon" />
            <div className="notification">
                <img src="/notifications.svg" alt="" />
                <span>1</span>
            </div>
            <div className="user">
                <img src="https://images.unsplash.com/photo-1658632302262-957f74b1fdd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
                <span>Janet</span>
            </div>
            <img src="/settings.svg" alt="" className="icon" />
        </div>
    </div>
  )
}

export default Navbar