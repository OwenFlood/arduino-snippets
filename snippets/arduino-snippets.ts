"use strict";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider("cpp", {
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
    })
  );
}

// var sameLineCurly = vscode.workspace.getConfiguration("arduino-snippets-plus").get("same-line-curlies");
