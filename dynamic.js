function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  console.log(xhr);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200")
    {
    callback(xhr.responseText);
  }

}
xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  proof(data.carrier);
  education(data.education);
  skills(data.skills);
})
var main=document.querySelector('.main');
var left=document.querySelector('.left');
var right=document.querySelector('.right');
function profile(pro){
var image=document.createElement('img');
image.src=pro.img;
left.appendChild(image);
main.appendChild(left);
var hrline=document.createElement('hr');
left.append(hrline);
var name=document.createElement('h2');
name.textContent=pro.name;
left.appendChild(name);
main.appendChild(left);
}
function proof(proo){
  var info=document.createElement('h2');
  info.textContent=proo.info;
  right.append(info);
  main.append(right);
}
function education(edu)
{
var h2=document.createElement('h2');
h2.textContent="Educational details";
right.appendChild(h2);
var hr=document.createElement('hr');
right.append(hr);
var table=document.createElement('table');
let row='';
row+="<tr>"+"<th>"+"sno"+"</th>"+"<th>"+"degree"
+"</th>"+"<th>"+"institute"
+"</th>"+"<th>"+"passing of year"
+"</th>"+"</tr>"
for(i in edu){
row +="<tr>"+"<td>"+edu[i].sno+"</td>"+
"<td>"+edu[i].degree+"</td>"
+"<td>"+edu[i].institute+"</td>"+
"<td>"+edu[i].year+"</td>"+"</tr>";
}
table.innerHTML=row;
right.append(table);
main.append(right);
}
 function skills(l){
 var h=document.createElement('h2');
 h.textContent="skills";
 right.append(h);
 var ul=document.createElement("ul");
 right.append(ul);
 for(i in l)
 {
 var li=document.createElement('li');
 li.textContent=l[i].info;
 ul.append(li);
 }
 }
