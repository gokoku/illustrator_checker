// レイヤーのチェック
//
// return  { result: Boolean (true is success)
//           message: "hello..." (some text) }

function layerCheck() {
  var doc = app.activeDocument
  var layers = doc.layers
  var result = true
  var message = []

  for (var i = 0; i < layers.length; i++) {
    if (!layers[i].locked) {
      message.push('レイヤー名 : ' + layers[i].name)
    }
  }

  if (message.length > 1) {
    result = false
  }
  return { result: result, message: message }
}
