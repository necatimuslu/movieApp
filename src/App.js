import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";
import Category from "./pages/Category";
import MovieDetail from "./pages/MovieDetail";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/" component={Home} exact />
        <Route path="/movie" component={Movie} exact />
        <Route path="/movie/genres/:id" component={Movie} exact />
        <Route path="/movie/:id" component={MovieDetail} exact />
        <Route path="/tv" component={Tv} exact />
        <Route path="/category" component={Category} exact />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
