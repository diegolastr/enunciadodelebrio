const calculo = () => {
    let muestreo = 500
    let calles = 10
    let exito = 0

    for (let i = 0; i < muestreo; i++) {
        var x = 0
        var y = 0

        for (let j = 0; j < calles; j++) {

            let r = Math.random()

            if (r > 0.5) {

                if (r > 0.75) {
                    x = x + 1
                } else {
                    x = x - 1
                }
            } else {

                if (r > 0.25) {
                    y = y + 1
                } else {
                    y = y - 1
                }
            }
        }
        let sumatoria = Math.abs(x + y)

        if (sumatoria === 2) {
            exito++
        }
    }
    console.log(exito / muestreo * 100)
    const table = document.getElementById('table');
    /* table.setAttribute('id',table.key);
    table.setAttribute('class', "card"); */
    table.innerHTML = `<table class="table" id="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">PRUEBA</th>
        <th scope="col"> CANTIDAD DE PRUEBAS</th>
        <th scope="col">QUEDO A 2 CUADRAS</th>
        <th scope="col">PROBABILIDAD</th>
        <th scope="col">PORCENTAJE %</th>
      </tr>
    </thead>
    <tbody>
    <tr>
    <th scope="row">1</th>
    <td>${muestreo} veces</td>
    <td>${exito} veces</td>
    <td>${exito / muestreo}</td>
    <td>${exito / muestreo * 100}%</td>
    </tr>
  </tbody>`;
    return table;
};

calculo()




/* var X = 0;
var Y = 0;
var R = 0;
var sum;
var res;


function calcular(X, Y, R, res, sum) {
    for (var N = 0; N < 10; N++){
        R = Math.random();
        R <= 0.25 ? Y++ : R <= 0.50 ? Y-- : R<= 0,75 ? X++ : X--;
    }

    sum = Math.abs(X + Y);
    if (X == 0 && Y == 2  ||
        X == 2 && Y == 0  ||
        X == 0 && Y == -2 ||
        X == -2 && Y == 0 ||
        X == 1 && Y == 1  ||
        X == 1 && Y == -1 ||
        X == -1 && Y == 1 ||
        X == -1 && Y == -1){
        alert ("el ebrio quedo a 2 cuadras de su posición inicial")
}else{
    alert ("el ebrio NO QUEDO A 2 CUADRAS de su posición incial");
}
} */
