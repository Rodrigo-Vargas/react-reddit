import Comment from '../Comment/';

const Comments = () => {
   return (
      <div>
         <div>
            Comment as Rodrigo
            <div>
               <textarea className="border border-gray-300"></textarea>
            </div>
            <div>
               <button className="bg-gray-300 text-white px-5 py-2">Post</button>
            </div>
         </div>

         <div>
            <Comment />
            <Comment />
            <Comment />
         </div>
      </div>
   )
};

export default Comments;