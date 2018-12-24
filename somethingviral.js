
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
	 //var product =   document.getElementById("new_viral").value);
	 //var product = LZString.compress(document.getElementById("new_viral").value);
	var product = document.getElementById("subject_viral").value+"***"+document.getElementById("new_viral").value+"***"+document.getElementById("new_viral2").value;
	//var product = .compress(product);
	//window.location=redirect_path+"?"+utoa(product);
	window.location=redirect_path+"?"+window.btoa(product);
	 	//window.location=redirect_path+"?"+utoa(LZString.compress(window.btoa(product)));
	 }
	 function start(){
	 var counter = 1;
	 var subjectmatter = window.location.search;
	 var window_url=window.location;
	 var subject = subjectmatter.substr(1);
	 if(subject==""){
	 var subject="Which option do you prefer?***A***B";


	 }else{
	 var subject_i = subject;	
	 var subject = window.atob(decodeURIComponent(subject));
	//var subject = LZString.decompress(atou(window.atob(decodeURIComponent(subject))));
	 //var subject = atou(decodeURIComponent(subject));	
	 //var subject = LZString.decompress(subject)	

document.getElementById("insync").src = "http://erespace.p4o.net/put.php?key="+subject_i+"";
	 }



	 entryArray = subject.split("***");
	
	document.getElementById("subject_viral").value=entryArray[0];
	document.getElementById("subjectviral").innerHTML=entryArray[0];
	
	 document.getElementById("new_viral").value = entryArray[1];
	 document.getElementById("new_viral2").value = entryArray[2];

	 document.getElementById("subjectimage1").src=entryArray[1];
	 document.getElementById("subjectimage2").src=entryArray[2];
	  document.getElementById("subject1").innerHTML=entryArray[1];
	 document.getElementById("subject2").innerHTML=entryArray[2];

	 var product = document.getElementById("subject_viral").value+"***"+document.getElementById("new_viral").value+"***"+document.getElementById("new_viral2").value;

//<![CDATA[
//var fb = document.createElement('fb:like'); 
//fb.setAttribute("site","one.html"+subjectmatter); 
 
 
 
// fb.setAttribute("action","like"); 
 //fb.setAttribute("layout","button_count");
 //fb.setAttribute("show_faces","false");
 //fb.setAttribute("width","100");
//fb.setAttribute("font","arial");
//document.getElementById("FaceBookLikeButton").appendChild(fb);
//]]>
//FB.XFBML.parse();	 

		 //alert (window.btoa(product));
		 
		   ///document.getElementById("googlebutton1").href= "http://somethingviral.tk/one.html?"+window.btoa(product+"***a")+"&A=A";
 document.getElementById("facebookbutton1").src = "https://www.facebook.com/plugins/like.php?href=http://100pound.tk/one.html?"+window.btoa(product+"***a")+"&A=A&amp;layout=button_count&amp;show_faces=false&amp;width=240&amp;action=like&amp;font=verdana&amp;colorscheme=light";	 

		///document.getElementById("googlebutton1").href="http://somethingviral.tk/one.html?"+window.btoa(product+"***a")+"&A=A";
		 // var fbz = document.createElement('fb:like'); 
 //fbz.setAttribute("site","two.html"+subjectmatter);  
 //fbz.setAttribute("action","like"); 
 //fbz.setAttribute("layout","button_count");
 //fbz.setAttribute("show_faces","false");
 //fbz.setAttribute("width","100");
 //fbz.setAttribute("font","arial");
 //document.getElementById("FaceBookLikeButton2").appendChild(fbz);
// document.getElementById("googlebutton2").href= "=http://somethingviral.tk/two.html?"+window.btoa(product+"***b")+"&B=B";
document.getElementById("facebookbutton2").src = "https://www.facebook.com/plugins/like.php?href=http://100pound.tk/two.html?"+window.btoa(product+"***b")+"&B=B&amp;layout=button_count&amp;show_faces=false&amp;width=240&amp;action=like&amp;font=verdana&amp;colorscheme=light";	 
		 //document.getElementById("googlebutton2").href="http://somethingviral.tk/two.html?"+window.btoa(product+"***b")+"&B=B";
//FB.XFBML.parse();	 

	 document.title="somethingViral - "+entryArray[0];
	 show_mili("disqus_thread");
	// if(counter>5){
	// var counter = 1;
	// }else{
	// var counter = counter +1;
	// }
	 //store_value("counterviralcount", counter);

//alert (window.location.pathname);



	 }
	 function close_image1(){
	 document.getElementById("subjectimage1").style.display="none";

	 // document.getElementById("subject1").style.display="";

	   //document.getElementById("logo").style.display="none";
	 }

	 	 function close_image2(){

	  document.getElementById("subjectimage2").style.display="none";

	 // document.getElementById("subject2").style.display="";
	   //document.getElementById("logo").style.display="none";
	 }
	 	 function close_subject1(){



	 	 		 // document.getElementById("logo").style.display="";
	document.getElementById("subject1").style.display="none";

	 }

 function close_subject2(){



	 	 		 // document.getElementById("logo").style.display="";
	 document.getElementById("subject2").style.display="none";

	 }

	 function show_mili(z){
	 myVar = setTimeout(show, 3000);
	 }

	 function show(){

	 //document.getElementById("addthis").style.display="";

	 }
