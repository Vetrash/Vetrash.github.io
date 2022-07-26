const cover = document.querySelector(".cover")
const closer = cover.querySelector(".cross")
const imgSert = cover.querySelector(".imgSertificat")
const sertificats = document.querySelectorAll(".sertifikat")
const dataSertificats = {
    JavaScript: "img/JavaScript",
    ReactJS: "img/ReactJS",
    Hexlet: "img/hexlet"
}

closer.addEventListener("click",close);
function close(){
    cover.style.display = "none";
};
sertificats.forEach((elem) => 
{
    elem.addEventListener("click",open);
}

)

function open(input){
    const keyData = input.target.getAttribute('data-sertificat');
if (keyData in dataSertificats){    
    imgSert.src = `${dataSertificats[keyData]}.png`;
    imgSert.previousSibling.srcset = `${dataSertificats[keyData]}.webp`;
    cover.style.display = "block";
}
      

}