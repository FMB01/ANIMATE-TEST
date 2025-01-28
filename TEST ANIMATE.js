(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"TEST ANIMATE_atlas_1", frames: [[0,0,399,82],[0,84,292,82]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["TEST ANIMATE_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["TEST ANIMATE_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.posare_tasto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A4rH+IAAv7MAxWAAAIAAP7g");
	this.shape.setTransform(157.95,51);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,315.9,102);


(lib.dipingere_tasto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A28HqIAAvTMAt5AAAIAAPTg");
	this.shape.setTransform(146.925,49);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,293.9,98);


// stage content:
(lib.TESTANIMATE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2];
	// timeline functions:
	this.frame_0 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
		
		/* Clic per andare al fotogramma specificato e interrompere la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e il filmato si interrompe.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		
		this.posare_tasto.addEventListener("click", fl_ClickToGoToAndStopAtFrame_19.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_19()
		{
			this.gotoAndStop(1);
		}
		
		
		/* Clic per andare al fotogramma specificato e interrompere la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e il filmato si interrompe.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		
		this.dipingere_tasto.addEventListener("click", fl_ClickToGoToAndStopAtFrame_20.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_20()
		{
			this.gotoAndStop(2);
		}
	}
	this.frame_1 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
	}
	this.frame_2 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Livello_3
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(855.75,618.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(256.95,626.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(3));

	// Livello_2
	this.dipingere_tasto = new lib.dipingere_tasto();
	this.dipingere_tasto.name = "dipingere_tasto";
	this.dipingere_tasto.setTransform(950.65,642.8,1,1,0,0,0,146.9,49);
	new cjs.ButtonHelper(this.dipingere_tasto, 0, 1, 1);

	this.posare_tasto = new lib.posare_tasto();
	this.posare_tasto.name = "posare_tasto";
	this.posare_tasto.setTransform(329.95,646.8,1,1,0,0,0,158,51);
	new cjs.ButtonHelper(this.posare_tasto, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099CC").ss(1,1,1).p("AaaoHMAt6AAAIAAPTMgt6AAAgEhITgHzMAxXAAAIAAP7MgxXAAAg");
	this.shape.setTransform(634.775,645.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.posare_tasto},{t:this.dipingere_tasto}]}).wait(3));

	// Livello_1
	this.idle00 = new lib.an_Video({'id': 'idle00', 'src':'videos/idle00.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.idle00.name = "idle00";
	this.idle00.setTransform(640,207,3.2,2.4,0,0,0,200,150);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0099CC").ss(1,1,1).p("A7LmZMA2XAAAIAAMzMg2XAAAg");
	this.shape_1.setTransform(345.9,483.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A7KGaIAAszMA2VAAAIAAMzg");
	this.shape_2.setTransform(345.9,483.8);

	this.seq01 = new lib.an_Video({'id': 'seq01', 'src':'videos/seq01.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.seq01.name = "seq01";
	this.seq01.setTransform(640,360,3.2,2.4,0,0,0,200,150);

	this.seq02 = new lib.an_Video({'id': 'seq02', 'src':'videos/seq02.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.seq02.name = "seq02";
	this.seq02.setTransform(640,360,3.2,2.4,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.idle00}]}).to({state:[{t:this.seq01}]},1).to({state:[{t:this.seq02}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(639.9,206.8,641.6999999999999,514.4000000000001);
// library properties:
lib.properties = {
	id: '61BD75AFD50F4431B52135E4D364B2F6',
	width: 1283,
	height: 722,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/TEST ANIMATE_atlas_1.png", id:"TEST ANIMATE_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['61BD75AFD50F4431B52135E4D364B2F6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;