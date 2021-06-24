import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Main from './Main';
// import Detail from './Detail';
// import Create from './Create';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/legends" component={Main} />
          {/* <Route exact path="/legends/:legendId" component={Detail} /> */}
          {/* <Route exact path="/legends" component={Create} /> */}
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
