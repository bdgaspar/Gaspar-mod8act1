var fullname = prompt("Please enter your full name");
var username = prompt("Please enter your username");

if(confirm("What is your gender? \n Press OK if you are Male \n Cancel if Female")){
	alert("Your profile gender is set to MALE");
	document.getElementById("gender").innerHTML = "M";
}
else{
	alert("Your profile gender is set to FEMALE");
	document.getElementById("gender").innerHTML = "F";
}
var description = prompt("Please type a brief description of yourself");
var birthyear = prompt("Please enter your Birth Year:");
var age = 2023 - parseInt(birthyear);

if(confirm("Do you want to use a custom profile picture?")){
	var pic = prompt("Enter the file name of the picture. (Ex: wow.jpg)");
}
else{
	alert("No image has been set.");
	var pic = "prof.png";
}

document.getElementById("fname").innerHTML = fullname;
document.getElementById("username").innerHTML = username;
document.getElementById("desc").innerHTML = description;
document.getElementById("year").innerHTML = birthyear;
document.getElementById("age").innerHTML = age;
document.getElementById("ppic").src = pic;

