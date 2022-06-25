import { v4 as uuidv4 } from 'uuid';

export class Task {
    id: number;
    name: string;
    description: string;
    completed: boolean;
    createdAt: Date

    constructor(name: string, description: string) {
        this.id = uuidv4();
        this.name = name;
        this.description = description;
        this.completed = false;
        this.createdAt = new Date();
    }

}
