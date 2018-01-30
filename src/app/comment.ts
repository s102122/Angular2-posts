export class Comment {

    constructor(public message: String) {}

    toForm(): string {
        return `message=${this.message}`;
     }
  }