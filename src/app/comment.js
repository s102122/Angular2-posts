"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Comment = /** @class */ (function () {
    function Comment(message) {
        this.message = message;
    }
    Comment.prototype.toForm = function () {
        return "message=" + this.message;
    };
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map