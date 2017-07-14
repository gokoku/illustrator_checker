//
// ScriptUI でバネル表示する
// 引数 : Windowオブジェクト
//       パネルの大きさ配列[x1,y1,x2,y2]
//       パネルのタイトル
//       データ取得関数
// 戻り値 : Windowオブジェクト

// データ取得関数オブジェクトのインタフェース
//    result: boolean (successのとき true)
//    message: テキスト配列
//

function displayDialog(win, p, title, func) {
  var panel = win.add('panel', p, title)
  panel.add(
    'statictext',
    [p[0] + 5, p[1] + 5, p[0] + 39, p[1] + 15],
    func.result ? 'OK' : 'NG',
  )
  panel.add(
    'dropdownlist',
    [p[0] + 40, p[1] + 5, p[2] - 30, p[1] + 15],
    func.message,
  )
  return win
}
