import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <header className="App-header">
                <div>Full CRUDD App</div>
                <NavLink className="link" to="/">
                    Home
                </NavLink>
                <NavLink className="link" to="about">
                    About
                </NavLink>
                <NavLink className="link" to="list">
                    Projects
                </NavLink>
            </header>
            <div className="BodyBoi">
                <Outlet />
            </div>
        </div>
    );
}
