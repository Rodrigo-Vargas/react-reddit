import Card from "../../components/Card";
import Comments from "../../components/Comments";

const DetailPage = () => {
   const cardInfo = {
      title: "What Car Should I Buy? - A Weekly Megathread",
      user: "AutoModerator"
   };

   return (
      <div className="py-10" style={{ backgroundColor: "#f7f7f7" }}>
         <div className="container bg-white p-5">
            <Card data={cardInfo} />
            <Comments />
         </div>
      </div>
   )
}

export default DetailPage;