// PathItem からロックオブジェクトを津ェックする
// モジュールパターンを使ったクロージャなので結果を蓄積出来る
// usage:
//          for(var i=0; i<pathItems.length; i++) { lockedItemCheck.process( pathItems[i] ) }
//          lockedItemCheck.result()

var lockedItemCheck = (function() {
  var message = []
  var result = false

  return {
    process: function(item) {
      if (item != null) {
        if (item.locked) {
          message.push('ロックパスがあるレイヤー名 : ' + item.layer.name)
        }
      }
    },
    result: function() {
      if (message.length == 0) {
        message[0] = 'ロックパスはありません'
        result = true
      }
      return { result: result, message: message }
    },
  }
})()
