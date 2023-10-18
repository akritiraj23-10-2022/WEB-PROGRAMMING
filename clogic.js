 let screen= document.getElementsById('screen');
 buttons = document.querySelectorAll('button');
 let screenValue='';
 for(item of buttons)
 {
	 item.addEventListener('click',(e)=>{
		 buttonText = e.target.innertext;
		 console.log('Button text is',buttonText);
		 if(buttonText=='X')
		 {
			 buttonText='*';
			 screen.value += buttonText;
			 screen.valude=screenValue;
		 }
		 else if(buttonText=='c'){
			 screen.value= "";
		 }
		 
		 }
		 else
		 
		 
		 
	 })
	 
	 
 }