export enum TodoStatus {
  DELETED = 'deleted',
  INCOMPLETE = 'incomplete',
  COMPLETE = 'complete',
}

export enum TodoPriority {
  HIGH = 2,
  MEDIUM = 1,
  LOW = 0,
}

export interface Todo {
  id: number;
  title: string;
  status: TodoStatus;
  priority: TodoPriority;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export const todos = [
  {
    id: 1,
    title: 'Improve this app',
    status: TodoStatus.INCOMPLETE,
    priority: TodoPriority.HIGH,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: 'Learn Angular',
    status: TodoStatus.INCOMPLETE,
    priority: TodoPriority.HIGH,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: 'Rewrite OutLinear in Angular',
    status: TodoStatus.INCOMPLETE,
    priority: TodoPriority.HIGH,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
