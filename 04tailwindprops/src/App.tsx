import "./App.css";
import Card from './component/card'

function App( ) {
  const myObj={
    userName:"suuny",
    age:22
  }
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4"> Tailwind test</h1>
      <Card userName="sunnycoder" btnText="click me"  />
      <Card userName="Raj" btnText="visit me" />
      

    </>
  );
}

export default App;
