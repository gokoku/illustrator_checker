// フォントデータがあるか調べる
//
// return  { result: Boolean (true is success)
//           message: "hello..." (some text) }

function fontCheck() {
  var doc = app.activeDocument
  var result = false
  var message = []

  if (doc.textFrames.length > 0) {
    message[0] = 'フォントデータあります'
    for (i = 0; i < doc.textFrames.length; i++) {
      textArtRange = doc.textFrames[i].textRange
      message.push(textArtRange.characterAttributes.textFont)
    }
  }
  if (message.length == 0) {
    message[0] = 'フォントデータはありません'
    result = true
  }
  return { result: result, message: message }
}
