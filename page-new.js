function navbar() {
  document.querySelector('.menu').classList.toggle('active')
  document.querySelector('.nav-wrap').classList.toggle('active')
}

document.addEventListener('scroll', () => {
  const nav = document.querySelector(".nav");

  if (window.scrollY > 100) {
    nav.classList.remove('transparent');
  } else {
    nav.classList.add('transparent');
  }
});

const cont = document.querySelectorAll('.content > :nth-child(n)');

window.addEventListener('scroll',checkBoxes);

checkBoxes()

function checkBoxes() {
  const togglebottom = window.innerHeight / 10 * 9;

  cont.forEach((cont)   => {
    const conttop = cont.getBoundingClientRect().top;

    if (conttop < togglebottom) {
      cont.classList.add('visible');
    } else {
      cont.classList.remove('visible');
    }
  });
}

function popup(x) {
  document.querySelector('#popup').classList.add('active')
  document.querySelector('.title span').innerHTML = x;
  document.querySelector('.preview1').src = "./Images/" + x + "-1.png";
  document.querySelector('.preview2').src = "./Images/" + x + "-2.png";
  document.querySelector('.preview3').src = "./Images/" + x + "-3.png";
  document.querySelector('.preview4').src = "./Images/" + x + "-4.png";
}
function closepopup() {
  document.querySelector('#popup').classList.remove('active')
}

function magnify() {
  document.querySelector('#themeimg').classList.toggle('magnify')
}