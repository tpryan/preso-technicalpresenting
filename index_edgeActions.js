
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_desktopBrowser_page1}","click",function(sym,e){sym.play('browse');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_desktopBrowser_page2}","click",function(sym,e){sym.play('browse');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-405011069");