import { Status } from "./status";

export interface Task {
    title: string,
    id: number,
    status: Status,
}