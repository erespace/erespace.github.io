
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
	var product = document.getElementById("new_viral").value+"***"+document.getElementById("new_viral2").value;
	//var product = LZString.compress(product);
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
	 var subject="Welcome to somethingViral.tk";
	 
	
	 }else{
	 var subject_i = subject;	
	 var subject = window.atob(decodeURIComponent(subject));
	//var subject = LZString.decompress(atou(window.atob(decodeURIComponent(subject))));
	 //var subject = atou(decodeURIComponent(subject));	
	 //var subject = LZString.decompress(subject)	
	 
document.getElementById("insync").src = "http://erespace.p4o.net/put.php?key="+subject_i+"";
	 }
	 
	 
	 
	 entryArray = subject.split("***");
	 document.getElementById("new_viral").value = entryArray[0];
	 document.getElementById("new_viral2").value = entryArray[1];
	 
	 document.getElementById("subjectimage1").src=entryArray[0];
	 document.getElementById("subjectimage2").src=entryArray[1];
	  document.getElementById("subject1").innerHTML=entryArray[0];
	 document.getElementById("subject2").innerHTML=entryArray[1];

	 

//<![CDATA[
 //var fb = document.createElement('fb:like'); 
// fb.setAttribute("site","one.html"+subjectmatter+"); 
 
 
 
 fb.setAttribute("action","like"); 
 fb.setAttribute("layout","button_count");
 fb.setAttribute("show_faces","false");
 fb.setAttribute("width","100");
fb.setAttribute("font","arial");/document.getElementById("FaceBookLikeButton").appendChild(fb);
//]]>
FB.XFBML.parse();	 
//document.getElementById("facebookbutton1").src = "http://www.facebook.com/plugins/like.php?href="+window_url+"&two=1&amp;layout=button_count&amp;show_faces=false&amp;width=90&amp;action=like&amp;font=verdana&amp;colorscheme=light";	 
 document.getElementById("facebookbutton1").src = "http://www.facebook.com/plugins/like.php?href=http://somethingviral.tk/one.html"+subjectmatter+"&amp;layout=button_count&amp;show_faces=false&amp;width=240&amp;action=like&amp;font=verdana&amp;colorscheme=light";	 
  var fbz = document.createElement('fb:like'); 
 fbz.setAttribute("site","one.html"+subjectmatter+");  
 fbz.setAttribute("action","like"); 
 fbz.setAttribute("layout","button_count");
 fbz.setAttribute("show_faces","false");
 fbz.setAttribute("width","100");
 fbz.setAttribute("font","arial");
 document.getElementById("FaceBookLikeButton2").appendChild(fbz);

//document.getElementById("facebookbutton2").src = "http://www.facebook.com/plugins/like.php?href=http://somethingviral.tk/two.php"+subjectmatter+"&amp;layout=button_count&amp;show_faces=false&amp;width=240&amp;action=like&amp;font=verdana&amp;colorscheme=light";	 
FB.XFBML.parse();	 
	 
	 document.getElementById("logo").src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGBSURBVGhD7ZPbEcIwDASpi4Koh2pohmICASf4cSfLhpmDQfsbWdJKymH5cUJATQioCQE1IaAmBNSEgJoQUBMCakJATQio+V+By+nQcrqkry3X8zEF9THSNIwLwM5L2gZG2k8cz9f02GRI4I0pThj4HPwC4y3Ui8AZnlEke/+YvALgcPb58KNyrMHO0t+BTwBULnuj6ynDxsfQXYFLwKq7wdZQBIKgvUOY4DMbQKnbzGwJeaQhAJ/3+/cIuFOTJWShXAC97Z7PyqwAMiA7sAUIruZXpgVQiW6kX8BtMC+ASsAGpzbwxGEx+xOvtFcEI7MuwPeUhNXoKngE+ODq9Cgwj+ECtEg7pRKXAL2iKj0IKwJQmj1g4FJzfALGEuwOyuooycuQGJQzavAK8Alx6tJ4CC/HKQO/wJ0Rh2rz5tOtRSOIWgwJPODHtAGK9dQ3XRr3QYGEfc8A7lA9awOt/3ha4FsIATUhoCYE1ISAmhBQEwJqQkBNCKgJATUhoObHBZblBl4oIqpn+c8EAAAAAElFTkSuQmCC";

	 document.title="somethingViral - "+subject;
	 show_mili("disqus_thread");
	 if(counter>5){
	 var counter = 1;
	 }else{
	 var counter = counter +1;
	 }
	 //store_value("counterviralcount", counter);
	 
//alert (window.location.pathname);
/**
 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables */
/*
var disqus_config = function () {
    this.page.url = window.location.pathname+"/"+subjectmatter;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = window.btoa(subjectmatter); // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = '//http-somethingviral-tk-1.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();


	 }
	 function close_image1(){
	 document.getElementById("subjectimage1").style.display="none";
	  
	  document.getElementById("subject1").style.display="";
	 
	   //document.getElementById("logo").style.display="none";
	 }
	 
	 	 function close_image2(){
	 
	  document.getElementById("subjectimage2").style.display="none";
	  
	  document.getElementById("subject2").style.display="";
	   //document.getElementById("logo").style.display="none";
	 }
	 	 function close_subject(){
	 	 	
	 	 	
	 	 	
	 	 		 // document.getElementById("logo").style.display="";
	 //document.getElementById("subject").style.display="none";
	 
	 }

	 function show_mili(z){
	 myVar = setTimeout(show, 3000);
	 }
	 
	 function show(){

	 document.getElementById("addthis").style.display="";
	 
	 }
	 
