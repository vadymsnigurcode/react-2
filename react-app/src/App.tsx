
// import ListGroup from './components/ListGroup';
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

// import { Alert } from "reactstrap";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}> My alert</Alert>}
        <Button color="primary" onClick={()=> {console.log("click"); setAlertVisibility(true)}}>
          my button
        </Button>

      </div>
  );

  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris", "Kyiv"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  //}

  // return <div><ListGroup items={items} heading="Cities" onSellectItem={handleSelectItem}/></div>
}

export default App;