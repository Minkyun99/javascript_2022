    
   
    // const A = setTimeout(()=>console.log('5'),1000)
    // let B = 5;
    // const C = setInterval(()=>{B-- 
    // console.log(`${B}`)},1000)


    //     setTimeout(()=>{
    //     clearTimeout(A)
    //     clearInterval(C)
    //     alert('꽝!')},5000)


        let B = 5;
        let C;

    function start () {
        C = setInterval(()=>{B-- 
          if(B<1){  alert('꽝!')}
        console.log(`${B}`)},1000)}

    function stop () {
        setTimeout(()=>{
        clearInterval(C)})}