const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => { //Agrega un evento de escucha al elemento con el id "expand_btn" que se activa cuando se hace clic en él.
  document.body.classList.toggle("collapsed"); //Cambia la presencia de la clase "collapsed" en la lista de clases del elemento <body>. Si la clase "collapsed" está presente, se eliminará; de lo contrario, se agregará.
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => { //Itera sobre cada elemento en la lista allLinks.
  elem.addEventListener('click', function() { // Agrega un evento de escucha a cada elemento que se activa cuando se hace clic en él.
    const hrefLinkClick = elem.href; //Guarda el valor del atributo href del elemento en la variable hrefLinkClick.

    allLinks.forEach((link) => { //Itera sobre cada elemento en la lista allLinks nuevamente.
      if (link.href == hrefLinkClick){ //Verifica si el valor del atributo href del elemento actual coincide con el valor guardado en hrefLinkClick.
        link.classList.add("active"); //Agrega la clase "active" al elemento si el valor del atributo href coincide.
      } else {
        link.classList.remove('active'); // Elimina la clase "active" del elemento si el valor del atributo href no coincide.
      }
    });
  })
});