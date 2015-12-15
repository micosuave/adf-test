/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         function pageslide(){
         	sym.pageslide({ direction: 'left', href: '_secondary.html' })
          };
         window.pageslide('left','_secondary.html')

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R1}", "click", function(sym, e) {
         
         
         var mySymbolObject = sym.getSymbol("Rbox");
         
         
         var Rnumber = sym.getSymbolElement("RnumberText");
         // Change the text of an element
         sym.$("Rnumber").html("R1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R1}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.$("R1").draggable();
         // Change the text in an element
         sym.getSymbol("R2").getSymbol("SummaryBox").$("SummaryText").html("fmal");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R1}", "dblclick", function(sym, e) {
         // insert code for mouse double click here
         
         // Set a toggle to hide or show an element 
         if (sym.$("R1").is(":visible")) {
         	sym.$("R1").hide();
         } else {
         	sym.$("R1").show();
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

      

      

      

      
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox2}", "mouseenter", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox2}", "mouseleave", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

   })("redbox_1");
   //Edge symbol end:'redbox_1'

   //=========================================================
   
   //Edge symbol: 'Matrix'
   (function(symbolName) {   
      
      
      
      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R9}", "mouseout", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R9}", "mouseover", function(sym, e) {
         // Change the text of an element
         sym.$("RnumberText").html("R1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R9}", "mouseenter", function(sym, e) {
         sym.play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R9}", "mouseleave", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R9}", "touchstart", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R9}", "touchend", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R9}", "swiperight", function(sym, e) {
         // Change the text of an element
         sym.$("SummaryText").html("Summary TEXT");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R9}", "swipeleft", function(sym, e) {
         // Change the text of an element
         sym.$("SummaryText").html("Default");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R7}", "mouseout", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R7}", "mouseenter", function(sym, e) {
         sym.play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R7}", "mouseover", function(sym, e) {
         // Change the text of an element
         sym.$("RnumberText").html("R1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R7}", "touchstart", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R7}", "touchend", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R7}", "swiperight", function(sym, e) {
         // Change the text of an element
         sym.$("SummaryText").html("Summary TEXT");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R7}", "swipeleft", function(sym, e) {
         // Change the text of an element
         sym.$("SummaryText").html("Default");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R5}", "mouseout", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R5}", "mouseenter", function(sym, e) {
         sym.play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R5}", "mouseover", function(sym, e) {
         // Change the text of an element
         sym.$("RnumberText").html("R1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R5}", "touchstart", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R5}", "touchend", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R5}", "swiperight", function(sym, e) {
         // Change the text of an element
         sym.$("SummaryText").html("Summary TEXT");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R5}", "swipeleft", function(sym, e) {
         // Change the text of an element
         sym.$("SummaryText").html("Default");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R3}", "mouseout", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R3}", "mouseenter", function(sym, e) {
         sym.play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R3}", "mouseover", function(sym, e) {
         // Change the text of an element
         sym.$("RnumberText").html("R1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R3}", "touchstart", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R3}", "touchend", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R3}", "swiperight", function(sym, e) {
         // Change the text of an element
         sym.$("SummaryText").html("Summary TEXT");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R3}", "swipeleft", function(sym, e) {
         // Change the text of an element
         sym.$("SummaryText").html("Default");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_2}", "mousedown", function(sym, e) {
         $sym.draggable()

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_redbox_23}", "mousedown", function(sym, e) {
         $sym.draggable()

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R3}", "mousedown", function(sym, e) {
         $sym.draggable()

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_redbox_2}", "mousedown", function(sym, e) {
         $sym.draggable()

      });
      //Edge binding end

   })("Matrix");
   //Edge symbol end:'Matrix'

   //=========================================================
   
   //Edge symbol: 'redbox_2'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "mouseenter", function(sym, e) {
         sym.play();
         
         
         sym.$("Text").html("FuckYeah69" + "Text4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "mouseleave", function(sym, e) {
         sym.playReverse();
         // insert code to be run when the mouse leaves an element
         
         sym.$("Text").html("This is sample text");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "touchstart", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect2}", "touchstart", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect2}", "touchend", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "swipeleft", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "dblclick", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect2}", "mouseenter", function(sym, e) {
         // insert code to be run when the mouse enters an element
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect2}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.playReverse();

      });
      //Edge binding end

      })("whitebluebox_1");
   //Edge symbol end:'whitebluebox_1'

   //=========================================================
   
   //Edge symbol: 'HomeButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Untitled-42}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Untitled-42}", "mouseout", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Untitled-42}", "touchstart", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Untitled-42}", "touchend", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Untitled-42}", "click", function(sym, e) {
         // Create an instance element of a symbol as a child of the
         // given parent element
         var mySymbolObject = sym.createChildSymbol("Symbol_14", "Symbol_1");
         

      });
      //Edge binding end

   })("HomeButton");
   //Edge symbol end:'HomeButton'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "mouseleave", function(sym, e) {
         sym.playReverse();
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("stop");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "mouseenter", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("stop");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.mylionlaw.com", "_blank");
         

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("stop");
         

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R1}", "mouseout", function(sym, e) {
         sym.playReverse();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R1}", "mouseenter", function(sym, e) {
         sym.play();
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R1}", "mouseover", function(sym, e) {
         // Change the text of an element
         sym.$("RnumberText").html("R1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R1}", "touchstart", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R1}", "touchend", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R1}", "swiperight", function(sym, e) {
         // Change the text of an element
         sym.$("SummaryText").html("Summary TEXT");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R1}", "swipeleft", function(sym, e) {
         // Change the text of an element
         sym.$("SummaryText").html("Default");
         

      });
      //Edge binding end

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R1}", "mouseout", function(sym, e) {
         sym.playReverse();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R1}", "mouseenter", function(sym, e) {
         sym.play();
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R1}", "mouseover", function(sym, e) {
         // Change the text of an element
         sym.$("RnumberText").html("R1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R1}", "touchstart", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R1}", "touchend", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R1}", "swiperight", function(sym, e) {
         // Change the text of an element
         sym.$("SummaryText").html("Summary TEXT");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_R1}", "swipeleft", function(sym, e) {
         // Change the text of an element
         sym.$("SummaryText").html("Default");
         

      });
      //Edge binding end

   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'redbox_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // Get the value of a Symbol variable
         var boxstate = sym.getVariable("boxstate");
         // Set the value of a Symbol variable
         sym.setVariable("boxstate", "closed");

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Get the value of a Symbol variable
         var boxstate = sym.getVariable("boxstate");
         // Set the value of a Symbol variable
         sym.setVariable("boxstate", "open");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "mouseleave", function(sym, e) {
         sym.playReverse();
         // Change the text of an element
         sym.$("Text").html("You are not in me.");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "mouseenter", function(sym, e) {
         sym.play();
         // Change the text of an element
         sym.$("Text").html("You are in me");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "click", function(sym, e) {
         
         
         // Show an Element.
         sym.$("SummaryBox").show();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "touchstart", function(sym, e) {
         sym.play();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "touchend", function(sym, e) {
         sym.playReverse();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "swipeleft", function(sym, e) {
         // Change the text of an element
         sym.$("Text").html("I love Ari!");
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "swiperight", function(sym, e) {
         // Change the text of an element
         sym.$("Text").html("I LOVE SHADOW PUPPY!");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "mousedown", function(sym, e) {
         sym.play();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "mouseup", function(sym, e) {
         sym.playReverse();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "dblclick", function(sym, e) {
         // Hide an Element.
         sym.$("SummaryBox").hide();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "mouseleave", function(sym, e) {
         sym.playReverse();
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("stop");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "mouseenter", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("stop");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.mylionlaw.com", "_blank");
         

      });
      //Edge binding end

      })("whitebox_2");
   //Edge symbol end:'whitebox_2'

   //=========================================================
   
   //Edge symbol: 'redbox_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // Get the value of a Symbol variable
         var boxstate = sym.getVariable("boxstate");
         // Set the value of a Symbol variable
         sym.setVariable("boxstate", "closed");

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Get the value of a Symbol variable
         var boxstate = sym.getVariable("boxstate");
         // Set the value of a Symbol variable
         sym.setVariable("boxstate", "open");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "mouseleave", function(sym, e) {
         sym.playReverse();
         // Change the text of an element
         sym.$("Text").html("You are not in me.");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "mouseenter", function(sym, e) {
         sym.play();
         // Change the text of an element
         sym.$("Text").html("You are in me");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "click", function(sym, e) {
         
         
         // Show an Element.
         sym.$("SummaryBox").show();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "touchstart", function(sym, e) {
         sym.play();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "touchend", function(sym, e) {
         sym.playReverse();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "swipeleft", function(sym, e) {
         // Change the text of an element
         sym.$("Text").html("I love Ari!");
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "swiperight", function(sym, e) {
         // Change the text of an element
         sym.$("Text").html("I LOVE SHADOW PUPPY!");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "mousedown", function(sym, e) {
         sym.play();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "mouseup", function(sym, e) {
         sym.playReverse();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "dblclick", function(sym, e) {
         // Hide an Element.
         sym.$("SummaryBox").hide();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "mouseleave", function(sym, e) {
         sym.playReverse();
         // Stop the timeline at a label or specific time. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("stop");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "mouseenter", function(sym, e) {
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("stop");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.mylionlaw.com", "_blank");
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         
      });
      //Edge binding end

      })("greenbox_1");
   //Edge symbol end:'greenbox_1'

   //=========================================================
   
   //Edge symbol: 'greenbox_2'
   (function(symbolName) {   
   
      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "click", function(sym, e) {
         
         sym.$("GreyBox").show();

      });
         //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "mousedown", function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("GreyBox");
         
         var myVariable = sym.getVariable("boxstate");
         if(mySymbolObject.myVariable("boxstate")=="open"){
         		mySymbolObject.playReverse();
         	}else{
         		mySymbolObject.play();
         	};
         
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "mouseup", function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "dblclick", function(sym, e) {
         // Hide an Element.
         sym.$("GreyBox").hide();
         

      });
         //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GreyBox}", "mouseenter", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GreyBox}", "mouseleave", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "touchstart", function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("GreyBox");
         
         var myVariable = sym.getVariable("boxstate");
         if(mySymbolObject.myVariable("boxstate")=="open"){
         		mySymbolObject.playReverse();
         	}else{
         		mySymbolObject.play();
         	};
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "touchend", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      })("graybox_1");
   //Edge symbol end:'graybox_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_4'
   (function(symbolName) {   
   
   })("Symbol_4");
   //Edge symbol end:'Symbol_4'

   //=========================================================
   
   //Edge symbol: 'SummaryBox'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "touchstart", function(sym, e) {
         sym.play();
      
      
      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "touchend", function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "swipeleft", function(sym, e) {
         sym.playReverse();
         
         sym.$("SummaryText").html("I love Ari!");
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "swiperight", function(sym, e) {
         sym.play();
         
         sym.$("SummaryText").html("I LOVE SHADOW PUPPY!");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "click", function(sym, e) {
         if( sym.getVariable("boxstate")=="open" ){
         		sym.playReverse();
         	}else{
         		sym.play();
         	};
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.mylionlaw.com", "_blank");
      
      
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1026, function(sym, e) {
         sym.setVariable("boxstate", "open");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         sym.setVariable("boxstate", "closed");

      });
      //Edge binding end

   })("SummaryBoxRed");
   //Edge symbol end:'SummaryBoxRed'

   //=========================================================
   
   //Edge symbol: 'RBox'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "click", function(sym, e) {
         sym.$("SummaryBox2").show();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "mousedown", function(sym, e) {
         if( sym.getVariable("boxstate")=="open" ){
         		sym.playReverse();
         	}else{
         		sym.play();
         	};
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "mouseup", function(sym, e) {
         sym.stop();
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "dblclick", function(sym, e) {
         // Hide an Element.
         sym.$("SummaryBox2").hide();
         

      });
         //Edge binding end

   })("RBox");
   //Edge symbol end:'RBox'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'RBox'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "click", function(sym, e) {
         sym.$("SummaryBox2").show();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "mousedown", function(sym, e) {
         var mylocal = sym.getSymbol("SummaryBox2");
         // Get the value of a Symbol variable
         var mylocalvar = sym.getVariable("boxstate");
         
         if( sym.getVariable("boxstate")=="open" ){
         		sym.playReverse();
         	}else{
         		sym.play();
         	};
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "mouseup", function(sym, e) {
         sym.stop();
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "dblclick", function(sym, e) {
         // Hide an Element.
         sym.$("SummaryBox2").hide();
         

      });
         //Edge binding end

   })("RBox_1");
   //Edge symbol end:'RBox_1'

   //=========================================================
   
   //Edge symbol: 'HAAG-Box-Template'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "mouseenter", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "mouseleave", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "mousedown", function(sym, e) {
         var mySymbolObject = sym.getSymbol("SummaryBox");
         mySymbolObject.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "mouseup", function(sym, e) {
         var mySymbolObject = sym.getSymbol("SummaryBox");
         mySymbolObject.stop();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "dblclick", function(sym, e) {
         // Hide an Element.
         sym.$("SummaryBox").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "click", function(sym, e) {
         // Show an Element.
         sym.$("SummaryBox").show();
         sym.$('DateText').html(('href="_secondary.html" class="first"'));
         
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.pageslide({ direction: 'left', href: '_secondary.html' }); 

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "touchstart", function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("SummaryBox");
         mySymbolObject.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "touchend", function(sym, e) {
         var mySymbolObject = sym.getSymbol("SummaryBox");
         mySymbolObject.stop();
         
         
         // Change the text of an element
         sym.$("DateText").html('href="_secondary.html" class="first">');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "dblclick", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "mouseover", function(sym, e) {
         sym.$("SummaryBox").draggable();

      });
      //Edge binding end

   })("HAAG-Box-Template");
   //Edge symbol end:'HAAG-Box-Template'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'SummaryBox'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "touchstart", function(sym, e) {
         sym.play();
      
      
      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "touchend", function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "swipeleft", function(sym, e) {
         sym.playReverse();
         
         sym.$("SummaryText").html("I love Ari!");
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "swiperight", function(sym, e) {
         sym.play();
         
         sym.$("SummaryText").html("I LOVE SHADOW PUPPY!");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "click", function(sym, e) {
         if( sym.getVariable("boxstate")=="open" ){
         		sym.playReverse();
         	}else{
         		sym.play();
         	};
         

      });
         //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1026, function(sym, e) {
         sym.setVariable("boxstate", "open");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         sym.setVariable("boxstate", "closed");

      });
      //Edge binding end

   })("SummaryBox_1");
   //Edge symbol end:'SummaryBox_1'

   //=========================================================
   
   //Edge symbol: 'BlueLion'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "click", function(sym, e) {
         
         window.open("http://www.mylionlaw.com", "_blank");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "mouseenter", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "mouseleave", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

   })("BlueLion");
   //Edge symbol end:'BlueLion'

   //=========================================================
   
   //Edge symbol: 'HAAG-Box-Template_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "mousedown", function(sym, e) {
         var mySymbolObject = sym.getSymbol("SummaryBox_1_1");
         
         var myVariable = sym.getVariable("boxstate");
         
         if(mySymbolObject.myVariable("boxstate")=="open"){
         	mySymbolObject.playReverse();
         	}else{
         	mySymbolObject.play();
         };

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "mouseup", function(sym, e) {
         var mySymbolObject = sym.getSymbol("SummaryBox_1_1");
         mySymbolObject.stop();
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "dblclick", function(sym, e) {
         // Hide an Element.
         sym.$("SummaryBox_1_1").hide();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "click", function(sym, e) {
         // Show an Element.
         sym.$("SummaryBox_1_1").show();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "touchstart", function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("SummaryBox_1_1");
         mySymbolObject.play();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "touchend", function(sym, e) {
         var mySymbolObject = sym.getSymbol("SummaryBox_1_1");
         mySymbolObject.stop();
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox_1_1}", "mouseenter", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox_1_1}", "mouseleave", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      })("HAAG-Box-Template_1");
   //Edge symbol end:'HAAG-Box-Template_1'

   //=========================================================
   
   //Edge symbol: 'SummaryBox_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         sym.setVariable("boxstate", "closed");

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1026, function(sym, e) {
         sym.setVariable("boxstate", "open");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "touchstart", function(sym, e) {
         sym.play();
      
      
      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "touchend", function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "swipeleft", function(sym, e) {
         sym.playReverse();
         
         sym.$("SummaryText").html("I love Ari!");
         
         

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "swiperight", function(sym, e) {
         sym.play();
         
         sym.$("SummaryText").html("I LOVE SHADOW PUPPY!");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "click", function(sym, e) {
         if( sym.getVariable("boxstate")=="open" ){
         		sym.playReverse();
         	}else{
         		sym.play();
         	};
         

      });
            //Edge binding end

      })("SummaryBoxBlue");
   //Edge symbol end:'SummaryBoxBlue'

   //=========================================================
   
   //Edge symbol: 'BlueLion'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "click", function(sym, e) {
         
         window.open("http://www.mylionlaw.com", "_blank");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "mouseenter", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "mouseleave", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

   })("BlueLion_1");
   //Edge symbol end:'BlueLion_1'

   //=========================================================
   
   //Edge symbol: 'HAAG-Box-Template_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "mousedown", function(sym, e) {
         var mySymbolObject = sym.getSymbol("SummaryBox");
         mySymbolObject.play();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "mouseup", function(sym, e) {
         var mySymbolObject = sym.getSymbol("SummaryBox");
         mySymbolObject.stop();
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "dblclick", function(sym, e) {
         // Hide an Element.
         sym.$("SummaryBox").hide();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "click", function(sym, e) {
         // Show an Element.
         sym.$("SummaryBox").show();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "touchstart", function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("SummaryBox");
         mySymbolObject.play();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "touchend", function(sym, e) {
         var mySymbolObject = sym.getSymbol("SummaryBox");
         mySymbolObject.stop();
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox_1_1}", "mouseenter", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox_1_1}", "mouseleave", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      })("HAAG-Box-Template_2");
   //Edge symbol end:'HAAG-Box-Template_2'

   //=========================================================
   
   //Edge symbol: 'HAAG-Box-Template_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "mousedown", function(sym, e) {
         var mySymbolObject = sym.getSymbol("SummaryBox_1_2");
         // Get the value of a Symbol variable
         var myVariable = sym.getVariable("boxstate");
         
         if( mySymbolObject.myVariable("boxstate")=="open" ){
         		mySymbolObject.playReverse();
         	}else{
         		mySymbolObject.play();
         	};

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "mouseup", function(sym, e) {
         var mySymbolObject = sym.getSymbol("SummaryBox_1_2");
         mySymbolObject.stop();
         
         

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "dblclick", function(sym, e) {
         
         sym.$("SummaryBox_1_2").hide();
         

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "click", function(sym, e) {
         
         sym.$("SummaryBox_1_2").show();
         

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "touchstart", function(sym, e) {
         
         var mySymbolObject = sym.getSymbol("SummaryBox_1_2");
         mySymbolObject.play();
         

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RBox}", "touchend", function(sym, e) {
         var mySymbolObject = sym.getSymbol("SummaryBox_1_2");
         mySymbolObject.stop();
         
         

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox_1_2}", "mouseenter", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox_1_2}", "mouseleave", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

         })("HAAG-Box-Template_2_1");
   //Edge symbol end:'HAAG-Box-Template_2_1'

   //=========================================================
   
   //Edge symbol: 'SummaryBox_1_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         sym.setVariable("boxstate", "closed");

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1026, function(sym, e) {
         sym.setVariable("boxstate", "open");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "touchstart", function(sym, e) {
         sym.play();
      
      
      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "touchend", function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "swipeleft", function(sym, e) {
         sym.playReverse();
         
         sym.$("SummaryText").html("I love Ari!");
         
         

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "swiperight", function(sym, e) {
         sym.play();
         
         sym.$("SummaryText").html("I LOVE SHADOW PUPPY!");

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "click", function(sym, e) {
         if( sym.getVariable("boxstate")=="open" ){
         		sym.playReverse();
         	}else{
         		sym.play();
         	};
         

      });
               //Edge binding end

         })("SummaryBox_1_2");
   //Edge symbol end:'SummaryBox_1_2'

   //=========================================================
   
   //Edge symbol: 'BlueLion'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "click", function(sym, e) {
         
         window.open("http://www.mylionlaw.com", "_blank");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "mouseenter", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BlueLion}", "mouseleave", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

   })("BlueLion_1_1");
   //Edge symbol end:'BlueLion_1_1'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'RBox'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "click", function(sym, e) {
         sym.$("SummaryBox2").show();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "mousedown", function(sym, e) {
         if( sym.getVariable("boxstate")=="open" ){
         		sym.playReverse();
         	}else{
         		sym.play();
         	};
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "mouseup", function(sym, e) {
         sym.stop();
         
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RnumberBox}", "dblclick", function(sym, e) {
         // Hide an Element.
         sym.$("SummaryBox2").hide();
         

      });
         //Edge binding end

   })("RBox_1_1");
   //Edge symbol end:'RBox_1_1'

   //=========================================================
   
   //Edge symbol: 'GreyBox'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "touchstart", function(sym, e) {
         if( sym.getVariable("boxstate")=="open" ){
         		sym.playReverse();
         	}else{
         		sym.play();
         	};
         

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "touchend", function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "swipeleft", function(sym, e) {
         // Change the text of an element
         sym.$("Text").html("I love Ari!");
         
         

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "swiperight", function(sym, e) {
         // Change the text of an element
         sym.$("Text").html("I LOVE SHADOW PUPPY!");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SummaryBox}", "click", function(sym, e) {
         if( sym.getVariable("boxstate")=="open" ){
         		sym.playReverse();
         	}else{
         		sym.play();
         	};
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1013, function(sym, e) {
         
         var boxstate = sym.getVariable("boxstate");
         
         sym.setVariable("boxstate", "open");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         var boxstate = sym.getVariable("boxstate");
         
         sym.setVariable("boxstate", "close");

      });
      //Edge binding end

   })("GreyBox");
   //Edge symbol end:'GreyBox'

})(jQuery, AdobeEdge, "EDGE-52552074");