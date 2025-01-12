// import { CreateUser } from "./data/user.js";
// import { allUsers } from "./data/user.js";
// import { CreateUser, allUsers } from "./data/user.js";
// import { allUsers as UIUsers } from "./ui.js";

import { addPost, loadPost, loadPosts, updatePost  } from "./data/Posts.js";
import * as User from "./data/user.js";


const submitNewButton =  document.getElementById("submitNewButton")
const newTitle =  document.getElementById("newTitle")
const newUserId =  document.getElementById("newUserId")
const newBody =  document.getElementById("newBody")


submitNewButton.addEventListener("click",async (ev)=>{
    ev.preventDefault()
    let post = {
        title: newTitle.value,
        userId:newUserId.value,
        body:newBody.value
    }
    await addPost(post)
    refreshItems()
    showSection("sectionList")
});


const submitEditButton =  document.getElementById("submitEditButton")
const editTitle =  document.getElementById("editTitle")
const editUserId =  document.getElementById("editUserId")
const editBody =  document.getElementById("editBody")
const editId =  document.getElementById("editId")


submitEditButton.addEventListener("click",async (ev)=>{
    ev.preventDefault()
    let post = {
        title: editTitle.value,
        userId:editUserId.value,
        body:editBody.value,
        id:editId.value
    }
    await updatePost(post)
    refreshItems()
    showSection("sectionList")
});






// const listLink = document.getElementById('listLink')



const newLink = document.getElementById('newLink')
const productTableBody = document.getElementById('productTableBody')

function showSection(sectionsId){
    if(sectionsId == 'sectionList'){
        sectionList.style.display = "block";
        sectionNew.style.display = "none";
        sectionEdit.style.display = "none";
    }
    else if(sectionsId == 'sectionNew'){
        sectionList.style.display = "none";
        sectionNew.style.display = "block";
        sectionEdit.style.display = "none";
    }
    else if(sectionsId == 'sectionEdit'){
        sectionList.style.display = "none";
        sectionNew.style.display = "none";
        sectionEdit.style.display = "block";
    }
}

async function editMe(id){
    let player = await loadPost(id)
    editId.value = player.id
    editTitle.value = player.title
    editUserId.value = player.userId
    editBody.value = player.body
    showSection("sectionEdit");
    
}


newLink.addEventListener("click",()=>{ 
    showSection("sectionNew")
})

listLink.addEventListener("click",()=>{ 
    showSection("sectionList")
})

function renderTr(player){
    // jsCall = editProduct(18)
    // jsCall = editProduct(19)
    // let template = `<tr>
    //                     <td>${player.userId}</td>
    //                     <td>${player.title}</td>
    //                     <td>${player.body}</td>
    //                     <td><a href="#" >EDIT</td>
    //                 </tr>`
    // productTableBody.innerHTML = productTableBody.innerHTML + template;


    // WHEN EDIT !!!
    let tr = document.createElement("tr")
    productTableBody.appendChild(tr)   
    let td = document.createElement("td")
    td.textContent = player.userId
    tr.appendChild(td)

    td = document.createElement("td")
    td.textContent = player.title
    tr.appendChild(td)

    td = document.createElement("td")
    td.textContent = player.body
    tr.appendChild(td)

    td = document.createElement("td")
    
    let btn = document.createElement("button")
    btn.textContent = "EDIT"
    btn.addEventListener("click",function(){
        alert("EDIT " + player.id)             
        editMe(player.id)
    });
    
    td.appendChild(btn)
    tr.appendChild(td)
} 


async function refreshItems(){
    let players = await loadPosts()
    productTableBody.innerHTML = '';    
    //  THEN är som "addEventListener" dvs det är en eventHandler som anropas senare - vid ett tillfälle
    // JSON och Javascript OBJECT är SAMMA SAK
    players.forEach(player=>{                    
        renderTr(player)
    });

    // fetch(baseApi)
    //     .then( response => response.json() )
    //     .then( array=>{
    //         array.forEach(prod=>{
    //             let p = new Product(prod.id,
    //                 prod.title,
    //                 prod.price,
    //                 prod.category)                    
    //             renderTr(p)
    //         });
    //     } );
    let x = 12            
}


refreshItems()

showSection("sectionList")