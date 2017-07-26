// CMYK の総数が 300% 以上であるのかチェックする( プリントネットの入稿規定 )
//
// return  { result: Boolean (true is success)
//           message: "hello..." (some text) }

function cmykCheck() {
  var doc = app.activeDocument
  var result = false
  var message = []
  var checkColor = new CMYKColor()
  checkColor.cyan = 0
  checkColor.magenta = 100
  checkColor.yellow = 100
  checkColor.black = 0

  for (i = 0; i < doc.pathItems.length; i++) {
    color = doc.pathItems[i].fillColor
    layer = doc.pathItems[i].layer

    sum = color.cyan + color.magenta + color.yellow + color.black

    if (sum >= 300 && !layer.locked) {
      message.push(
        "C: " +
          color.cyan +
          " M: " +
          color.magenta +
          " Y: " +
          color.yellow +
          " K: " +
          color.black,
      )
    }
  }

  if (message.length == 0) {
    message[0] = "CMYKの総数300%以下です"
    result = true
  }
  return {result: result, message: message}
}
