import { Route } from "react-router";
import Header from "./components/header";
import Second from './components/secondpage';
import Articles from "./components/articles";

function App() {

  return (
    <div>
      <Header />
      <Route path='/second' component={Second}></Route>
      <Articles></Articles>
    </div>
  );
}

export default App;
