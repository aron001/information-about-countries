import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home';
import ContryDetailPage from './Component/ContryDetailPage';
const router = createBrowserRouter(
createRoutesFromElements(
  <Route>
  <Route path="/" element={<Home/>}  >  
</Route>
<Route path="/:name" element={<ContryDetailPage/>}/>
  
  
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
