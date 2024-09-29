let intervalId;
function startInterval(){
    let x =0;
    intervalId = setInterval(()=>{
        document.getElementById('count_display').innerText = ++x;

    },1000)

}



document.getElementById('btn-start').addEventListener('click',function(){
   startInterval();
}) 

document.getElementById('btn-stop').addEventListener('click',function(){
   clearInterval(intervalId);
})
document.getElementById('rest-btn').addEventListener('click',function(){
   clearInterval(intervalId);
   document.getElementById('count_display').innerText = 0;
})

