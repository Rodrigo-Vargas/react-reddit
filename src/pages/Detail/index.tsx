import Card from "../../components/Card";
import Comments from "../../components/Comments";
import BaseLayout from "../../layouts/Base";

const DetailPage = () => {
   const cardInfo = {
      title: "What Car Should I Buy? - A Weekly Megathread",
      user: "AutoModerator"
   };

   return (
      <BaseLayout>
         <div className="p-5">
            <Card data={cardInfo} />
            <Comments />
         </div>
      </BaseLayout>
   )
}

export default DetailPage;