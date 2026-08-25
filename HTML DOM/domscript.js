function addParagraph(){
    const para=document.createElement("p")
    para.innerText="This is new paragraph"
    para.style.color="red";
    const parent=document.getElementById("para");
    parent.appendChild(para)

}
function removepara(){
     const container=document.getElementById("para")
     if(container.lastChild){
        container.removeChild(container.lastChild)
     }
function removeallpara(){
    const container=document.getElementById("para");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
}

}
}