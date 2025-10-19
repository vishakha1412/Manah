import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router'
import {Route} from 'react-router'
import Home from './components/Home/Home.jsx'
import Meds from './components/Meds/Meds.jsx'
import Schedule from './components/Schedule/Schedule.jsx'
import CareTeam from './components/CareTeam/CareTeam.jsx'
import Emergency from './components/Emergency/Emergency.jsx'
import  Feature  from './components/Feature/Feature.jsx'
import EmotionalIdeas from './components/EmotionalIdeas/EmotionalIdeas.jsx'
import { Provider } from 'react-redux';
 
import GetInTouch from './components/GetInTouch/GetInTouch.jsx'
import MindfulMoment from './components/MindFulMoment/MindfulMoment.jsx'
import { AITalk } from './components/AITalk/AITalk.jsx'
import Talk from './components/AITalk/Talk.jsx'
import MoodBoard from './components/MoodBoard/MoodBoard.jsx'
import Login from './components/Login/Login.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import { store } from './store/store.js'
import { AddSchedule } from './components/ADD/AddSchedule.jsx'
import Planner from './components/Planner/Planner.jsx'
import { AuthProvider } from '../context/AuthContext.jsx'


 
  
  const router=createBrowserRouter(
    createRoutesFromElements([
    <Route path='/' element={<App/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/features' element={<Feature/>}/>
    <Route path='/emotion' element={<EmotionalIdeas/>}/>
    
    <Route path='/meds' element={<Meds/>}/>
    <Route path='/schedule' element={<Schedule/>}/>
    <Route path='/care' element={<CareTeam/>}/>
    <Route path='/emergency' element={<Emergency/>}/>
    <Route path='/get' element={<GetInTouch/>}/>
    <Route path='mind' element={<MindfulMoment/>}/>
    <Route path='/talk' element={<Talk/>}/>
    <Route path='/mood' element={<MoodBoard/>}/>
    <Route path='/add' element={<AddSchedule/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/planner' element={<Planner/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    
  
  </Route>
    ])
  )
 

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <AuthProvider>
   <Provider store={store}>
     <RouterProvider router={router}/>
     </Provider>
     </AuthProvider>
</StrictMode>,
)
