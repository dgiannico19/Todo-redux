import { v4 as uuidv4 } from "uuid";

export class Todo {
  constructor(label) {
    this.id = uuidv4();
    this.description = label.description;
    this.color = label.color;
    this.editMode = false;
  }
}
