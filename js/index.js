
const fileInput = document.querySelector(".file-input");
const saveImgBtn = document.querySelector("#btn-save");
let previewImg = document.querySelector(".preview-img img");

function preview() {

    let file = fileInput.files[0];
    previewImg.src = URL.createObjectURL(file);

    document.getElementById("previewImg").style.filter = "invert(0)"
    document.getElementById("btn-save").disabled = false;

    const size = document.getElementById("previewImg")

    setTimeout(() => {
        document.getElementById("largura").value = size.clientWidth;
        document.getElementById("altura").value = size.clientHeight;
        
    }, 500);
}

document.querySelector(".btn-inversor").addEventListener("click",(e)=>{
    e.preventDefault();

     document.getElementById("previewImg").style.filter = "saturate(0)invert(1)"
   

})

const saveImg = (e) =>{
    e.preventDefault()

    let imgWidth = document.getElementById("largura").value
    let imgHeight = document.getElementById("altura").value

    console.log(`${imgHeight} ${imgWidth}`)

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    
    canvas.width = imgWidth;
    canvas.height = imgHeight;
    console.log("create canvas")
    
    ctx.filter = 'saturate(0)invert(1)'
    ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(previewImg, -canvas.width / 100, -canvas.height / 100, canvas.width, canvas.height);

    document.body.appendChild(canvas)

    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    link.click();
}


saveImgBtn.addEventListener("click", saveImg);
