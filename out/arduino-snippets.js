"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider("cpp", {
        provideCompletionItems(doc, pos, token, context) {
            return [
                {
                    label: "dogs",
                    insertText: new vscode.SnippetString("I POOP MY PANTS"),
                    detail: "creates a test method",
                    kind: vscode.CompletionItemKind.Snippet,
                },
            ];
        },
    }));
}
exports.activate = activate;
//# sourceMappingURL=arduino-snippets.js.map