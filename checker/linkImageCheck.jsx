// リンク画像を調べる
//
// return  { result: Boolean (true is success)
//           message: "hello..." (some text) }

function linkImageCheck() {
  var doc = app.activeDocument
  var placed = doc.placedItems
  var result = false
  var message = []

  for (var i = 0; i < placed.length; i++) {
    message.push("リンク画像 : " + decodeURI(placed[i].file.absoluteURI))
  }
  if (message.length == 0) {
    message[0] = "リンク画像はありません"
    result = true
  }
  return {result: result, message: message}
}
