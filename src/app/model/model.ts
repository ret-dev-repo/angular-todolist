export interface ToDoItem{
    id: number;
    description: string;
    targetDate: string;
    completed: boolean;
}

export interface Course{
    id:number;
    description:string;
    iconUrl:string;
    longDescription:string;
    category:string;
    lessonsCount:number;
}