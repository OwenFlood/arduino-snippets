"use strict";
import * as vscode from "vscode";
import snippets from './snippets.json'
import { SameLineCurly, IsInQuote } from './filters'

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider("cpp", {
      provideCompletionItems(doc, pos, token, context) {
        if (IsInQuote(doc, pos)) { // Prevent returning snippets if cursor is in a string
          return [];
        }

        return snippets.map(({ prefix, body, description }) => {
          body = SameLineCurly(body);
          
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
