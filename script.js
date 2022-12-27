let main = document.createElement("main");
main.classList.add("container");
document.body.prepend(main);

let section = document.createElement("div");
section.classList.add("block");
main.append(section);

let h1 = document.createElement("h1");
h1.innerHTML = "Shopping Bag";
h1.classList.add("h1");
section.append(h1);

//-------------------------------------------------------------------------------

let one = document.createElement("div");
one.classList.add("first");
section.append(one);

let ul = document.createElement("ul");
ul.classList.add("ul");
one.append(ul);

let li = document.createElement("li");
li.classList.add("li");
ul.append(li);

let li2 = document.createElement("li");
li2.classList.add("li2");
ul.append(li2);

//-------------------------------------------------------------------------------

let close = document.createElement("div");
close.innerHTML = "⮾";
close.classList.add("close");

const closeTodo = (ev) => {
  ev.currentTarget.parentNode.parentNode.remove(ev.parentNode);
};

close.addEventListener("click", closeTodo);
li.append(close);

//--------------------------------------------------------------------------------

let like = document.createElement("div");
like.innerHTML = "♥";
like.classList.add("like");

const likeTodo = (e) => {
  let liked = e.currentTarget.classList.contains("liked");
  liked
    ? e.currentTarget.classList.remove("liked")
    : e.currentTarget.classList.add("liked");
};
like.addEventListener("click", likeTodo);
li2.append(like);

//--------------------------------------------------------------------------------

let li3 = document.createElement("img");
li3.src = "./dress.jpg";
li3.classList.add("dress");
ul.append(li3);

//---------------------------------------------------------------------------------

let li4 = document.createElement("h3");
li4.classList.add("text");
li4.innerHTML = "Teal strapless dress - Etsy";
ul.append(li4);

//----------------------------------------------------------------------------------

let plus = document.createElement("button");
plus.innerHTML = "+";
plus.classList.add("plus");
ul.append(plus);

const Plus = () => {
  count++;
  num.innerHTML = count;
};

plus.addEventListener("click", Plus);

//-----------------------------------------------------------------------------------

let num = document.createElement("h3");
num.classList.add("num");
num.innerHTML = "1";
ul.append(num);
let count = "1";

//------------------------------------------------------------------------------------

let minus = document.createElement("button");
minus.innerHTML = "-";
minus.classList.add("minus");
ul.append(minus);

const Minus = () => {
  if (count > 0) {
    count--;
    num.innerHTML = count;
  }
};

minus.addEventListener("click", Minus);

//-------------------------------------------------------------------------------------

let res = document.createElement("h2");
res.classList.add("res");
res.innerHTML = "$ 750";
ul.append(res);
let count2 = 750;

const Multi = () => {
  count2 = count2 + 750;
  res.innerHTML = `$ ${count2}`;
};

plus.addEventListener("click", Multi);

const Des = () => {
  if (count2 > 0) {
    count2 = count2 - 750;
    res.innerHTML = `$ ${count2}`;
  }
};

minus.addEventListener("click", Des);

////////////////////////////////////////////////////////////////////////////////////////////////////////

let oneS = document.createElement("div");
oneS.classList.add("first");
section.append(oneS);

let ulS = document.createElement("ul");
ulS.classList.add("ul");
oneS.append(ulS);

let liS = document.createElement("li");
liS.classList.add("li");
ulS.append(liS);

let li2S = document.createElement("li");
li2S.classList.add("li2");
ulS.append(li2S);

//-----------------------------------------------------------------------------------

let closeS = document.createElement("div");
closeS.innerHTML = "⮾";
closeS.classList.add("close");

const closeTodoS = (ev) => {
  ev.currentTarget.parentNode.parentNode.remove(ev.parentNode);
};

closeS.addEventListener("click", closeTodoS);
liS.append(closeS);

//------------------------------------------------------------------------------------

let likeS = document.createElement("div");
likeS.innerHTML = "♥";
likeS.classList.add("like");

const likeTodoS = (e) => {
  let liked = e.currentTarget.classList.contains("liked");
  liked
    ? e.currentTarget.classList.remove("liked")
    : e.currentTarget.classList.add("liked");
};
likeS.addEventListener("click", likeTodoS);
li2S.append(likeS);

//-------------------------------------------------------------------------------------

let li3S = document.createElement("img");
li3S.src = "./dressS.jpg";
li3S.classList.add("dress");
ulS.append(li3S);

//-------------------------------------------------------------------------------------

let li4S = document.createElement("h3");
li4S.classList.add("text");
li4S.innerHTML = "Sleeveless dress - Junxi Wan";
ulS.append(li4S);

//-------------------------------------------------------------------------------------

let plusS = document.createElement("button");
plusS.innerHTML = "+";
plusS.classList.add("plus");
ulS.append(plusS);

const PlusS = () => {
  countS++;
  numS.innerHTML = countS;
};

plusS.addEventListener("click", PlusS);

//-------------------------------------------------------------------------------------

let numS = document.createElement("h3");
numS.classList.add("num");
numS.innerHTML = "1";
ulS.append(numS);
let countS = "1";

//------------------------------------------------------------------------------------

let minusS = document.createElement("button");
minusS.innerHTML = "-";
minusS.classList.add("minus");
ulS.append(minusS);

const MinusS = () => {
  if (countS > 0) {
    countS--;
    numS.innerHTML = countS;
  }
};

minusS.addEventListener("click", MinusS);

//-------------------------------------------------------------------------------------

let resS = document.createElement("h2");
resS.classList.add("res");
resS.innerHTML = "$ 500";
ulS.append(resS);
let count2S = 500;

const MultiS = () => {
  count2S = count2S + 500;
  resS.innerHTML = `$ ${count2S}`;
};

plusS.addEventListener("click", MultiS);

const DesS = () => {
  if (count2S > 0) {
    count2S = count2S - 500;
    resS.innerHTML = `$ ${count2S}`;
  }
};

minusS.addEventListener("click", DesS);

////////////////////////////////////////////////////////////////////////////////////////////////

let oneT = document.createElement("div");
oneT.classList.add("first");
section.append(oneT);

let ulT = document.createElement("ul");
ulT.classList.add("ul");
oneT.append(ulT);

let liT = document.createElement("li");
liT.classList.add("li");
ulT.append(liT);

let li2T = document.createElement("li");
li2T.classList.add("li2");
ulT.append(li2T);

//-----------------------------------------------------------------------------------

let closeT = document.createElement("div");
closeT.innerHTML = "⮾";
closeT.classList.add("close");

const closeTodoT = (ev) => {
  ev.currentTarget.parentNode.parentNode.remove(ev.parentNode);
};

closeT.addEventListener("click", closeTodoT);
liT.append(closeT);

//------------------------------------------------------------------------------------

let likeT = document.createElement("div");
likeT.innerHTML = "♥";
likeT.classList.add("like");

const likeTodoT = (e) => {
  let liked = e.currentTarget.classList.contains("liked");
  liked
    ? e.currentTarget.classList.remove("liked")
    : e.currentTarget.classList.add("liked");
};
likeT.addEventListener("click", likeTodoT);
li2T.append(likeT);

//-------------------------------------------------------------------------------------

let li3T = document.createElement("img");
li3T.src = "./dressT.jpg";
li3T.classList.add("dress");
ulT.append(li3T);

//-------------------------------------------------------------------------------------

let li4T = document.createElement("h3");
li4T.classList.add("text");
li4T.innerHTML = "Lacy dress - Jane Vini";
ulT.append(li4T);

//-------------------------------------------------------------------------------------

let plusT = document.createElement("button");
plusT.innerHTML = "+";
plusT.classList.add("plus");
ulT.append(plusT);

const PlusT = () => {
  countT++;
  numT.innerHTML = countT;
};

plusT.addEventListener("click", PlusT);

//-------------------------------------------------------------------------------------

let numT = document.createElement("h3");
numT.classList.add("num");
numT.innerHTML = "1";
ulT.append(numT);
let countT = "1";

//------------------------------------------------------------------------------------

let minusT = document.createElement("button");
minusT.innerHTML = "-";
minusT.classList.add("minus");
ulT.append(minusT);

const MinusT = () => {
  if (countT > 0) {
    countT--;
    numT.innerHTML = countT;
  }
};

minusT.addEventListener("click", MinusT);

//-------------------------------------------------------------------------------------

let resT = document.createElement("h2");
resT.classList.add("res");
resT.innerHTML = "$ 840";
ulT.append(resT);
let count2T = 840;

const MultiT = () => {
  count2T = count2T + 840;
  resT.innerHTML = `$ ${count2T}`;
};

plusT.addEventListener("click", MultiT);

const DesT = () => {
  if (count2T > 0) {
    count2T = count2T - 840;
    resT.innerHTML = `$ ${count2T}`;
  }
};

minusT.addEventListener("click", DesT);
