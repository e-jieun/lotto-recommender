// *how to compile js file
// *https://www.typescriptlang.org/ko/docs/handbook/compiler-options.html
// tsc tsfilename
// ?자꾸 변수 사용을 같은 이름으로 지정했다고 해서(js file compile 과정에서 같은 변수로 인식돼서 오류 error)
var root = document.getElementById('root');
var btn = document.querySelector('button');
console.log(root);
console.log(btn);
// <!--todo psuedo 1. btn.addEventListener('click')이 될 때마다
// <!--todo psuedo 2-1. btn 아래에 들어갈 자식요소에 1~45 사이의 숫자가 랜덤으로 배열로 구성된다
// <!--todo psuedo 2-2. btn 아래에 자식요소가 6개 덧붙여지도록 한다
// <!--todo 우선 숫자가 console에 랜덤으로 6개 찍히도록 만들어줄 알고리즘 test
// *1~45의 수를 랜덤으로 뽑아주는 변수 6번 나오도록 우선 해줘야지
// 아니 클릭할 떄마다 다른 수가 나오도록 하려면?
// 클릭 이벤트로 다른 수가 
// console.log(lottoNum);
btn.addEventListener('click', function () {
    function randomNum(min, max) {
        var randomInt = Math.round(Math.random() * max) + min;
        return randomInt;
    }
    var lottoArr = [];
    var numberCount = 6;
    // lottoArr.forEach(elem => {
    for (var i = 0; i < numberCount; i++) {
        var lottoNum = randomNum(1, 45);
        // ?다 다른 숫자가 나와야 하는데 똑같은 숫자가 반복해서 배열에 대입됨
        for (var i_1 = 0; i_1 < 1; i_1++) {
            // todo: lottoArr에 lottoNum을 넣어주자
            lottoArr.push(lottoNum);
        }
    }
    console.log(lottoArr);
    // });
    // for (let i = 0; i < numberCount; i++) {
    // const createNumDiv = document.createElement('div');
    // console.dir(createNumDiv);
    // <!--*lottoNumArr을 요소의 textContent에 대입
    // }
});
