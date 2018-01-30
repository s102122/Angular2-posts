export class Post {

    constructor(public title: String, public body: String) {}

    toForm(): string {
        return `name=${this.title}&power=${this.body}`;
     }
  }