onload = function () {
  var html = document.getElementsByTagName("html")[0];
  var body = document.getElementsByTagName("body")[0];
  var egg = ['OωO', '(๑•́ ∀ •̀๑)', '(๑•́ ₃ •̀๑)', '(๑•̀_•́๑)', '(￣へ￣)', '૮( ᵒ̌皿ᵒ̌ )ა', '(╯°口°)╯(┴—┴', '╮(｡>口<｡)╭']
  html.onclick = function (e) {
    var value = parseInt(Math.random() * 100);
    var elem = document.createElement("b");
    elem.style.color = "#E" + parseInt(Math.random() * 90001 + 10000);
    elem.style.zIndex = 9999;
    elem.style.position = "absolute";
    elem.style.select = "none";
    var x = e.pageX;
    var y = e.pageY;
    elem.style.left = (x - 15) + "px";
    elem.style.top = (y - 25) + "px";
    if (value < 90) {
      elem.innerText = "❤";
    } else {
      elem.innerText = egg[parseInt(Math.random() * egg.length)]
    }
    elem.style.fontSize = Math.random() * 10 + 15 + "px";
    var increase = 0;
    var animation;
    setTimeout(function () {
      animation = setInterval(function () {
        if (++increase == 222) {
          body.removeChild(elem);
        }
        elem.style.top = y - 20 - increase + "px";
        elem.style.opacity = (150 - increase) / 120;
      }, 10);
    }, 20);
    body.appendChild(elem);
  };
};
