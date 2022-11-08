let num=0
    function updn(x){
        num=num+x
        if(x>0){x=x}else{x=-x}
        document.write(`<div>${num}</div><button onclick="updn(${x})">증가</button>
        <button onclick="updn(${-x})">감소</button>
    `)
        document.close()
    }

    // function(){
    //     num--
    //     document.write(`<button onclick="upup()">증가</button>
    //     <button onclick="dndn()">감소</button>`)
    //     document.close()
    // }
