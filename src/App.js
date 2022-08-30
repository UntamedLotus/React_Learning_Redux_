import CakeContainer from "./components/cakeContainer";
import HooksCakeContainer from "./HooksCakeContainer/HooksCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import HooksIceCreamContainer from "./HooksIceCreamContainer/HooksIceCreamContainer";

import store from "./redux/store";

import { Provider } from "react-redux";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
