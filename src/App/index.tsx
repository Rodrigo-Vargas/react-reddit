import Card from "../components/Card";

const App = () => {
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
                  <Card data={card} />
               ))
            }
         </div>
      </div>
   )
}

export default App;