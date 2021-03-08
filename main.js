const sendbtn = document.getElementById('send')
.addEventListener('click', (e) => {
    console.log(firstName.value);
    console.log(box2.value);
    console.log(box3.value);
    console.log(text.value);
    console.log(e);
    // document.querySelector('#hi').textContent = 'mahe';

});


// function sum(){
//     let box = parseFloat(document.getElementById("box").value);
//     let box2 = parseFloat(document.getElementById("box2").value);
//     document.getElementById("text").value = box + box2;
// }

const firstName = document.getElementById('box');

const box2 = document.getElementById('box2');

const box3 = document.getElementById('box3');

const text = document.getElementById('text');

function multiply(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    document.getElementById("result").innerHTML = n1 * n2;
}

function divide(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    document.getElementById("result").innerHTML = n1 / n2;
}
