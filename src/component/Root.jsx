import { Outlet } from "react-router-dom";
import App from "../App"
import Nav2 from "./Nav2";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Nav2></Nav2>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;