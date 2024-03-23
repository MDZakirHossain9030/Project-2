// myDetails
try{
document.querySelector(".myDetails").addEventListener("click",function(){
	document.querySelector(".myDetails").innerHTML="Hi! I am Zakir Hossain, \
	I am a Student of RS Degree College in Kishoregonj and Web Developer & Freelancher."
})
}catch(err){
	console.log(err)
}

try{
	document.querySelector(".myDetails").addEventListener("click",function(){
		document.querySelector(".myDetails").innerHTML="Hi! I am Zakir Hossain, \
		I am a Student of RS Degree College in Kishoregonj and Web Developer & Freelancher."
	})
	}catch(err){
		console.log(err)
	}

// about paragraph

try{
document.querySelector(".content").addEventListener("click",function(){
	document.querySelector(".paragraph").innerHTML="Paragraphs are the \
	building blocks of papers. Many students define paragraphs in terms \
	of length: a paragraph is a group of at least five sentences,\
	a paragraph is half a page long, etc."
})
}catch(err){
	console.log(err)
}




//light
try{
	function lightOn(){
	document.getElementById("lightImg").src="girl2-270-170.jpg"
}
function lightOff(){
	document.getElementById("lightImg").src="girl1-270-170.jpg"
}
}catch(err){
	console.log(err)
}

//students CV


function Students(name, age, subject){
	this.Name = name;
	this.Age = age;
	this.Subject = subject;
	
	this.display = function(){
		
		document.getElementById("zakir").innerHTML=("Name= " + this.Name +"<br>"+"Age="+ this.Age +"<br>"+"Subject="+" "+ this. Subject)
		document.getElementById("belal").innerHTML=("Name= " + this.Name +"<br>"+"Age="+ this.Age +"<br>"+"Subject="+" "+ this. Subject)
		//console.log(this.Age)
		//console.log(this.Subject)
	}
}
var student1 =new Students("MD Zakir Hossain", 25, ["Bangla", "Math", "Engligh"])
var student2 =new Students("MD Belal Ahmed", 27, ["Bangla", "Math", "Engligh"])
student1.display()
student2.display()

document.getElementById("studentCV").addEventListener("click",function(){
	document.getElementById("zakir").style.display="block"
	document.getElementById("belal").style.display="block"
})






