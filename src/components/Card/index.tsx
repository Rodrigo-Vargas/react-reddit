import { faBookmark, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VoteButtons from "../VoteButtons";

const Card = ({data}) => {
   return (
      <div>
         <div className="flex flex-row justify-between">
            <a className="inline-block" href="/detail">
               <h1 className="text-xl inline pr-3">{data.title}</h1>
               <span className="text-gray-400 text-sm">i.imgur.com</span>
            </a>
         </div>

         <div className="meta text-sm">
            <span className="text-gray-400 text-sm">by {data.user} - 12h ago in</span>
            <a className="text-blue-500" href="/r/gifs">/r/gifs</a>
         </div>

         <div className="body py-5 flex justify-between">
            <div>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZiVHZDJuwhzT02Lu6ZWDywV_X98ngQIE9Cg&usqp=CAU" alt="" />
            </div>

            <VoteButtons />
         </div>

         <div className="actions text-gray-400 text-sm">
            <FontAwesomeIcon icon={faMessage} className="pr-1" />
            <span className="pr-3">915</span>
            <span className="pr-3">Share</span>
            <span className="pr-3">Hide</span>
            <span className="pr-3">Report</span>
            <a href="">
               <FontAwesomeIcon icon={faBookmark} className="pr-2" />
               <span>Save</span>
            </a>
         </div>
      </div>
   )
};

export default Card;