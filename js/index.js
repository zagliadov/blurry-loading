const loadText = document.querySelector('.loading-text'),
    bg = document.querySelector('.bg');

let load = 0;


const blurring = () => {
    load++
    if(load > 99) {
        clearInterval(int);//Отключаем blurring при load = 100
    }
   
    loadText.innerHTML = `${load}%`;//Меняет число от 0 до 100
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

let int = setInterval(blurring, 30);//Включаем blurring каждые 30 милисекунд

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}






