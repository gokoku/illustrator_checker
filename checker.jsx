//
// 入稿チェックスクリプト
// 2017/07/26
//


#include "./checker/colorModeCheck.jsx"
#include "./checker/fontCheck.jsx"
#include "./checker/spotColorCheck.jsx"
#include "./checker/linkImageCheck.jsx"
#include "./checker/rasterImageCheck.jsx"
#include "./checker/displayDialog.jsx"
#include "./checker/layerCheck.jsx"
#include "./checker/lockedItemCheck.jsx"
#include "./checker/guideItemCheck.jsx"
#include "./checker/isolatedItemCheck.jsx"
#include "./checker/cmykCheck.jsx"


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
