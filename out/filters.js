"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsInQuote = exports.SameLineCurly = void 0;
const vscode = __importStar(require("vscode"));
const SameLineCurly = (body) => {
    let sameLineCurly = vscode.workspace.getConfiguration("arduino-snippets-plus").get("same-line-curlies");
    if (sameLineCurly && ~body.indexOf("\n{")) {
        return body.replace(/\n{/g, " {");
    }
    return body;
};
exports.SameLineCurly = SameLineCurly;
const IsInQuote = (doc, pos) => {
    const string = doc.getText(new vscode.Range(new vscode.Position(0, 0), new vscode.Position(pos.line, pos.character)));
    const isInQuote = !!((string.split('"').length - string.split('\\"').length) % 2);
    return isInQuote;
};
exports.IsInQuote = IsInQuote;
//# sourceMappingURL=filters.js.map