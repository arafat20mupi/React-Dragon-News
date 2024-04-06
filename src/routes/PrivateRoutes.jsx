import{Navigate ,useLocation} from "react-router-dom"
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from "react";

const PrivateRoutes = ({children}) => {
    const {user ,loading} = useContext(AuthContext);
    
    const location = useLocation()
    console.log(location);

    if(loading){
        return <span className="flex mt-10 mx-auto  loading loading-dots loading-lg "></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoutes;