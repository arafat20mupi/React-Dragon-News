import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation, useNavigate } from "react-router-dom";

const RightSideNav = () => {
    const {
        createGithubUser,
        createFacebookUser,
        createTwitterUser, 
        createGoogleUser
    } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogle = () => {
        createGoogleUser()
        .then(() => {
            navigate(location?.state ? location.state : "/")
        })
    }

    const handlegithub = () => {
        createGithubUser()
        .then(()=>{
            navigate(location?.state ?location.state : "/")
        })
    }

    const handleFacebook = () => {
        createFacebookUser()
        .then(() => {
            navigate(location?.state ? location.state : "/")
        })
    }

    const handleTwitter = () => {
        createTwitterUser()
        .then(() => {
            navigate(location?.state ? location.state : "/")
        })
    }

    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <button onClick={handleGoogle} className="btn  btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button onClick={handleFacebook} className="btn btn-outline w-full">
                    <FaFacebook></FaFacebook>
                    Facebook
                </button>
                <button onClick={handlegithub}  className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>
                <button onClick={handleTwitter}  className="btn btn-outline w-full">
                    <FaTwitter></FaTwitter>
                    Twitter
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h2 className="text-3xl mb-4">Find Us on</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border-x' href="">
                    <FaTwitter className='mr-2'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
                    <FaInstagram className='mr-2'></FaInstagram>
                    <span>Facebook</span>
                </a>
            </div>
            {/* q zone */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;