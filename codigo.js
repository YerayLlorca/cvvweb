function Idioma() {
    var idioma = document.getElementById('Idioma').value
    if (idioma == 'ES') {
        window.location.href = '../index.html'
    } else {
        window.location.href = './en/index.html'
    }
}