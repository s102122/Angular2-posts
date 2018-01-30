export class Comment {

    constructor(public username: String, public message: String) {}

    toForm(): string {
        return `name=${this.username}&power=${this.message}`;
     }
  }