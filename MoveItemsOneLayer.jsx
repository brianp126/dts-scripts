/*
MoveItemsOneLayer.jsx
Author: Brian Pifer, www.designtimesolutions.com
Two scripts, one to move selected items down a layer in Adobe InDesign, the other to move them up a layer. Save as two separate scripts. 
*/

//move down a layer
var sel = app.selection;
var doc = app.activeDocument;
for (var i = 0; i < sel.length; i++) {
    try {
        sel[i].move(doc.layers.nextItem(sel[i].itemLayer));
    } catch(e) {}
}

//move up a layer
var sel = app.selection;
var doc = app.activeDocument;
for (var i = 0; i < sel.length; i++) {
    try {
        sel[i].move(doc.layers.previousItem(sel[i].itemLayer));
    } catch(e) {}
}
