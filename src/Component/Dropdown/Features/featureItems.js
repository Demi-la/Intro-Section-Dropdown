import  {ReactComponent as Todo} from '../../../Assets/icon-todo.svg'
import {ReactComponent as Calender} from '../../../Assets/icon-calendar.svg'
import {ReactComponent as Reminder} from '../../../Assets/icon-reminders.svg'
// import planning from '../../../Assets/icon-planning.svg'
import { ReactComponent as Planning } from '../../../Assets/icon-planning.svg'

const featureItems = [
  {id:1, 
  icon: <Todo/>,  text: "Todo List",  
  path: "/todo", 
  cName: "dropdown-link" },

  {id:2, 
  icon: <Calender/>, text: "Calendar",   
   path: "/calender", 
   cName: "dropdown-link" },

  {id:3, 
    icon: <Reminder/>, 
    text: "Reminders",  
    path: "/reminder",
   cName: "dropdown-link" },


  {id:4, 
  icon: <Planning />, text: "Planning", 
   path: "/planning", 
   cName: "dropdown-link" },
];

export default featureItems

   
  




