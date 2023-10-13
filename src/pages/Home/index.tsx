import Card from "../../components/Card";
import BaseLayout from "../../layouts/Base";

const HomePage = () => {
   const cards = [
      {
         title: "What Car Should I Buy? - A Weekly Megathread",
         user: "AutoModerator"
      },
      {
         title: "Tesla Misses Its Own Cybertruck Launch Date, Again.",
         user: "rodrigo"
      }
   ];

   return (
      <BaseLayout>            
         {
            cards.map(card => (
               <div className="p-5">
                  <Card data={card} />
               </div>
            ))
         }
      </BaseLayout>
   )
}

export default HomePage;