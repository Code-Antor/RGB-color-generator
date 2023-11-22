window.onload = () => {
  main();
}

//varieble declation &  main working function call
function main(){
const roots = document.getElementsByClassName('container')
const btns = document.getElementsByClassName('btn')
const hex = document.getElementById('code')
const codeCopy = document.getElementsByClassName('copy1')

//RGB call
btns[0].addEventListener('click', function(){
  let colors = RGBcolour();
  roots[0].style.backgroundColor = colors;
 hex.value = colors;  
})
//copy the code.
codeCopy[0].addEventListener('click',function(){
  navigator.clipboard.writeText(hex.value);
  copyFunc(` ${hex.value} Copied`);
 
})
}
//main function end

//create RGB colour function
function RGBcolour(){
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random()* 255);
    let blue = Math.floor(Math.random()* 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`

}
//div create to show the copied value
function copyFunc(msg){
  const div = document.createElement('div');
  div.innerText = (msg);
  div.className = 'codde get-in-class';

  div[0].addEventListener('click',function(){
    div[0].classList.remove('get-in-class');
    div[0].classList.add('get-out-class');

    div[0].addEventListener('animationend',function(){
      div[0].remove();
    })
   
  })
  document.body.appendChild(div);
  
}

