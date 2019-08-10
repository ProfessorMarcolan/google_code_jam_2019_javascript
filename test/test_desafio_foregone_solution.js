var assert = require('assert');
var expect = require("chai").expect

var {usa_esquema,lidar_entrada,logica, decompoem_numero} = require("../desafio_foregone_solution/solucao");

// describe("add", function(){

//     it("shoul add 5 and return 10",function(){
//         var resul = soma(5);
//         assert.equal(resul,10) 


//         var resul = soma2(5);
//         assert.equal(resul,10) 


//     })
// })





describe("testando a logica", function(){



    it("decompondo o numero (arrumando a entrada) ",function(){
        let entrada = ["4",
            "940",
           "4444"]

        let saida = [
            [4],
            [9,4,0],
            [4,4,4,4]

        ]


        entrada.forEach( (ele,i) =>{
            let resul_f = decompoem_numero(ele)
            let resul_s = saida[i] 

            expect(resul_f).to.eql(resul_s);

            // assert.equal(resul_f,resul_s) 
        })


    })

    it("testando algoritmo",function(){
        // var resul = soma(5);
        let entrada = [[4],
                [9,4,0],
                [4,4,4,4]]
        


        let saida =[[2,2],
                    [920,20],
                    [2222,2222]]


        entrada.forEach( (ele,i) =>{
            let resul_f = logica(ele)
            let resul_s = saida[i] 

            expect(resul_f).to.eql(resul_s);

            // assert.equal(resul_f,resul_s) 
        })


    })

    it("testando algoritmo2",function(){

        let entrada = "3\n4\n940\n4444"
        let saida = [4,940,4444]


        
        let resul_f = lidar_entrada(entrada)
        let resul_s = saida

        expect(resul_f).to.eql(resul_s);

            // assert.equal(resul_f,resul_s) 
      


    })

    it("testando algoritmo42",function(){

        let entrada = "3\n4\n940\n4444"



        
        let resul_f = usa_esquema(entrada)

            // assert.equal(resul_f,resul_s) 
      


    })
})