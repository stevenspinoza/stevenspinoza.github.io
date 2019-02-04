$(window).on('load',function(){

//30 FPS to simulate original Flash
TweenMax.ticker.fps(25);

// Set the Blur value in the shadow
let blurNode = $("feGaussianBlur");
TweenMax.set(blurNode, {attr:{'stdDeviation': 20}});

// Set up timelines
let mainTl = new TimelineMax(),
    bounceTl = new TimelineMax({repeat: -1, yoyo:true}),
    bounce2Tl = new TimelineMax({repeat: -1, yoyo:true}),
    flame01Tl = new TimelineMax({repeat: -1, yoyo:true}),
    flame02Tl = new TimelineMax({repeat: -1, yoyo:true}),
    flame01sTl = new TimelineMax({repeat: -1, yoyo:true}),
    flame02sTl = new TimelineMax({repeat: -1, yoyo:true});
    

let flame01 =['#fl11','#fl12','#fl13','#fl14','#fl15','#fl16',],
    flame02 = ['#fl21','#fl22','#fl23','#fl24','#fl25','#fl26'],
    flame01s =['#fl11s','#fl12s','#fl13s','#fl14s','#fl15s','#fl16s',],
    flame02s = ['#fl21s','#fl22s','#fl23s','#fl24s','#fl25s','#fl26s'],
    rocket = ['#sp-logo','#flame-01','#flame-02'];

// Bouncing tween
bounceTl.to(rocket, .1,{y:15, ease: RoughEase.ease, repeat:-1, yoyo:true});
bounce2Tl.to('#shadow', .1,{y:3, ease: RoughEase.ease, repeat:-1, yoyo:true});


//First Flame group tween
$(flame01).each(function(i){ 
    if (i==0) { return true; }   
    flame01Tl.to(flame01[0], 1, { morphSVG: flame01[i].toString(), ease: Power0.easeNone})
});

//2nd Flame group tween
$(flame02).each(function(i){
    if (i==0) { return true; }
    flame02Tl.to(flame02[0], 1, { morphSVG: flame02[i].toString(), ease: Power0.easeNone})
});

//First Flame shadow group tween
$(flame01s).each(function(i){ 
    console.log(flame01s[i]);
    if (i==0) { return true; }   
    flame01sTl.to(flame01s[0], 1, { morphSVG: flame01s[i].toString(), ease: Power0.easeNone})
});

// //2nd Flame shadow group tween
$(flame02s).each(function(i){
    console.log(flame02s[i]);
    if (i==0) { return true; }
    flame02sTl.to(flame02s[0], 1, { morphSVG: flame02s[i].toString(), ease: Power0.easeNone})
});

// Speed up animations altogether
flame01Tl.timeScale(8);
flame02Tl.timeScale(12);
flame01sTl.timeScale(8);
flame02sTl.timeScale(12);


// Title List to fade in
let titleList = $('.title-list *').toArray();

//Run intro from main timeline
mainTl.from('.rocket', 5, {opacity:0},1)
.staggerFrom(titleList, 1, {opacity:0},0,-2)
.staggerFrom(titleList, 1, {scale:0, ease:Bounce.easeOut},.5)


});
