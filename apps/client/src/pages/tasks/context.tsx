import React, {
  useContext,
  createContext,
  PropsWithChildren,
  useReducer,
} from "react";
import { noop } from "lodash";

interface ITask {
  id: number;
  text: string;
  done: boolean;
}

interface IAction {
  type: "added" | "changed" | "deleted";
  id: number;
  text: string;
  task?: ITask;
}

const TasksContext = createContext<ITask[]>([]);
const TasksDispatchContext = createContext<React.Dispatch<IAction>>(noop);
function tasksReducer(prevState: ITask[], action: IAction) {
  switch (action.type) {
    case "added": {
      return [
        ...prevState,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return prevState.map((item: any) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case "deleted": {
      return prevState.filter((item: any) => item.id !== action.task.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}
const initialTasks: ITask[] = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

export const useTasks = () => useContext(TasksContext);
export const useTasksDispatch = () => useContext(TasksDispatchContext);
export const TasksProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [tasks, dispatch] = useReducer<React.Reducer<ITask[], IAction>>(
    tasksReducer,
    initialTasks
  );
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};
