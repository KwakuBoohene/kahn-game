import Card from "../components/Card";

export default function Landing() {
  return (
    <div>
        <div className="">
            <span className="">KaNeHo</span>
        </div>
     <div className="menu-options flex justify-center flex-col md:flex-row">
        <Card title='G v G' description="Go head to head with another group" routing="/play"/>
        <Card title='Settings' description="Modify the settings of the game" routing="/settings"/>
        <Card title='Decks' description="Create A custom deck, download a new deck to play with" routing='/decks'/>
     </div>
    </div>
  );
}