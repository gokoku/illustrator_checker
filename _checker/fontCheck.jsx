// フォントデータがあるか調べる
//
// return  { result: Boolean (true is success)
//           message: "hello..." (some text) }

function fontCheck() {
  var doc = app.activeDocument
  var result = false
  var message = []
  var texts = doc.textFrames
  if (texts.length > 0) {
    message[0] = 'フォントデータあります'
    for (i = 0; i < texts.length; i++) {
      if (texts[i].textRanges.length > 0) {
        message.push("* " + texts[i].textRange.characterAttributes.textFont.name)
      } else {
        message.push('* TEXT孤立点')
      }
    }
  }
  if (message.length == 0) {
    message[0] = 'フォントデータはありません'
    result = true
  }
  return { result: result, message: message }
}
