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

function open(input){
    if(input.target.dataset.sertificat !== undefined){
        const keyData = input.target.dataset.sertificat;
        imgSert.src = `${dataSertificats[keyData]}.png`;
        imgSert.previousSibling.srcset = `${dataSertificats[keyData]}.webp`;
        cover.style.display = "block";
    }
      

}
sertificats.forEach((elem) => 
{
    elem.addEventListener("click",open);
}

)


