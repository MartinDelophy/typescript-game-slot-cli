import * as React from "react"
import * as ReactDOM from "react-dom"
import routes from './routes';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

const App = () => (  
    <div>
        {renderRoutes(routes)}
    </div>
);


ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById("app")
)
