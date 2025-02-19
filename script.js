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
let like = document.getElementsByClassName("like")
function likes(col){
  for(let z of like){
    if(col == z.id){
      z.classList.add("likered");
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