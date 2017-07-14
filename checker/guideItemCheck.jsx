// PathItem からガイドを津ェックする
// モジュールパターンを使ったクロージャなので結果を蓄積出来る
// usage:
//          for(var i=0; i<pathItems.length; i++) { guideItemCheck.process( pathItems[i] ) }
//          guideItemCheck.result()

var guideItemCheck = (function() {
  var message = []
  var result = false

  return {
    process: function(item) {
      if (item != null) {
        if (item.guides && !item.layer.locked) {
          message.push('ガイドがあるレイヤー名 : ' + item.layer.name)
        }
      }
    },
    result: function() {
      if (message.length == 0) {
        message[0] = 'ガイドはありません'
        result = true
      }
      return { result: result, message: message }
    },
  }
})()
