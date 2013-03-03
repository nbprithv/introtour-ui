YUI().use('gallery-introtour-ui','test', function (Y) {
	var tour_cards = [{'title':'Welcome','position':'pagecenter','content':'Welcome to Intro tour plugin.'},
                {'title':'Get Started','content':'Use this plugin to create a walkthrough like this.','divfocus':'readsummary','position':'right','width':'100'},
                {'title':'jQuery plugin','content':'Use the jQuery plugin if you prefer.','divfocus':'jquerypluginusage','position':'top','height':'125'},
                {'title':'YUI3 plugin','content':'Or in YUI3. Whichever you like.','divfocus':'yuipluginusage','position':'bottom','height':'50'},
                {'title':'YUI3 gallery module','content':'Include it only if you want the source or use directly from CDN','divfocus':'yui3code','position':'left','width':'50'},
                {'title':'Thank you!','content':'Try it out and will appreciate any feedback.','position':'pagecenter'}];
	Y.Introtour.init(tour_cards);
	var findpos = function (obj){
		var curleft = curtop = 0;
			if (obj.offsetParent) {
				do {
					curleft += obj.offsetLeft;
					curtop += obj.offsetTop;
				} while (obj = obj.offsetParent);
			}
		return [curleft,curtop];
	};
	var checkpos = new Y.Test.Case({
		name: 'Card Position Test',
		"welcome card position": function() {
			var testtoppos = Y.one('#galleryintrotourui-card-welcome').getStyle('top');
			var testleftpos = Y.one('#galleryintrotourui-card-welcome').getStyle('left');
			Y.Assert.areEqual(testtoppos,"60px",'Top position of welcome card');
			Y.Assert.areEqual(testleftpos,"50%",'Top position of welcome card');
		},
		"Right positioned card": function() {
			var pos = findpos(document.getElementById('hello1'));
			var testtoppos = Y.one('#galleryintrotourui-card-1').getStyle('top').split("px");
			var testleftpos = Y.one('#galleryintrotourui-card-1').getStyle('left').split("px");
			testleftpos = testleftpos[0]-parseInt(tour_cards[1].width);
			Y.Assert.areEqual(pos[1],testtoppos[0],'Top position of right card');
			Y.Assert.areEqual(pos[0],testleftpos,'Left position of right card');
		},
		'Top positioned card': function() {
			var pos = findpos(document.getElementById('hello2'));
			var testtoppos = Y.one('#galleryintrotourui-card-2').getStyle('top').split("px");
			var testleftpos = Y.one('#galleryintrotourui-card-2').getStyle('left').split("px");
			testtoppos = parseInt(testtoppos[0])+parseInt(tour_cards[2].height);
			Y.Assert.areEqual(pos[1],testtoppos,'Top position of top card');
			Y.Assert.areEqual(pos[0],testleftpos[0],'Left position of top card');
		},
		'Bottom positioned card': function() {
			var pos = findpos(document.getElementById('hello3'));
			var testtoppos = Y.one('#galleryintrotourui-card-3').getStyle('top').split("px");
			var testleftpos = Y.one('#galleryintrotourui-card-3').getStyle('left').split("px");
			testtoppos = parseInt(testtoppos[0])-parseInt(tour_cards[3].height);
			Y.Assert.areEqual(pos[1],testtoppos,'Top position of bottom card');
			Y.Assert.areEqual(pos[0],testleftpos[0],'Left position of bottom card');
		},
		'Left positioned card': function() {
			var pos = findpos(document.getElementById('hello4'));
			var testtoppos = Y.one('#galleryintrotourui-card-4').getStyle('top').split("px");
			var testleftpos = Y.one('#galleryintrotourui-card-4').getStyle('left').split("px");
			testleftpos = parseInt(testleftpos[0])+parseInt(tour_cards[4].width)+300;
			Y.Assert.areEqual(pos[1],testtoppos[0],'Top position of left card');
			Y.Assert.areEqual(pos[0],testleftpos,'Left position of left card');
		},
		'Final card position': function() {
			var testtoppos = Y.one('#galleryintrotourui-card-endtour').getStyle('top');
			var testleftpos = Y.one('#galleryintrotourui-card-endtour').getStyle('left');
			Y.Assert.areEqual(testtoppos,"60px",'Top position of final card');
			Y.Assert.areEqual(testleftpos,"50%",'Top position of final card');
		}
	});
	var checknav = new Y.Test.Case({
		'name':'Checking navigation',
		"Welcome card nav":function(){
			var seqid = Y.one("#yui-galleryintrotourui-buttonwelcome-id").getAttribute("data-seqid"); 
			Y.Assert.areEqual("welcome",seqid);
		},
		"Right card nav":function(){
			var seqid = Y.one("#yui-galleryintrotourui-buttonnav-1").getAttribute("data-seqid");
			Y.Assert.areEqual(1,seqid);
		},
		"Top card nav":function(){
			var seqid = Y.one("#yui-galleryintrotourui-buttonnav-2").getAttribute("data-seqid");
			Y.Assert.areEqual(2,seqid);
		},
		"Bottom card nav":function(){
			var seqid = Y.one("#yui-galleryintrotourui-buttonnav-3").getAttribute("data-seqid");
			Y.Assert.areEqual(3,seqid);
		},
		"Left card nav":function(){
			var seqid = Y.one("#yui-galleryintrotourui-buttonnav-").getAttribute("data-seqid");
			Y.Assert.areEqual("end",seqid);
		},
	});


	var TestRunner = Y.Test.Runner;
	TestRunner.add(checkpos);
	TestRunner.add(checknav);
	TestRunner.run();
	
});

