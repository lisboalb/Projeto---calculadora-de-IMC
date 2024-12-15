
    // função acalcular 
    function calcular() {

      // acessando elementos 



      const peso = document.getElementById("peso").value
      const altura = document.getElementById("altura").value
      const res = document.getElementById("Resultado")

      const Posicionamento1 = document.getElementById("Posicionamento1")
      const magreza =  document.getElementById("magreza")
      const normal =  document.getElementById("normal")
      const sobrepeso = document.getElementById("sobrepeso")
      const obesidade = document.getElementById("obesidade")

      // calcular o IMC

      const imc = peso / (altura * altura)

      //  Exibindo os resultados

      if (imc < 19) {
        
          //Informação do IMC
        res.innerHTML = "IMC:" + imc + ". Seu  IMC indica magreza"

        
            //  Cor da legenda
        res.style.color = "white"
        

          //Colocando a Imagem
        imagem.innerHTML = "<img src= 'magreza.png'>"

             // Alinhamento 
        Posicionamento1.style.display = "flex"
        imagem.style.justifyContent ="center"
        imagem.style.display = "flex"


      } else if(imc >= 19 && imc < 24){

        
          //Informação do IMC
          res.innerHTML = "IMC:" + imc + ". Seu  IMC indica normal"

            //  Cor da legenda
          res.style.color = "white"

          //Colocando a Imagem
          imagem.innerHTML = "<img src= 'normal.png'>"

          // Alinhamento 
          Posicionamento1.style.display ="flex"
          imagem.style.justifyContent = "center"
          imagem.style.display = "flex"



        } else if(imc >= 24 && imc < 29 ){

          
          //Informação do IMC
          res.innerHTML = "IMC:" + imc + ". Seu  IMC indica Sobre peso"

              //  Cor da legenda
          res.style.color = "white"

             //Colocando a Imagem
          imagem.innerHTML = "<img src= 'sobrepeso.png'>"

              // Alinhamento 
          Posicionamento1.style.display ="flex"
          imagem.style.justifyContent = "center"
          imagem.style.display = "flex"


        }  else {

          //Informação do IMC
     
          res.innerHTML = "IMC:" + imc + ". Seu  IMC indica Sobre obsidade"

          //  Cor da legenda
          res.style.color = "white"

          //Colocando a Imagem
          imagem.innerHTML = "<img src= 'obesidade.png'>"
      

          // Alinhamento 
        Posicionamento1.style.display ="flex"
         imagem.style.justifyContent = "center"
         imagem.style.display = "flex"
        
          
        

        }

      }
          