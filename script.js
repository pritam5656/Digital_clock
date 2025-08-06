const clock = document.querySelector('#clock');

// let date = new Date();
// console.log(date.toLocaleTimeString);


setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString);   // this will give time in every second in consolu but i donot want it in console
    clock.innerHTML = date.toLocaleTimeString();
},1000)
