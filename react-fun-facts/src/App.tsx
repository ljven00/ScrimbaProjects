import "./App.css";
import { Facts } from "./Facts";
import Header from "./Header";

function App() {
  const title = "Fun Facts about React";
  const items: string[] = [
    "Was first released in 2013",
    "Was originally created by Jordan Walke",
    "Has well over 100k stars on GitHub",
    "Is maintained by Facebook",
    "Powers thousands of enterprise apps, including mobile apps"
  ]

  return (
      <>
        <Header/>
        <Facts title={title} items={items}/>
      </>
  );
}

export default App;
