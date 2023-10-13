import { faUpLong, faDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VoteButtons = () => {
   return (
      <div className="flex flex-col items-center">
         <a href="" className="bg-orange-500 text-white h-8 w-8 text-center flex justify-center items-center rounded-full">
            <FontAwesomeIcon icon={faUpLong} />
         </a>

         <span className="text-orange-500 my-3">5450</span>

         <a href="" className="bg-orange-500 text-white h-8 w-8 text-center flex justify-center items-center rounded-full">
            <FontAwesomeIcon icon={faDownLong} />
         </a>
      </div>
   )
}

export default VoteButtons;