
// ucs-2 string to base64 encoded ascii
function utoa(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}
// base64 encoded ascii to ucs-2 string
function atou(str) {
    return decodeURIComponent(escape(window.atob(str)));
}









//var string = "This is my compression test.";
//alert("Size of sample is: " + string.length);
//var compressed = LZString.compress(string);
//alert("Size of compressed sample is: " + compressed.length);
//string = LZString.decompress(compressed);
//alert("Sample is: " + string);


	
	 function create(){
	 var redirect_path = window.location.pathname;
	 //var product = window.btoa(document.getElementById("new_viral").value);
	 //var product = LZString.compress(document.getElementById("new_viral").value);
	var product = document.getElementById("new_viral").value;
	var product = LZString.compress(product);
	window.location=redirect_path+"?"+utoa(product);
	// window.location=redirect_path+"?"+window.btoa(product);
	 
	 }
	 function start(){
	 var counter = 1;
	 var subjectmatter = window.location.search;
	 var window_url=window.location;
	 var subject = subjectmatter.substr(1);
	 if(subject==""){
	 var subject="Welcome to somethingViral.tk";
	 
	
	 }else{
	 //var subject = window.atob(decodeURIComponent(subject));
	
	 var subject = atou(decodeURIComponent(subject));	
	 var subject = LZString.decompress(subject)	
	 }
	 document.getElementById("new_viral").value = subject;
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
	 
