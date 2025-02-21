let download = document.getElementById("download");
function samplecv(){
  download.style = 'right:160px;transition: all 1s;color:black'
}


let home =  document.getElementById("btn1");
let about = document.getElementById("btn2");
let education=  document.getElementById("btn3");
let project = document.getElementById("btn4");
let contact = document.getElementById("btn5")
function sample(data){
  data == "btn1" ? home.classList.add("style") : home.classList.remove("style")
  data == "btn2" ? about.classList.add("style") : about.classList.remove("style")
  data == "btn3" ? education.classList.add("style") : education.classList.remove("style")
  data == "btn4" ? project.classList.add("style") : project.classList.remove("style")
  data == "btn5" ? contact.classList.add("style") : contact.classList.remove("style")
}


let probox =  document.getElementsByClassName("probox"), screen = document.getElementsByClassName("screen");

function proje(data){
  for(let z of screen){
    if(data == z.id){
      z.classList.add("mark");
    }
  }
}
function rem(cli){
  for(let z of screen){
    if(cli === z.id){
      z.classList.remove("mark");
    }
  }
}
let like = document.getElementsByClassName("like"),count = 0;
function likes(col){
  for(let z of like){
    if(col == z.id){
     if(count%2==0){
      z.classList.add("likered");
     }
     else{
      z.classList.remove("likered");
     }
     count++
    }
  }
}
let promain = document.getElementById("promain")
function mespro(){
  promain.style = "display:block"
}

function messx(){
  promain.style = "display:none"
}



let id = (id)=> document.getElementById(id);

let newclass = (newclass) => document.getElementsByClassName(newclass);

let a = id("username"),
b = id("email"),
c = id("phone"),
form = id("form"),

error = newclass("error"),
fail = newclass("fail"),
succ = newclass("succ")

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  engine(a,0,"Username cannot be blank");
  engine(b,1,"Email cannot be blank");
  engine(c,2,"Phone Number cannot be blank");
})



function engine(id,index,message){
  if(id.value.trim() === ""){
    error[index].innerText = message;
    fail[index].style = "opacity:1"
    succ[index].style = "opacity:0"
    a.style = "background-color:rgb(255,0,0,0.318)"
    b.style = "background-color:rgb(255,0,0,0.318)"
    c.style = "background-color:rgb(255,0,0,0.318)"
  }
  else{
    error[index].innerText = ""
    fail[index].style = "opacity:0"
    succ[index].style = "opacity:1"
  }
}
