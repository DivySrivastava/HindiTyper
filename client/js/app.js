 $(document).ready(function (){ 
	$("#levels .btn").click(function (){
		$("#levels .btn").removeClass('active');
		$(this).addClass('active');
		var level	=	$(this).val();
		$("#level").val(level); 
		$('#chng-chpter').val('1');
		switch(level){
			case 'easy'   : initiate_easy();    
			break;
			case 'normal' : initiate_normal(); 
			break;
			case 'hard'   : initiate_hard();   
			break; 
		}
		
	})
	
	var con_time=	$('#consume_time').val(); 
	initiate_easy	=	function (){ $('#dictate').html(generat_matter(easy_lessions.lession1)); }  
	initiate_normal	=	function (){ $('#dictate').html(generat_matter(normal_lessions.lession1));  }  
	initiate_hard	=	function (){ $('#dictate').html(generat_matter(hard_lessions.lession1)); } 
	  
	$('#start_btn').click(function(){ 
		$("#timer").html('<span id="minute"></span><span class="colon">:</span><span id="second"></span>');
		var time	=	$("#time").val();
		var start 	=	setInterval(function () {
			if(time <=1){
				clearInterval(start); 
				$("#timer").html('<span id="timeout">Time Out</span>');
				generate_result();
			}
			var minute	=	Math.floor((time)/60);
			var second  =	(time)%60;
			$("#minute").text( (minute < 10) ? "0"+minute : minute  );
			$("#second").text( (second < 10) ? "0"+second : second  );
			time--;
			show_currentspeed();
		}, 1000);
		$("#editor").focus();
	})
	$('#editor').keyup(function(e){
		//if(e.which==32)  
		var txt		=	$("#editor").text();
		var words 	= 	txt.split(" "); 
		var id = 1;
		$('#dictate span').removeClass('aab');
		$.each(words, function(i, v) {
			currnt		= i+1;	nxt= currnt+1;
			act_word 	= $('#word_'+currnt).text();
			v 		 	= v.trim();
			console.log(v+'=='+act_word)
			if(v == act_word) {  
				$('#word_'+currnt).addClass('sahi').removeClass('galat');
			} else{
				$('#word_'+currnt).addClass('galat').removeClass('sahi');;
			}
		});	
		 
		//$('#word_'+nxt).addClass('aab');
		
	}) 
	generate_result	=	function (){
		var time	=	$("#time").val();
		var words   = $("#dictate").text().split(" ");
		var mywords = $("#editor").text().split(" ");
		len			= words.length;
		mylen		= mywords.length; 
		console.log(len);
		console.log(mylen);
		var speed = (mylen)/(time/60);
		//alert("Your speed is "+speed);
		var wrong =	$('.galat').length;
		$('#result_modal').modal({ keyboard: false })
		$('#result_modal').modal('show');
		$("#speedshow").html(speed);
	} 
	changeChapter	=	function (no){
		if(no > 1 && no < 10){
			var lsn = 'lession'+no; 
			var level	=	$("#level").val();  
			switch(level){
				case 'easy'   : $('#dictate').html(generat_matter(easy_lessions[lsn]))   
				break;
				case 'normal' : $('#dictate').html(generat_matter(normal_lessions[lsn]))
				break;
				case 'hard'   : $('#dictate').html(generat_matter(hard_lessions[lsn]))  
				break; 
			}
			
		}
		else{
			console.log('Not a value '+no);
		}
		return; 
	} 
	show_currentspeed = function(){
		var time	=	$("#time").val();
		var mywords = $("#editor").text().split(" ");
		mylen		= mywords.length; 
		var speed = Math.floor((mylen)/(con_time/60));
		$("#currnt_speed").html("Current Speed is: "+speed);
		$('#consume_time').val(con_time++);
		 
	}
 }) 
 
function generat_matter(txt){
	var words = txt.split(" "); 
	var out		=	'';
	var id = 1;
	$.each(words, function(i, v) {
		out += "<span id='word_"+(id++)+"'>" + v + "</span> ";
	});
	return out;
 }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
