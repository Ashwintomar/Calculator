function insert(num) {
    var display = document.getElementById('result');
    if (num === '.' && display.value.includes('.')) {
        return; // Prevent multiple decimal points in a number
    }
    display.value = display.value + num;
}

function clean() {
    document.getElementById('result').value = "";
}

function equal() {
    var exp = document.getElementById('result').value;
    if (exp) {
        try {
            var result = eval(exp);
            if (!isFinite(result)) {
                throw new Error("Result is not a finite number");
            }
            document.getElementById('result').value = result;
            addToHistory(exp + " = " + result);
        } catch (e) {
            alert('Error: ' + e.message);
            clean();
        }
    }
}

function addToHistory(entry) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(entry));
    document.getElementById('historyList').appendChild(li);
}
