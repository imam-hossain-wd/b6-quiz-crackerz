import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Components/Home/Home';
import Info from './Components/Info/Info';
import Blog from './Components/Blog/Blog';
import CoursesDetails from './Components/CoursesDetails/CoursesDetails';
import Statics from './Components/Statics/Statics';
import NotFound404 from './Components/NotFound404/NotFound404';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        {
          path: 'home',
          element: [<Info key={1112}></Info>,<Home></Home>],
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }

        },
        
        {
          path: '/',
          element: [<Info key={1111}></Info>,<Home></Home>],
          
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }

        },
        {
          path: 'blog',
          element: <Blog></Blog>
          
        },
        {
          path: 'statics',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statics></Statics>
          
        },

        {
          path: 'coursedetails/:courseId',
          loader: ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`)
          },
          element: <CoursesDetails></CoursesDetails>
        },
        {
          path: '*',
          element: <NotFound404></NotFound404>
        }
       
       
       
      ],

    }
    
  ])
  
  return (
    <div className="App">

<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

