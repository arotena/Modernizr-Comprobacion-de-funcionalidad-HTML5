
function comprobar() {
   p1 = document.getElementById('fin');
   if (Modernizr.canvas) {
       p1.innerHTML = "canvas soportado"
   }else{
     p1.innerHTML = "canvas no soportado"
   }
   if (Modernizr.video) {
      p1.innerHTML += ", video soportado"
  }else{
      p1.innerHTML += ", video no soportado"
  }
  if (Modernizr.geolocation) {
     p1.innerHTML += " y geolocalizacion soportado"
  }else{
     p1.innerHTML += " y geolocalizacion no soportado"
  }
}
