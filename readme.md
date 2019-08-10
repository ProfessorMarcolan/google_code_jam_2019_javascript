# Esse repositorio é para resolver o google code jam 2019


Esse repositório consta a resolução dos desafios do Google Code Jam 2019 usando node.js e javascript. 



# Como usar o Javascript no Google Code Jam 2019
Handle Input Output

Your program must read input from standard input (stdin) and write output to standard output (stdout). 
Segundo o FAQ da competição é necessário usar no programa do competidor a entrada e a saida padrão da linguagem de preferencia do usuário. Para a combinação node.js + javascript a entrada padrão é caracterizada pelo método "process.stdin.on". Esse métod possui dois argumentos de enrtada: de onde é para ler, e qual função será chamada no momento que a leitura estiver pronta (usuário clicou no enter). Veja exemplo a baixo:
```
process.stdin.on("data", function(data){
    
    
});

```

A saida do software contendo o resultado de cada desafio deve estar formata segundo expecificações do próprio desafio. Porém, o método em javascript que deve ser usado é o "console.log". Veja um exemplo a baixo: 

```
    console.log("saida")  
```

No fim o código deve ter a extruturação seguinte:

```
process.stdin.on("data", function(data){
    
    
    let entrada = data.toString().trim()
    // a entrada de dados deve ser manipulada


    // a logica do seu código vem aqui


    //saida deve vir aqui.
    let saida = ""
    console.log(saida)
    
})

```










# Refencias

https://www.youtube.com/watch?v=gQPhH0roJ9s

https://codingcompetitions.withgoogle.com/codejam/faq#how-should-my-program-read-input-and-write-output