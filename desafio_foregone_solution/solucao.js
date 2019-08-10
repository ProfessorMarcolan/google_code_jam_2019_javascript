
function lidar_entrada(str){

    let array_srt = str.split("\n")
    // let saida = array_srt.splice(0, 1)
    array_srt.shift()
    let saida_int = array_srt.map((ele) => {return parseInt(ele)});

    return saida_int
}


function decompoem_numero(string){
    let str = String(string)

    let a = [];

    [...str].forEach(c => a.push(parseInt(c)));
    return a;

}



function calcula_soma(arra){
    var arra_reverse = arra.reverse()

    let a= 0
    let b= 0    
    arra_reverse.forEach( (ele,i) =>{
        a = ele[0]* Math.pow(10,i) + a
        b = ele[1]* Math.pow(10,i) + b
    })

    return [a,b]

}

function logica(arra_value){


    let a= []

    arra_value.forEach( (ele,i) =>{
        let tes_par = (ele % 2) === 0  
        let tes_4 = ele === 4

        if(!tes_4){
            if(tes_par){
                a.push( [ele/2, ele/2])
            }else{
                a.push( [ele, 0] )
            }
        }else{
            a.push( [ele/2, ele/2])
        }

    })

    valor_saida = calcula_soma(a)

    

    return valor_saida
}




function usa_esquema(string){
    let array = lidar_entrada(string)


    let saida =[]
    array.forEach( (ele,i) => {
        let resul_f = decompoem_numero(ele)
        let result = logica(resul_f)
        saida.push(result)
    })


    saida.forEach((ele,i) => {
        if((i+1) == saida.length){
            process.stdout.write(`Case #${i+1}: ${ele[0]} ${ele[1]}`)
        }else{
            process.stdout.write(`Case #${i+1}: ${ele[0]} ${ele[1]}\n`)
        }
        
    })
    

}






module.exports ={
    lidar_entrada,
    logica,
    decompoem_numero,
    usa_esquema

} 