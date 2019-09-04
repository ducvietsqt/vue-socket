// Hi, sign in to your company
// import Index from "../donga/views/Index";
const Index = () => import(/* webpackChunkName: "Index" */ '../views/Index');

// import SignIn from "../donga/views/auth/SignIn";
const SignIn = () => import(/* webpackChunkName: "SignIn" */ '../views/auth/SignIn');

const DashBoard = () => import(/* webpackChunkName: "DashBoard" */ '../views/game/DashBoard');

//Ipad
const DashBoardIpad = () => import(/* webpackChunkName: "DashBoardIpad" */ '../views/ipad/DashBoardIpad');
const IpadShowEvent = () => import(/* webpackChunkName: "IpadShowEvent" */ '../views/ipad/IpadShowEvents');
const IpadShowGrade = () => import(/* webpackChunkName: "IpadShowGrade" */ '../views/ipad/IpadShowGrade');

//Led
const LedShowQuestion = () => import(/* webpackChunkName: "LedShowQuestion" */ '../views/led/LedShowQuestion');
const LedShowGrade = () => import(/* webpackChunkName: "LedShowGrade" */ '../views/led/LedShowGrade');

import NotFound from '../components/NotFound';


const LAYOUT = {
  NotLoggedIn: "NotLoggedIn",
  LoggedIn: "LoggedIn"
};
export default [
  {path: "*", component: NotFound},
  {
    path: "/",
    name: "index",
    component: Index,
    // meta: {layout: LAYOUT.NotLoggedIn}
  },

//Game
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
    meta: {layout: LAYOUT.NotLoggedIn}
  },
  {
    path: "/dashboard",
    name: "dashboard",
    alias: '/me',
    component: DashBoard,
    meta: {
      layout: LAYOUT.LoggedIn
    }
  },

  //Ipad
{
    path: "/ipad/dashboard",
    name: "dashboardIpad",
    component: DashBoardIpad,
    meta: {layout: LAYOUT.LoggedIn}
  }
  ,
  {
    path: "/ipad/show-event",
    name: "ipadShowEvent",
    component: IpadShowEvent,
    meta: {layout: LAYOUT.LoggedIn}
  }
  ,
  {
    path: "/ipad/show-grade",
    name: "ipadShowGrade",
    component: IpadShowGrade,
    meta: {layout: LAYOUT.LoggedIn}
  },

  //Led
  {
    path: "/led/show",
    name: "ledShowQuestion",
    component: LedShowQuestion,
    meta: {layout: LAYOUT.LoggedIn}
  },
  {
    path: "/led/show-grade",
    name: "ledShowGrade",
    component: LedShowGrade,
    meta: {layout: LAYOUT.LoggedIn}
  }  


];
