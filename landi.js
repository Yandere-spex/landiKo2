const randombtn = document.getElementById('buttonRandom');

const yesbtn = document.getElementById('btnYes');

const imageRef = document.querySelector('.imageShow');
const body = document.body;

const windowbody = window.getComputedStyle(body);










yesbtn.addEventListener('click',()=>{
    scale = 1;
    imageRef.src = '../MyFilePicture/IloveYouGIF.gif';
    yesbtn.style.transform =  yesbtn.style.transform = `scale(${1})`;
      
})

    let scale = 1;
    let add = 0.20;
randombtn.addEventListener('mouseover',()=>{


    let bodyWidth = windowbody.width;
    let bodyWidthInteger = parseInt(bodyWidth)

    let bodyHeight = windowbody.height;
    let bodyHeightInteger = parseInt(bodyHeight)
/*
    let positionWidth = Math.floor(Math.random() * bodyWidthInteger) + -100;
    let positionHeight = Math.floor(Math.random() * bodyHeightInteger) + 1;

    const width = Math.floor(Math.random() * (200 - -100 + 1)) + min;
   
    console.log(`Width randomNum ${randomNum} actual Width ${bodyWidth}`)
    console.log(`Height randomNum ${randomNum1} actual Height ${bodyHeight}`)


*/
    const min = -300;
    const max = 200;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;


    randombtn.style.transform = `translate(${randomNum}px, ${randomNum1}px)`;
    imageRef.src = '../MyFilePicture/CryingBearGIF.gif';
    yesbtn.style.transform = `scale(${scale += 0.30})`;
})
