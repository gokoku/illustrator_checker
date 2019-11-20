//
// CMYK 300% のオブジェクトを選択します。
//
//

var doc = app.activeDocument
var selected = 0
var items = doc.pathItems

for (i = 0; i <items.length; i++) {
  color = items[i].fillColor

  sum = color.cyan + color.magenta + color.yellow + color.black

  if (sum >= 300) {
    if (items[i].layer.locked == false) {
      items[i].selected = true
      selected++
    }
  }
}

if (selected == 0) {
  alert("CMYK総和 300% の塗りオブジェクトはありませんでした")
} else {
  alert("CMYK総和 300% の塗りオブジェクトを選択しました")
}