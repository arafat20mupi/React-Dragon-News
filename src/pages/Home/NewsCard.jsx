/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaEye } from "react-icons/fa";
import pic1 from "../../assets/editorsInsight1.png"
import { Link } from "react-router-dom";
// import pic2 from "../../assets/editorsInsight2.png"
// import pic3 from "../../assets/editorsInsight3.png"
const NewsCard = ({news}) => {
    const   { _id,rating, total_view, title, author, image_url, details}=news;
    return (
        <div className="p-6 space-y-6">
            
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                        <img alt="" src={author.img} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{author.name}</a>
                            <span className="text-xs dark:text-gray-600">{author.published_date}</span>
                        </div>
                    </div>
                    <div className="space-x-2">
                        <button aria-label="Share this post" type="button" className="p-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-600">
                                <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                            </svg>
                        </button>
                        <button aria-label="Bookmark this post" type="button" className="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-600">
                                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div>
                    <img src={image_url} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                    {
                        details.length >200 ? <p className="text-sm dark:text-gray-600">{details.slice(0,200)} <Link 
                        to={`/news/${_id}`}
                        className="text-blue-600 font-bold underline ml-3">Read More.</Link></p>:<p className="text-sm dark:text-gray-600">{details}</p>
                    }
                    
                </div>
                <div className="flex flex-wrap justify-between">

                    <div className="rating rating-md">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div>
                        <span className="flex items-center"><FaEye></FaEye> <p className="ml-3">{total_view}</p></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;