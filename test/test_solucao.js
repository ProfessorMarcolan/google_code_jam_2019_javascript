var assert = require('assert');

var {soma,soma2} = require("../desafio_foregone_solution/solucao");

describe("add", function(){

    it("shoul add 5 and return 10",function(){
        var resul = soma(5);
        assert.equal(resul,10) 


        var resul = soma2(5);
        assert.equal(resul,10) 


    })
})