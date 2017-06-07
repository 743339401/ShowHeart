onload = function () {
        var value = 1;
        var html = document.getElementsByTagName("html")[0];
        var body = document.getElementsByTagName("body")[0];
        html.onclick = function (e) {
            var elem = document.createElement("b");
            elem.style.color = "#E" + parseInt(Math.random() * 90001 + 10000);
            elem.style.zIndex = 9999;
            elem.style.position = "absolute";
            elem.style.select = "none";
            var x = e.pageX;
            var y = e.pageY;
            elem.style.left = (x - 15) + "px";
            elem.style.top = (y - 25) + "px";

            if (value % 29 == 0) {
                elem.innerText = "OωO";
            } else if (value % 38 == 0) {
                elem.innerText = "(๑•́ ∀ •̀๑)";
            } else if (value % 39 == 0) {
                elem.innerText = "(๑•́ ₃ •̀๑)";
            } else if (value % 40 == 0) {
                elem.innerText = "(๑•̀_•́๑)";
            } else if (value % 42 == 0) {
                elem.innerText = "(￣へ￣)";
            } else if (value % 43 == 0) {
                elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
            } else if (value % 45 == 0) {
                elem.innerText = "(╯°口°)╯(┴—┴";
            } else if (value % 48 == 0) {
                elem.innerText = "╮(｡>口<｡)╭";
            } else if (value % 50 == 0) {
                elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง";
            } else {
                elem.innerText = "❤";
            }
            value = parseInt(Math.random() * 1000 + 1);
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
