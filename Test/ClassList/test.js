/*1. querySelector 사용*/
/*classList 추가*/
const hiDivInClass=document.querySelector(".hiDivInClass");
hiDivInClass.classList.add("backgroundYellow");

/*classList 정보 출력*/
for(var cssClass of hiDivInClass.classList){
    alert("class 이름: "+cssClass+"\nclass 개수: "+hiDivInClass.classList.length);
}

/*2. querySelectorAll 사용*/
/*classList 추가*/
const hiDivInClass2=document.querySelectorAll(".hiDivInClass2");
for(var i=0; i<hiDivInClass2.length; i++){
    hiDivInClass2[i].classList.add("backgroundYellow");
}