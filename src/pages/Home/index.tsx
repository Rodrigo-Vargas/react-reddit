import Card from "../../components/Card";

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
      <div className="py-10" style={{backgroundColor: "#f7f7f7"}}>
         <div className="container">
            {
               cards.map(card => (
                  <div className="bg-white p-5">
                     <Card data={card} />
                  </div>
               ))
            }
         </div>
      </div>
   )
}

export default HomePage;