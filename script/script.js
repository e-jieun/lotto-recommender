// *how to compile js file
// *https://www.typescriptlang.org/ko/docs/handbook/compiler-options.html
// *tsc tsfilename
// ?자꾸 변수 사용을 같은 이름으로 지정했다고 해서(js file compile 과정에서 같은 변수로 인식돼서 오류 error)
// selector
var root = document.getElementById('root');
var btn = document.querySelector('button');
var numCon = document.getElementById('num-con');
// console.log(root);
// console.log(btn);
// console.log(numCon);
// variable
var numberCount = 6;
var numConChild = numCon.children.length;
// todo psuedo 1. btn.addEventListener('click')이 될 때마다
// todo psuedo 2-1. btn 아래에 들어갈 자식요소에 1~45 사이의 숫자가 랜덤으로 배열로 구성된다
// todo psuedo 2-2. btn 아래에 자리한 컨테이너에 자식요소가 6개 덧붙여지도록 한다
// todo 우선 숫자가 console에 랜덤으로 6개 찍히도록 만들어줄 알고리즘 test
function randomNum(min, max) {
    var randomInt = Math.round(Math.random() * max) + min;
    return randomInt;
}
// todo psuedo 2. 제거해주는 함수 빈 배열
var removeNum = function (numConChild) {
    if (numConChild >= 30) {
        for (var i = 0; i < numConChild; i++) {
            if (numCon.firstChild) {
                console.log('remove');
                numCon.removeChild(numCon.firstChild);
            }
        }
    }
};
// *1~45의 수를 랜덤으로 뽑아주는 변수 6번 나오도록 우선 해줘야지
// 아니 클릭할 떄마다 다른 수가 나오도록 하려면?
// 클릭 이벤트로 다른 수가 나오도록 해야겠지?
// todo 버튼에 클릭 이벤트를 넣어준다
// console.log(lottoNum);
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    var lottoArr = [];
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
    // todo 덧붙일 부분? btn 다음의 순서로 오는 컨테이너의 자식요소로 덧붙인다
    // todo psuedo 1. 덧붙여주는 함수 
    var appendNum = function (count) {
        for (var i = 0; i < count; i++) {
            var createNumDiv = document.createElement('div');
            console.dir(createNumDiv);
            // *lottoNumArr을 요소의 textContent에 대입
            // ?number을 string 타입으로 바꿔줘야 함
            createNumDiv.textContent = lottoArr[i].toString();
            // createNumDiv?.textContent ? createNumDiv.textContent = lottoArr[i].toString() : '';
            numCon.appendChild(createNumDiv);
        }
    };
    // *numCon의 자식요소 append하는 기명함수 appendNum() 호출부
    appendNum(numberCount);
    // !줄 바꿈되도록 에러 수정하기
    var ln = function (numConChild, count) {
        // todo psuedo 3. 6번째마다 <br>
        if (numConChild % count === 0) {
            console.log('6th');
            var br = document.createElement('br');
            numCon.children[numConChild].after(br);
        }
    };
    // !
    // *numCon의 자식요소 지워주는 기명함수 removeNum() 호출부
    removeNum(numConChild);
    // !
    ln(numConChild, numberCount);
    // !
});
