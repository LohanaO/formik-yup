import { LEVELS } from "./levels.enum";

export class tareas{
name="";
description="";
completed=false;
level=LEVELS.NORMAL

constructor(name,description,completed,level) {
    this.name = name;
    this.description = description;
    this.completed = completed;
    this.level = level
    }
}