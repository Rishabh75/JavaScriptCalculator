$(document).ready(function(){
	var values;
	var lastTerm='';
	var lastValue;
	var terms='';				//for storing terms on which operation is to be done
	var input=[''];			
	var result;

	$('button').on('click',function(){
		values=$(this).attr('value');
		if(values=='ac'){ 
			
			$('.text').html('0');
			$('.display').html('0');
			terms='';
			input=[''];
			lastTerm="";
			lastTerm='';
		}
		else if(values=='ce'){
			if(lastValue=='+'|| lastValue=='-' || lastValue=='/' || lastValue=='*'){
				input.pop();
			}
			else{ 
				input.push(lastTerm);
				input.pop();

			}
			terms='';
			lastTerm='';
			lastValue=input[input.length-1];
			for(var i=1;i<input.length;i++){
				terms+=input[i];
			}
			$('.text').html(terms);
			$('.display').html('0');
		}
		else if(values=='+'||values=='-'||values=='/'||values=='*'){

			if((result==lastTerm)&&(values=='+'||values=='-'||values=='/'||values=='*') ){
				terms='' + result;
				console.log(terms);
				input.push(result);
				input.push(values);
				lastTerm='';
				lastValue=values;
				terms+=values;
				$('.display').html(values);
				$('.text').html(terms);
			}

			else if(lastValue=='+' || lastValue=='-' || lastValue=='/'||lastValue=='*'){

				$('.text').html(terms+=values);
				$('.display').html('<h3>Syntax Error</h3>');
				input=[''];
				lastTerm='';
				terms='';
				lastValue='';
			}
			else{
				
				input.push(lastTerm);
				input.push(values);
				lastTerm='';
				terms+=values;
				lastValue=values;
				$('.display').html(lastValue);
				$('.text').html(terms);

			}
				
		}	
		else if(values=='='){
				result=0;
				result=eval(terms);
				$('.display').html(result);
				$('.text').html(terms);
				lastValue=values;
				input=[''];
				lastTerm=result;
				terms='';
			
		}
		else {
			 
				terms+=values;
				lastTerm+=values;
				lastValue=values;
				$('.display').html(lastTerm);
				$('.text').html(terms);
			
			
		}


		if(lastTerm.length>10){
			$('.display').html('<h3>Limit Reached</h3>');
			input=[''];
			lastTerm='';
			terms='';
			lastValue='';
		}
	});

});