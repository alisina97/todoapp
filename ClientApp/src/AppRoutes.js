import { Counter } from "./components/Counter";
import { ToDoList } from "./components/ToDoList";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/to-do-list',
    element: <ToDoList />
  }
];

export default AppRoutes;
