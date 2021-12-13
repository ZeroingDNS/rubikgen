let cubetypeValue = document.querySelector(".cubetype"),cubetypeImage = document.querySelector(".imagetype"),inputSize = document.querySelector(".inputSize"),selectStage = document.querySelector(".stage"),buttonGo = document.querySelector(".buttonir"),scramble = document.querySelector(".scramble"),ifr = document.querySelector(".ifr"),parametros = document.querySelector(".parametros"),rotacion = document.querySelector(".rotacion"),cosa = document.querySelector(".cosa")
let link, linkblob,mezcla
let getLink = ()=>{
    let cubeType = cubetypeValue.value,cubeImg = cubetypeImage.value,size = inputSize.value,stage = selectStage.value,mezcla = scramble.value,r = rotacion.value,c = cosa.value
    link = `http://cube.rider.biz/visualcube.php?fmt=${cubeImg}&bg=t&pzl=${cubeType}&size=${size}&wiew=&stage=${stage}&r=${r}&alg=${mezcla}&${c}`
    linkblob =`http://cube.rider.biz/visualcube.${cubeImg}?fmt=${cubeImg}&bg=t&pzl=${cubeType}&size=${size}&wiew=&stage=${stage}&r=${r}&alg=${mezcla}&${c}`
}
let reload = ()=>{
    getLink()
    ifr.src = link
}
parametros.addEventListener("change",(e)=>{
    reload()

})
parametros.addEventListener("keyup",(e)=>{
    reload()

})

TTk.AlgorithmPuzzle(3)
.alg(scramble.value)
('#ap1');



					