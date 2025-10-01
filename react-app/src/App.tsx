
// import ListGroup from './components/ListGroup';
import Alert from "./components/Alert";

// import { Alert } from "reactstrap";

function App() {

  return (
    <div className="alert alert-primary">
        <Alert>
          Hello <span>world</span>
        </Alert>

      </div>
  );

  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris", "Kyiv"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  //}

  // return <div><ListGroup items={items} heading="Cities" onSellectItem={handleSelectItem}/></div>
}

export default App;