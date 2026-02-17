
function getparam(a,e){return e||(e=window.location.href),new URL(e).searchParams.get(a)}
let s=a=>document.getElementById(a);

let get=()=>{
  getbase();
}
let getbase=()=>{
    let ply = [];
  
  
    ply.id =  s('videourl').value;
      
   
    console.log(ply);
  
    var arr = JSON.stringify(Object.assign({}, ply))
    console.log(btoa(arr));
    window.base =btoa(arr);
    iframe();
    return btoa(arr);
}


let iframe=()=> {
    s('stream').src='https://loadigital.github.io/video360/video.html?id='+base;

    var op = document.getElementById("codeframe")
    const div=document.createElement("div")
  
    div.innerHTML =`
    <p>Insertar URL</p>
    <textarea>http://127.0.0.1:5500/new%20player/video.html?id=${base}</textarea>

  
    `
    op.appendChild(div)
  
  

}
