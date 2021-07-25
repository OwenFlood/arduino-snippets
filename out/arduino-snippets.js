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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const snippets_json_1 = __importDefault(require("./snippets.json"));
const filters_1 = require("./filters");
function activate(context) {
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider("cpp", {
        provideCompletionItems(doc, pos, token, context) {
            if (filters_1.IsInQuote(doc, pos)) {
                return [];
            }
            return snippets_json_1.default.map(({ prefix, body, description }) => {
                body = filters_1.SameLineCurly(body);
                return {
                    label: prefix,
                    insertText: new vscode.SnippetString(body),
                    detail: description,
                    kind: vscode.CompletionItemKind.Snippet,
                };
            });
        },
    }));
}
exports.activate = activate;
//# sourceMappingURL=arduino-snippets.js.map