import * as vscode from "vscode";

export const SameLineCurly = (body: string) => {
    let sameLineCurly = vscode.workspace.getConfiguration("arduino-snippets-plus").get("same-line-curlies");

    if (sameLineCurly && ~body.indexOf("\n{")) {
        // Searches body for presence of newline before curly
        return body.replace(/\n{/g, " {");
    }

    return body;
};

export const IsInQuote = (doc: vscode.TextDocument, pos: vscode.Position) => {
  const string = doc.getText( // Contents of file up to current location
        new vscode.Range(
        new vscode.Position(0, 0),
        new vscode.Position(pos.line, pos.character)
        )
    );
    //                  |   Number of quotations | - |   Escaped quotations    |  
    const isInQuote = !!((string.split('"').length - string.split('\\"').length) % 2);

    return isInQuote;
};
