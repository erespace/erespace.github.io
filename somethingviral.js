













	
	 function create(){
	 var redirect_path = window.location.pathname;
	 window.location=redirect_path+"?"+window.btoa(document.getElementById("new_viral").value);
	 
	 }
	 function start(){
	 var counter = 1;
	 var subjectmatter = window.location.search;
	 var window_url=window.location;
	 var subject = subjectmatter.substr(1);
	 if(subject==""){
	 var subject="Welcome to somethingViral.tk";
	 
	
	 }else{
	 
	 
	 
	 var subject = window.atob(decodeURIComponent(subject));
	 }
	 document.getElementById("subject").innerHTML=subject;
	 document.getElementById("subjectimage").src=subject;
	 		 
	 document.title="somethingViral - "+subject;
	 show_mili("disqus_thread");
	 if(counter>5){
	 var counter = 1;
	 }else{
	 var counter = counter +1;
	 }
	 //store_value("counterviralcount", counter);
	 



	 }
	 function close_image(){
	 document.getElementById("subjectimage").style.display="none";
	 
	 }

	 function show_mili(z){
	 myVar = setTimeout(show, 3000);
	 }
	 
	 function show(){

	 document.getElementById("addthis").style.display="";
	 
	 }
	 
