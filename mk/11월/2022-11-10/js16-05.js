// let A;


// function start(){
//     let B = 0;
// A = setInterval(()=>{
//     B++;
//     if(B<60){console.log(`${B}초`)}
//     else{console.log(`${B/60}분 ${B}초`)}
// },1000
// )
// }

// function stop (){
//     setTimeout(() => {
//         console.log('타이머 끝')
//         clearInterval(A)
// })
// }


let timer
(function start(){
    let A = 0;
    timer = setInterval(()=>{if(A<0){}},5000)
})



// else{console.log(`${B}'`)