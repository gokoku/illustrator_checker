//
// 入稿チェックスクリプト
// 2017/07/26
//


#include "./_checker/colorModeCheck.jsx"
#include "./_checker/fontCheck.jsx"
#include "./_checker/spotColorCheck.jsx"
#include "./_checker/linkImageCheck.jsx"
#include "./_checker/rasterImageCheck.jsx"
#include "./_checker/displayDialog.jsx"
#include "./_checker/layerCheck.jsx"
#include "./_checker/lockedItemCheck.jsx"
#include "./_checker/guideItemCheck.jsx"
#include "./_checker/isolatedItemCheck.jsx"
#include "./_checker/cmykCheck.jsx"


var win = new Window("dialog", "checker")
displayDialog(win, [10, 10, 370, 70], "カラーモードのチェック", colorModeCheck())
displayDialog(win, [10, 10, 370, 70], "CMYK総数300%チェック", cmykCheck())
displayDialog(win, [10, 10, 370, 70], "フォントデータのチェック", fontCheck())
displayDialog(win, [10, 10, 370, 70], "特色オブジェクトのチェック", spotColorCheck())
displayDialog(win, [10, 10, 370, 70], "リンク画像のチェック", linkImageCheck())
displayDialog(win, [10, 10, 370, 70], "埋め込み画像のチェック", rasterImageCheck())
displayDialog(win, [10, 10, 370, 70], "レイヤーのチェック", layerCheck())

var doc = app.activeDocument
var paths = doc.pageItems
for( var i=0; i<paths.length; i++ ) {
  guideItemCheck.process(paths[i])
  lockedItemCheck.process(paths[i])
  isolatedItemCheck.process(paths[i])
}

displayDialog(win, [10, 10, 370, 70], "ロックバスのチェック", lockedItemCheck.result())
displayDialog(win, [10, 10, 370, 70], "ガイドのチェック", guideItemCheck.result())
displayDialog(win, [10, 10, 370, 70], "孤立点のチェック", isolatedItemCheck.result())

win.add("statictext",[10, 10, 370, 20], "ESC キーを押してください")

win.show()
