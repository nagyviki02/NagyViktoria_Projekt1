let jatekos = 0;
let szg = 0;

function jatValaszt(jatValasztott) 
{
  const lehetoseg = ['kő', 'papír', 'olló'];
  const szgVal = lehetoseg[Math.floor(Math.random() * lehetoseg.length)];

  let result;

  if (jatValasztott === szgVal) 
  {
    result = "Döntetlen!";
  } 
  else if ( (jatValasztott === 'kő' && szgVal === 'olló') ||
            (jatValasztott === 'papír' && szgVal === 'kő') ||
            (jatValasztott === 'olló' && szgVal === 'papír')   ) 
  {
    result = "Gratulálok, nyertél!";
    jatekos++;
  } 
  else 
  {
    result = "Sajnálom, vesztettél!";
    szg++;
  }

  document.getElementById('result').innerText = result;
  document.getElementById('jatNyert').innerText = jatekos;
  document.getElementById('szgNyert').innerText = szg;

  document.getElementById('kepek').innerHTML = `<img src="${jatValasztott}.png" alt="${jatValasztott}"> <img src="${szgVal}.png" alt="${szgVal}">`;
}

function ujra() {
    jatekos = 0;
    szg = 0;
    document.getElementById('jatNyert').innerText = jatekos;
    document.getElementById('szgNyert').innerText = szg;
    document.getElementById('result').innerText = "";
    document.getElementById('kepek').innerHTML = "";
  }