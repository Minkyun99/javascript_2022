    
   
    // const A = setTimeout(()=>console.log('5'),1000)
    // let B = 5;
    // const C = setInterval(()=>{B-- 
    // console.log(`${B}`)},1000)


    //     setTimeout(()=>{
    //     clearTimeout(A)
    //     clearInterval(C)
    //     alert('꽝!')},5000)


        
        
    
    let C;

    function start () {
        let B = 5;
        C = setInterval(()=>{
          console.log(`${B}`)
          B--;
        if(B==0){alert('꽝!');clearInterval(C)}},1000)}



    function stop () {
        setTimeout(()=>{
        clearInterval(C)})
    }



     //     let A;
    //     let B = 5;
    //     let C;

    // function start () {
    //     A = setTimeout(()=>console.log('5'),1000)
    //     C = setInterval(()=>{B-- 
    //     console.log(`${B}`)},1000)

    // function stop () {
    //     setTimeout(()=>{
    //     clearTimeout(A)
    //     clearInterval(C)
    //     alert('꽝!')})}}

    //     setTimeout(()=>{
    //     clearTimeout(A)
    //     clearInterval(C)
    //     alert('꽝!')},5000)
