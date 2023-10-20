import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home';
import ErrorPage from "./Component/Errorpage";

const router = createBrowserRouter(
createRoutesFromElements(
  
  <Route path="/" element={<Home/>}  errorElement={<ErrorPage />}>  

  </Route>
  
  
    )
  );
function App() {
  return (
    <div className="" >
    <RouterProvider router={router}/>

        </div>
  );
}

export default App;
