// PathItem からガイドを津ェックする
// モジュールパターンを使ったクロージャなので結果を蓄積出来る
// usage:
//          for(var i=0; i<pathItems.length; i++) { isolatedItemCheck.process( pathItems[i] ) }
//          isolatedItemCheck.result()

var isolatedItemCheck = (function() {
  var message = []
  var result = false

  return {
    process: function(item) {
      if (item != null) {
        if (item.typename == 'PathItem' && item.pathPoints.length < 2) {
          message.push('孤立点があるレイヤー名 : ' + item.layer.name)
        }
      }
    },
    result: function() {
      if (message.length == 0) {
        message[0] = '孤立点はありません'
        result = true
      }
      return { result: result, message: message }
    },
  }
})()
