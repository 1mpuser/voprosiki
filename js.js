let voprosiki=document.getElementsByClassName('question');

function checkResult(answers){
    let result=null;
    for (let i=0;i<answers.length;i++){
        if(answers[i].checked){
            if (answers[i].getAttribute('data-true')!==null) result=true;
            else result=false;
        }
    }
    return result;
}

function checkStatOfNumberInPercents(array, number){
    let kolvo=0;
    for (let i=0;i<array.length;i++){
        if(array[i]===number) kolvo++;
    }
    return Math.round((kolv0/array.length)*100);
}

function howManyNumbersInArray(array, number){
    let kolvo=0;
    for (let i=0;i<array.length;i++){
        if(array[i]===number) kolvo++;
    }
    return kolvo;
}

function checkAnswers(){
let arr=[];
for (let i=0;i<voprosiki.length;i++){
    arr[i]=checkResult(voprosiki[i].querySelectorAll('input=radio'));
}
let noAnswers=howManyNumbersInArray(arr, null);
let falseAnswers=howManyNumbersInArray(arr, false);
let truePercent=checkStatOfNumberInPercents(arr,true);
let trueAnswers=howManyNumbersInArray(arr, true);
let msg='Правильных ответов: '+ trueAnswers+' '+truePercent+ '%' + '\n'+
'Неправильных ответов: ' + falseAnswers+ '\n'+
'Без ответов: ' +noAnswers+ '\n';
alert(msg);
}