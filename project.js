var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzmBXcF3cWny2gBzHo8qI97M-FaYWQJbAjif7otcS3oBuDdlT0DfD-pVPmiw9xT5ne-/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("Msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Your response has been recorded successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
})
const gear = document.getElementById("gear");
const body = document.querySelector("body");
const me = document.querySelector(".me");
const ph = document.querySelector(".ph")
const about = document.getElementById("about")
function style(){
    if(body.style.backgroundColor="rgb(14, 17, 51)"){
        body.style.backgroundColor="white"
        me.style.color="black";
        ph.style.color="black";
        about.style.color="black"
        gear.style.transform="rotate(120deg)";

    }
}
function style2(){
    if(body.style.backgroundColor="white"){
        body.style.backgroundColor="rgb(14, 17, 51)"
        me.style.color="white";
        ph.style.color="white";
        about.style.color="white";
        gear.style.transform="rotate(240deg)";
    }
}
gear.addEventListener("click",()=>{
    style();
})
gear.addEventListener("dblclick",()=>{
    style2();
})
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0px";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
