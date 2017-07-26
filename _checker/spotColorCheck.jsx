// 特色オブジェクトがあるか調べる
//  colorType が SPOT のもの
//
//    result: boolean (successのとき true)
//    message: テキスト配列

function spotColorCheck() {
  var doc = app.activeDocument
  var spots = doc.spots
  var result = false
  var message = []

  for (i = 0; i < spots.length; i++) {
    if (spots[i].colorType == ColorModel.SPOT) {
      message.push("特色オブジェクト名 : " + spots[i].name)
    }
  }

  if (message.length == 0) {
    message[0] = "特色オブジェクトはありません"
    result = true
  }
  return {result: result, message: message}
}
