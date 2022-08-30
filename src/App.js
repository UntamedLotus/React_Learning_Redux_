import CakeContainer from "./components/cakeContainer";
import HooksCakeContainer from "./HooksCakeContainer/HooksCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import HooksIceCreamContainer from "./HooksIceCreamContainer/HooksIceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";

import store from "./redux/store";

import { Provider } from "react-redux";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
