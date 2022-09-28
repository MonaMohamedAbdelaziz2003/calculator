var screen = document.getElementById("screen");
var screen2 = document.getElementById("screen2");
var num1, num2, ope, res;
var ids = ["but0", "but1", "but2"];
document.getElementById(ids[0]).onclick = function cli() {
    screen.textContent += document.getElementById(ids[0]).textContent;
}
document.getElementById(ids[1]).onclick = function cli() {
    screen.textContent += document.getElementById(ids[1]).textContent;
}
document.getElementById(ids[2]).onclick = function cli() {
    screen.textContent += document.getElementById(ids[2]).textContent;
}
document.getElementById("but3").onclick = function cli() {
    screen.textContent += document.getElementById("but3").textContent;
}
document.getElementById("but4").onclick = function cli() {
    screen.textContent += document.getElementById("but4").textContent;
}
document.getElementById("but5").onclick = function cli() {
    screen.textContent += document.getElementById('but5').textContent;
}
document.getElementById("but6").onclick = function cli() {
    screen.textContent += document.getElementById('but6').textContent;
}
document.getElementById("but7").onclick = function cli() {
    screen.textContent += document.getElementById('but7').textContent;
}
document.getElementById("but8").onclick = function cli() {
    screen.textContent += document.getElementById('but8').textContent;
}
document.getElementById("but9").onclick = function cli() {
    screen.textContent += document.getElementById('but9').textContent;
}
document.getElementById("but(").onclick = function cli() {
    screen.textContent += document.getElementById('but(').textContent;
}
document.getElementById("but)").onclick = function cli() {
    screen.textContent += document.getElementById('but)').textContent;
}
document.getElementById("but%").onclick = function cli() {
    screen.textContent += document.getElementById('but%').textContent;
    num1 = screen.textContent;
    ope = '%';
}
document.getElementById("but/").onclick = function cli() {
    screen.textContent += document.getElementById('but/').textContent;
    num1 = screen.textContent;
    ope = '/';
}
document.getElementById("but-").onclick = function cli() {
    screen.textContent += document.getElementById('but-').textContent;
    num1 = screen.textContent;
    ope = '-';
}
document.getElementById("butx").onclick = function cli() {
    screen.textContent += "X";
    num1 = screen.textContent;
    ope = '*';
}
document.getElementById("but+").onclick = function cli() {
    screen.textContent += document.getElementById('but+').textContent;
    num1 = screen.textContent;
    ope = '+';
}
document.getElementById("but.").onclick = function cli() {
    screen.textContent += this.textContent;
    num1 = screen.textContent;

}

document.getElementById("but=").onclick = function cli() {
    num1 = num1.slice(0, -1);
    var len1 = num1.length;
    num1 = parseFloat(num1);
    num2 = screen.textContent;
    num2 = num2.slice(len1 + 1, num2.length);
    num2 = parseFloat(num2);
    switch (ope) {
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        case '*':
            res = num1 * num2;
            break;
        case '/':
            if (num2 == 0) {
                res = "unknown";
            } else {
                res = num1 / num2;
            }
            break;
        case '%':
            res = num1 % num2;
            break;
    }
    screen2.textContent = res;
}


function dele() {
    if (screen2.textContent == '') {
        screen.textContent = screen.textContent.slice(0, -1);
    } else {
        screen2.textContent = '';
        screen.textContent = '';
    }
}
// window.onload = function() {
//     screen2.textContent = '';
//     screen.textContent = '';
// }