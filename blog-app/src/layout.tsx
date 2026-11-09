import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

export default function Layout(){
    return(
        <>
            <Navbar />
            <Outlet />
            <ToastContainer />
        </>
    )
}