import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import {Provider} from 'react-redux'


import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';


import Routes from "./Routes/Routes";
import MainLayout from "./commonComponents/Layout/MainLayout";
import {configureStore} from "./store/configureStore";

const store = configureStore(devToolsEnhancer(
  // options like actionSanitizer, stateSanitizer
));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <MainLayout>
        <Routes />
      </MainLayout>
    </Provider>
</BrowserRouter>,
  document.getElementById('root')
);
