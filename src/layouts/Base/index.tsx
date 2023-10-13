import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubscriptionItem from "../../components/SubscriptionItem";
import { faBookmark, faChevronDown, faCogs, faEnvelope, faMagnifyingGlass, faMessage, faUser } from "@fortawesome/free-solid-svg-icons";

const BaseLayout = ({ children }) => {
   return (
      <main style={{ backgroundColor: "#f7f7f7" }}>
         <header className="bg-white shadow-md flex flex-row py-5 flex-1 items-center">
            <div className="container flex justify-between">
               <div className="w-3/6">
                  <a href="/" className="border-r px-5 border-r-gray-300">Forum</a>
                  <a className="px-5 text-orange-500" href="/">frontpage</a>
                  <a className="px-5 text-gray-300" href="/">all</a>
                  <a className="px-5 text-gray-300" href="/">random</a>
               </div>

               <div className="w-1/6">
                  <FontAwesomeIcon className="text-gray-300 pr-5 border-r border-gray-300" icon={faMagnifyingGlass} />
               </div>

               <div className="w-1/3 flex">
                  <div className="w-3/6 items-center">
                     <FontAwesomeIcon className="text-blue-400 pr-5" icon={faUser} />
                     <span className="pr-1">Rodrigo</span>
                     <FontAwesomeIcon className="text-blue-400" icon={faChevronDown} />
                  </div>

                  <div className="w-1/6 pr-3">
                     <FontAwesomeIcon icon={faEnvelope} />
                  </div>

                  <div className="w-1/6 pr-3">
                     <FontAwesomeIcon icon={faCogs} />
                  </div>
               </div>
            </div>
         </header>

         <div className="mt-5 py-10 min-h-screen" >

            <div className="container flex">
               <div className="bg-white w-2/3 rounded-lg">
                  {children}
               </div>

               <div className="ml-10 w-1/3">
                  <div className="bg-white p-5 rounded-lg mb-10">
                     <h2 className="text-xl mb-10">Channels</h2>

                     <div>
                        <SubscriptionItem />
                        <SubscriptionItem />
                        <SubscriptionItem />
                        <SubscriptionItem />
                     </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg">
                     <h2 className="text-xl mb-10">Trending Threads</h2>

                     <div>
                        <h3 className="text-md text-gray-800">Frank Ocean's Long-Awaited Album, Boys Don't Cry, Will be Released on Friday</h3>
                        <span className="text-gray-400 text-sm mb-5 inline-block">i.imgur.com</span>

                        <div className="actions text-gray-400 text-sm">
                           <FontAwesomeIcon icon={faMessage} className="pr-1" />
                           <span className="pr-3">915</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
   )
}

export default BaseLayout;