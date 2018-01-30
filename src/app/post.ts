export class Post {

    constructor(public title: String, public body: String, public userId: String, public id: String) {}

    toForm(): string {
        return `name=${this.title}&body=${this.body}&userId=${this.userId}&id=${this.id}`;
     }
  }