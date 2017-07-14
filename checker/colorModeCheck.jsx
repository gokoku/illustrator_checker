//
// カラーモードの取得
//    result: boolean (successのとき true)
//    message: テキスト配列
//

function colorModeCheck() {
  var doc = app.activeDocument
  var result = false
  var message = []

  var regRGB = new RegExp("RGB")
  var regCMYK = new RegExp("CMYK")

  if (regRGB.exec(doc.documentColorSpace) != null) {
    message[0] = "RGBです　※ CMYK にしてください"
  }
  if (regCMYK.exec(doc.documentColorSpace) != null) {
    message[0] = "CMYKです"
    result = true
  }
  return {result: result, message: message}
}
