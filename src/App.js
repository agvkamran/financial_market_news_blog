import { Route } from "react-router";
import Header from "./components/header";
import Second from './components/secondpage';
import Articles from "./components/articles";
import Article from './components/article';
import { mockData } from "./mockData";

function App() {

  return (
    <div>
      <Header />
      <Route path='/second' component={Second}></Route>
      <Route exact path='/articles'><Articles mockData={mockData} /></Route>
      <Route exact path='/articles/:index' component={Article} />
    </div>
  );
}

export default App;
