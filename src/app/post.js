"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post(title, body) {
        this.title = title;
        this.body = body;
    }
    Post.prototype.toForm = function () {
        return "name=" + this.title + "&power=" + this.body;
    };
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.js.map