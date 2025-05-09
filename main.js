document.getElementById('btn1').addEventListener('click', function() {
      let titulo = document.getElementById('titulo');
      titulo.textContent = "Título Alterado!";
      //titulo.style.color = 'blue';
      document.querySelector('btn1').classList.add('corBotao1');
    });


document.getElementById('btn2').addEventListener('dblclick', function() {
    let imagem = document.getElementById('imagem');
    imagem.src = "assets/horse.png";
    imagem.style.width = '10%';
    imagem.style.border = '2px solid black';
});

document.getElementById('btn3').addEventListener('mouseover', function() {
    let texto1 = document.getElementById('texto1');
    texto1.textContent = "Texto Alterado!";
    texto1.style.color = 'green';
    texto1.style.backgroundColor = 'yellow';

});

const allButtons = document.querySelectorAll("button");
const buttons = [allButtons[3], allButtons[4], allButtons[5]];

for (let btn of buttons) {
  btn.addEventListener("click", function () {
    document.querySelector("#texto2").innerHTML = btn.innerHTML;
  });
}
