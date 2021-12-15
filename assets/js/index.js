function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function terminaleffect() {
    var user_input = ["v ", "v s", "v sk", "v skr", "v skri", "v skril", "v skrill", "v skrille", "v skrillec", "v skrillec.", "v skrillec.v ", "v skrillec.v -", "v skrillec.v -o", "v skrillec.v -o", "v skrillec.v -o c", "v skrillec.v -o cn", "v skrillec.v -o cnc"];
    var arraylength = user_input.length;

    for(var i = 0; i < arraylength; i++) {
        document.getElementById("terminaleffect").innerHTML = user_input[i];
        await sleep(300);
    }
}

terminaleffect()