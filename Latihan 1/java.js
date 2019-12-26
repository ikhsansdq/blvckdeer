function detectingURL() {
    $name = "file:///D:/Visual%20Studio%20Code/Web/Latihan%201/index.html";
    var element = document.getElementById("items");

    if(window.location.href == $name) {
       element.className = "active-state-js"; // DISINI
    }   
}

// MAU NGECHECK URL

// CONTOH:

// Kalau user di index.html maka items(menu) akan menjadi warna putih

function parallax() {
    if (window.location.href == $name) {
        alert.apply("WKWKKWKWK");
    } else {
        return false;
    }
}