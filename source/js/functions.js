var greetings = [
	"Hi",
	"Morning!",
	"Hey what's up?",
	"heeeeyyyyy, sup?",
	"How's it going?",
	"Howdy!",
	"Well hello.",
	"what's up yo.",
	"Hello sunshine!",
	"Howdy partner!",
	"Hey howdy hi!",
	"What’s kicking bro",
	"Howdy-doody!",
	"I come in peace!",
	"Ahoy!",
	"Sup bro!",
	"Hiya!",
	"How’s it going?",
	"What’s going on?",
	"What’s happening?",
	"Hey, what’s new?",
	"How are you?",
	"What’s shaking?",
	"What’s sizzlin’?",
	"What’s crackin’?",
	"What’s poppin’?",
	"What’s shakin bacon?",
	"Hey there!",
	"What’s up buttercup?",
	"What’s cookin’, good lookin’?",
	"Well hello there!",
	"I'm Batman."
];

var $header = $('.header');
var $header_logo_cont = $('.header__logo-cont');
var $header_bubble = $('#header-bubble');
var $header_bubble_text = $header_bubble.find('span');

function bubble_hello(){
	var greeting_select = Math.floor((Math.random() * greetings.length) + 1)
	$header_bubble_text.text(greetings[greeting_select]);
};


$(document).ready(function(){

	// 3d para el logo
    $header.mousemove(function(ev){
        var x = ev.pageX - $header.position().left;
        var y = ev.pageY - $header.position().top;
        var dx = $header.innerWidth()/2 - x;
        var dy = $header.innerHeight()/2 - y;
        var dxp = dx/($header.innerWidth()/2);
        var dyp = dy/($header.innerHeight()/2);

        var newTransformRotateXY = "rotateY(" + 20*Math.tan(dxp) + "deg) rotateX(" + -20*Math.tan(dyp) + "deg)";

        $header_logo_cont.css({
            '-webkit-transform': newTransformRotateXY
        });
    });

	bubble_hello();

});
