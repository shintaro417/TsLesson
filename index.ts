const ts:string = "typescript";
console.log(ts);

// TypeScriptを使うと関数の使い方が誰がみても分かる→ドキュメントとして使える。(分かりやすくコードを書ける。)
// JavaScriptだとコメントで説明するがコメントでは信頼性に欠ける。
function add(a: number,b: number): number{
    return a + b;
}