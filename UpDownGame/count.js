var try_count=0;
var random=Math.floor(Math.random()*100+1);

const print_num=document.getElementById("num");

//button onclick part
const input_but=document.getElementById('input_but');
input_but.onclick=Print;
const retry_but=document.getElementById('retry_but');
retry_but.onclick=Reset;

function Print(){
    if(print_num!=null){
        //수 비교
        if(random==print_num.value){
            document.getElementById('explain').innerText="🏆 성공! 🏆";
            input_but.disabled=true;
        }else if(random<print_num.value){
            document.getElementById('explain').innerText=print_num.value+"보다 작습니다. 😇";
        }
        else{
        document.getElementById('explain').innerText=print_num.value+"보다 큽니다. 😇";
        }
    
        try_count++;
        //document.getElementById('result').innerText=random;
        document.getElementById('try').innerText=try_count;
    }
    else{
        alert("값을 입력하시오!");
    }
    
}
function Reset(){
    location.reload(true);
}