"use strict";
import * as vscode from "vscode";
import snippets from './snippets.json'

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider("cpp", {
      provideCompletionItems(doc, pos, token, context) {
        let sameLineCurly = vscode.workspace.getConfiguration("arduino-snippets-plus").get("same-line-curlies");

        return snippets.map(({ prefix, body, description }) => {
          if (sameLineCurly && ~body.indexOf("\n{")) { // Searches body for presence of newline before curly
            body = body.replace(/\n{/g, ' {');
          }
          
          return {
            label: prefix,
            insertText: new vscode.SnippetString(body),
            detail: description,
            kind: vscode.CompletionItemKind.Snippet,
          }
        });
      },
    })
  );
}
