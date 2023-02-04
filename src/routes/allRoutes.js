import React from "react"
import { Redirect } from "react-router-dom"

import Login from "../pages/Authentication/Login"
import Register from "../pages/Authentication/Register"
import ForgetPassword from "../pages/Authentication/ForgetPassword"

import Dashboard from "../pages/Dashboard/index"

import ManagementTeacher from "../pages/Management/Teacher/index";
import ManagementStudent from "../pages/Management/Student/index";
import ManagementMajor from "../pages/Management/Major/index";
import ManagementSubjects from "../pages/Management/Subjects/index";
import ManagementEmploye from "../pages/Management/Employe/index";

import InstitutionsManage from "../pages/Institutions/Manage/index";
import InstitutionsProfile from "../pages/Institutions/Profile/index";
import InstitutionsCalendar from "../pages/Institutions/Calendar/index";

import ReportRecap from "../pages/Report/Recap/index";

const userRoutes = [
  { path: "/dashboard", component: Dashboard },

  // MANAGEMENT DATA
  { path: "/management/teacher", component: ManagementTeacher },
  { path: "/management/student", component: ManagementStudent },
  { path: "/management/major", component: ManagementMajor },
  { path: "/management/subjects", component: ManagementSubjects },
  { path: "/management/employe", component: ManagementEmploye },

  // INSTANSI
  { path: "/institutions/manage", component: InstitutionsManage },
  { path: "/institutions/profile", component: InstitutionsProfile },
  { path: "/institutions/calendar", component: InstitutionsCalendar },

  // REPORT
  { path: "/report/recap", component: ReportRecap },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }, 
]

const authRoutes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/forgetpassword", component: ForgetPassword },
]

export { userRoutes, authRoutes }
