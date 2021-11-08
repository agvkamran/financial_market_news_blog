import { Route } from "react-router";
import Header from "./components/header/header";
import Articles from "./screens/articles/articles";
import Article from './screens/article/article';
import { mockData } from "./mockData";

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path='/'><Articles mockData={mockData} /></Route>
      <Route exact path='/articles/:index' component={Article} />
    </div>
  );
}

export default App;
