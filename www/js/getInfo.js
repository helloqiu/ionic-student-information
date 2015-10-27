function getInfo(){
	var name=document.getElementById("name").value;
	var id=document.getElementById("studentID").value;
	var server=document.getElementById("server").value;
	var debug=document.getElementById("debug");
	var list=document.getElementById("list");
	var indexTag=document.getElementById("index");
	var infoTag=document.getElementById("info");
	var picture=document.getElementById("picture");
	var studentname=document.getElementById("studentname");
	var studentid=document.getElementById("studentid");
	var sex=document.getElementById("sex");
	var socialid=document.getElementById("socialid");
	var college=document.getElementById("college");
	var special=document.getElementById("special");

	xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			var student=JSON.parse(xmlhttp.responseText);
			studentname.innerHTML=student.name;
			studentid.innerHTML=student.studentid;
			sex.innerHTML=student.sex;
			socialid.innerHTML=student.socialid;
			college.innerHTML=student.college;
			special.innerHTML=student.special;
			document.getElementById("infoScreen").style.display="inline";
			list.style.display="none";
			infoTag.className="tab-item active";
			indexTag.className="tab-item";
			picture.src="http://"+server+"/picture/"+student.studentid;
		} 
	}
	xmlhttp.open("POST","http://"+server,true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("studentid="+id+"&name="+name);
}
function index(){
	var indexTag=document.getElementById("index");
	var infoTag=document.getElementById("info");
	var list=document.getElementById("list");
	list.style.display="inline";
	infoTag.className="tab-item";
	indexTag.className="tab-item active";
	document.getElementById("infoScreen").style.display="none";
}