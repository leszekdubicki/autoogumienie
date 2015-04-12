//Web design project and web page for autoogumienie company
//Author: Leszek Dubicki (student id: x14125439)*/

jQuery(document).ready(function($){
   $('#cont').pwstabs({
		effect: 'slideleft',
		conteinerHeight: '600px',
		horizontalPosition: 'top',
		verticalPosition: 'left'
   });
   //marquee setup:
	$('.marquee').marquee({
		//speed in milliseconds of the marquee
		duration: 15000,
		//gap in pixels between the tickers
		gap: 50,
		//time in milliseconds before the marquee will start animating
		delayBeforeStart: 0,
		//'left' or 'right'
		direction: 'left',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: true
	});
    //moving boxes setup:
    $('#serv1').click(
        function(){
            //$('#serv1').animate({"top": "10px"},"fast"),
            //$('#serv1').animate({"width": "800px"},"fast"),
            moveServBox(1);
        });
    $('#serv2').click(
        function(){
            //$('#serv1').animate({"top": "10px"},"fast"),
            //$('#serv1').animate({"width": "800px"},"fast"),
            moveServBox(2);
        });
    $('#serv3').click(
        function(){
            //$('#serv1').animate({"top": "10px"},"fast"),
            //$('#serv1').animate({"width": "800px"},"fast"),
            moveServBox(3);
        });
    $('#serv4').click(
        function(){
            //$('#serv1').animate({"top": "10px"},"fast"),
            //$('#serv1').animate({"width": "800px"},"fast"),
            moveServBox(4);
        });
});

