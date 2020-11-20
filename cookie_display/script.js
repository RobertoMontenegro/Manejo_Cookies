//Cookies:
  //La última dirección que buscaste por teclado
  //La localización de los marcadores que dejaste en el mapa
  //El estilo de mapa que elegiste

//Se buscan los datos en las cookies y se agregan al html. Se ejecuta al cargar la página
function showCookies() {
  let lastSearchedLocation = document.getElementById("last-searched-location");
  let markersLocation = document.getElementById("markers-location");
  let preferredStyle = document.getElementById("preferred-style");

  lastSearchedLocation.textContent = getCookie("LastSearchedLocation");
  markersLocation.textContent = getCookie("MarkersLocation");
  preferredStyle.textContent = JSON.stringify(getCookie("Style"));
}

//Obtiene la cookie que tenga el nombre pasado por parámetro
function getCookie(cookieName) { 
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}