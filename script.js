// cette fonction affiche les valeurs
function display(value) {
    document.getElementById("result").value += value;
    }
    // cette fonction efface toutes les valeurs
    function clearScreen() {
        document.getElementById("result").value = "";
        }
        
        function cal() {
            let a = document.getElementById("result").value;
            let b = eval(a);
            document.getElementById("result").value = b;
            }