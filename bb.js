import {db} from  './firestore.mjs';
import { collection,addDoc, updateDoc,setDoc,doc,onSnapshot,deleteDoc  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
var i=0;
console.log(db);
document.getElementById('btn').addEventListener('click' ,async ()=>{
  // var dd = document.getElementById("taskInput").value=" "
    alert("Your text selected")
    var task = document.getElementById("taskInput").value

try {
   await setDoc(doc(db,"users",`${i++}`), {
    task :task,
  });
  location.reload();
} catch (e) {
  console.error("Error adding document: ", e);
}})


function show(){
  var red=document.getElementById('read');
  onSnapshot(collection(db, "users"), (data) => {
   data.docChanges().forEach(element => {
    console.log(element);
    if (element.type=="removed") {
      document.getElementById(element.doc.id).remove()
    }
   else if(element.type==="added"){

      red.innerHTML+=`
      <div id="${element.doc.id}">
      <p id="name">${element.doc.data().task}</p>
<div><button id="update" onclick="edit(this,'${element.doc.id}')" >Update</button></div>
<div><button  id="delete"  onclick="del('${element.doc.id}')" >Delete</button></div>
</div>

`
}

  });
  });
}
show()


window.del=async(id)=>{
  await deleteDoc(doc(db, "users", id));
  location.reload();
}

window.edit=async(h,id)=>{
  console.log(id);
  location.reload();
  var user=prompt("enter ur value")
h.parentNode.parentNode.childNodes[1].innerHTML=user;
  await updateDoc(doc(db, "users",id), {
    task:user
  });
}


