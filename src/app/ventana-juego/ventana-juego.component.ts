import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { DatosComponent, Estancia, Personaje, Objeto } from '../datos/datos.component';
import { TheCaseServiceService } from "../services/the-case-service.service"
import { Globales } from '../globales';



@Component({
  selector: 'app-ventana-juego',
  templateUrl: './ventana-juego.component.html',
  styleUrls: ['./ventana-juego.component.css']
})
export class VentanaJuegoComponent {
  datos: DatosComponent = new DatosComponent();
  main: MainComponent;

  constructor(private TheCaseServiceService: TheCaseServiceService){
    this.main = new MainComponent(TheCaseServiceService);
  }


  arrayEstancias: Estancia[] = [];
  arrayPersonajes: Personaje[] = [];
  arrayObjetos: Objeto[] = [];

  botonesGeneral: any = document.getElementsByClassName("btn");
  personajeGeneral: any = document.getElementsByClassName("personaje");
  objetosGeneral: any = document.getElementsByClassName("objetos");

  btnPregGeneral: any = document.getElementsByClassName('pregunta');

  btnPreg1: any = document.getElementsByClassName('btnPreg1');
  btnPreg2: any = document.getElementsByClassName('btnPreg2');
  btnPreg3: any = document.getElementsByClassName('btnPreg3');
  btnPreg4: any = document.getElementsByClassName('btnPreg4');
  btnPreg5: any = document.getElementsByClassName('btnPreg5');
  btnPreg6: any = document.getElementsByClassName('btnPreg6');


  botonesHall: any = document.getElementsByClassName('btnsHall');
  botonesHab1: any = document.getElementsByClassName('btnsHab1');
  botonesHab2: any = document.getElementsByClassName('btnsHab2');
  botonesHab3: any = document.getElementsByClassName('btnsHab3');
  botonesHab4: any = document.getElementsByClassName('btnsHab4');
  botonesHab5: any = document.getElementsByClassName('btnsHab5');
  botonesHab6: any = document.getElementsByClassName('btnsHab6');

  culpables: any[] = [];
  empezar: boolean = false;

  personajesMezclados: any[] = [];

  verJuego(){

    if(this.main.juego.style.display == "grid"){
      this.main.juego.style.display = "none";
      this.main.cuadroMisNotas.style.display = "none";
      this.main.cuadroTexto.style.display = "none";
      return false;
    } else {
      this.main.juego.style.display = "grid";
      this.main.cuadroMisNotas.style.display = "block";
      this.main.cuadroTexto.style.display = "block";
      return true;
    }

  }

  ngOnInit(){
    this.iniciarJuego();
    // console.log(this.arrayEstancias);
  }

  arrayCulpables(){
    for(var i = 0; i < 6; i++){
      this.arrayEstancias[i].rol;
      this.arrayObjetos[i].rol;
      this.arrayPersonajes[i].rol;

      if(this.arrayEstancias[i].rol == "Culpable"){
        this.culpables.push(this.arrayEstancias[i].nombre);
      }
      if (this.arrayObjetos[i].rol == "Culpable"){
        this.culpables.push(this.arrayObjetos[i].nombre)
      }
      if (this.arrayPersonajes[i].rol == "Culpable"){
        this.culpables.push(this.arrayPersonajes[i].nombre)
        Globales.nombreCulpbale = this.arrayPersonajes[i].nombre;
      }


    }
    // console.log(this.culpables);
    Globales.arrayCulpables = this.culpables;
  }

  ocultar(){
    if(this.botonesGeneral){
      for (var i = 0;i < this.botonesGeneral.length;i++){
        this.botonesGeneral[i].style.display = "none";
      }
      for (var p = 0;p < this.personajeGeneral.length;p++){
        this.personajeGeneral[p].style.display = "none";
      }

      for(var o = 0;o < this.objetosGeneral.length;o++){
        this.objetosGeneral[o].style.display = "none";
      }

      for(var b = 0;b < this.btnPregGeneral.length;b++){
        this.btnPregGeneral[b].style.display = "none";
      }
    }
  }

  verEstancia(nombreEstancia: string){
    var estancia;

    this.ocultar();
    switch(nombreEstancia){
      case "hall":
        this.main.cuadroTexto.innerHTML = '<b>' + "- Hall -" + '</b>' + '<br>' + this.datos.textoIntro.replace("{NOMBRE}", '<b>' + Globales.nombreJugador + '</b>');
        this.main.juego.style.backgroundImage = this.datos.imgEstancias[0];

        for (var i = 0;i < this.botonesHall.length;i++){
          this.botonesHall[i].style.display = "block";
        }

        break;
      case "hab1":
        this.main.cuadroTexto.innerHTML = '<b>' + this.arrayEstancias[0].nombre + '</b>' + '<br>' + this.arrayEstancias[0].descripcion;
        this.main.juego.style.backgroundImage = this.arrayEstancias[0].imagen;

        for (var i = 0;i < this.botonesHab1.length;i++){
          this.botonesHab1[i].style.display = "block";
        }

        estancia = document.createElement("option");
        estancia.value = "Sala de RV";
        estancia.text = "Sala de RV";

        if(!this.ifOptionExists("opcionesEstancias", estancia.value)){
          this.main.opcionesEstancias.appendChild(estancia);
        }

        break;
      case "hab2":
        this.main.cuadroTexto.innerHTML =  '<b>' + this.arrayEstancias[1].nombre + '</b>' + '<br>' + this.arrayEstancias[1].descripcion;
        this.main.juego.style.backgroundImage = this.arrayEstancias[1].imagen;

        for (var i = 0;i < this.botonesHab2.length;i++){
          this.botonesHab2[i].style.display = "block";
        }

        estancia = document.createElement("option");
        estancia.value = "Centro de I+D";
        estancia.text = "Centro de I+D";

        if(!this.ifOptionExists("opcionesEstancias", estancia.value)){
          this.main.opcionesEstancias.appendChild(estancia);
        }

        break;
      case "hab3":
        this.main.cuadroTexto.innerHTML =  '<b>' + this.arrayEstancias[2].nombre + '</b>' + '<br>' + this.arrayEstancias[2].descripcion;
        this.main.juego.style.backgroundImage = this.arrayEstancias[2].imagen;

        for (var i = 0;i < this.botonesHab3.length;i++){
          this.botonesHab3[i].style.display = "block";
        }

        estancia = document.createElement("option");
        estancia.value = "Laboratorio de IT";
        estancia.text = "Laboratorio de IT";

        if(!this.ifOptionExists("opcionesEstancias",estancia.value)){
          this.main.opcionesEstancias.appendChild(estancia);
        }

        break;
      case "hab4":
        this.main.cuadroTexto.innerHTML =  '<b>' + this.arrayEstancias[3].nombre + '</b>' + '<br>' + this.arrayEstancias[3].descripcion;
        this.main.juego.style.backgroundImage = this.arrayEstancias[3].imagen;

        for (var i = 0;i < this.botonesHab4.length;i++){
          this.botonesHab4[i].style.display = "block";
        }

        estancia = document.createElement("option");
        estancia.value = "Área de descanso";
        estancia.text = "Área de descanso";

        if(!this.ifOptionExists("opcionesEstancias", estancia.value)){
          this.main.opcionesEstancias.appendChild(estancia);
        }

        break;
      case "hab5":
        this.main.cuadroTexto.innerHTML =  '<b>' + this.arrayEstancias[4].nombre + '</b>' + '<br>' + this.arrayEstancias[4].descripcion;
        this.main.juego.style.backgroundImage = this.arrayEstancias[4].imagen;

        for (var i = 0;i < this.botonesHab5.length;i++){
          this.botonesHab5[i].style.display = "block";
        }

        estancia = document.createElement("option");
        estancia.value = "Estudio de diseño de IA";
        estancia.text = "Estudio de diseño de IA";

        if(!this.ifOptionExists("opcionesEstancias", estancia.value)){
          this.main.opcionesEstancias.appendChild(estancia);
        }


        break;
      case "hab6":
        this.main.cuadroTexto.innerHTML =  '<b>' + this.arrayEstancias[5].nombre + '</b>' + '<br>' + this.arrayEstancias[5].descripcion;
        this.main.juego.style.backgroundImage = this.arrayEstancias[5].imagen;

        for (var i = 0;i < this.botonesHab6.length;i++){
          this.botonesHab6[i].style.display = "block";
        }

        estancia = document.createElement("option");
        estancia.value = "Sala de entrenamiento con RA";
        estancia.text = "Sala de entrenamiento con RA";

        if(!this.ifOptionExists("opcionesEstancias", estancia.value)){
          this.main.opcionesEstancias.appendChild(estancia);
        }

        break;
    }

  }

  verPersonaje(numero: number){

    for(var o = 0;o < this.objetosGeneral.length;o++){
      this.objetosGeneral[o].style.display = "none";
    }
    switch (numero){
      case 0:
        if(this.personajeGeneral[numero].style.display == "block"){
          this.main.cuadroTexto.textContent = "";
          this.personajeGeneral[numero].style.display = "none";
          for(let i = 0; i < this.btnPreg1.length; i++){
            this.btnPreg1[i].style.display = "none";
          }
        } else {
          this.personajeGeneral[numero].style.display = "block";
          for(let i = 0; i < this.btnPreg1.length; i++){
            this.btnPreg1[i].style.display = "block";
          }
        }
        break;
      case 1:
        if(this.personajeGeneral[numero].style.display == "block"){
          this.main.cuadroTexto.textContent = "";
          this.personajeGeneral[numero].style.display = "none";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg2[i].style.display = "none";
          }
        } else {
          this.personajeGeneral[numero].style.display = "block";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg2[i].style.display = "block";
          }
        }
        break;
      case 2:
        if(this.personajeGeneral[numero].style.display == "block"){
          this.main.cuadroTexto.textContent = "";
          this.personajeGeneral[numero].style.display = "none";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg3[i].style.display = "none";
          }
        } else {
          this.personajeGeneral[numero].style.display = "block";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg3[i].style.display = "block";
          }
        }
        break;
        case 3:
        if(this.personajeGeneral[numero].style.display == "block"){
          this.main.cuadroTexto.textContent = "";
          this.personajeGeneral[numero].style.display = "none";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg4[i].style.display = "none";
          }
        } else {
          this.personajeGeneral[numero].style.display = "block";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg4[i].style.display = "block";
          }
        }
        break;
        case 4:
        if(this.personajeGeneral[numero].style.display == "block"){
          this.main.cuadroTexto.textContent = "";
          this.personajeGeneral[numero].style.display = "none";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg5[i].style.display = "none";
          }
        } else {
          this.personajeGeneral[numero].style.display = "block";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg5[i].style.display = "block";
          }
        }
        break;
        case 5:
        if(this.personajeGeneral[numero].style.display == "block"){
          this.main.cuadroTexto.textContent = "";
          this.personajeGeneral[numero].style.display = "none";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg6[i].style.display = "none";
          }
        } else {
          this.personajeGeneral[numero].style.display = "block";
          for(let i = 0; i < this.btnPreg2.length; i++){
            this.btnPreg6[i].style.display = "block";
          }

        }
        break;
      }
  }

  verObjeto(numero: number){
    var objeto;

    this.main.cuadroTexto.textContent = "";
    if(this.objetosGeneral[numero].style.display == "block"){
      this.objetosGeneral[numero].style.display = "none";
    } else {
      this.objetosGeneral[numero].style.display = "block";
      this.main.cuadroTexto.innerHTML = "<b>" + this.arrayEstancias[numero].objeto.nombre + "</b>" + "<br>" + this.arrayEstancias[numero].objeto.descripcion;

      objeto = document.createElement("option");
      objeto.value = this.arrayObjetos[numero].nombre;
      objeto.text = this.arrayObjetos[numero].nombre;

      if(!this.ifOptionExists("opcionesObjetos", objeto.value)){
        this.main.opcionesObjetos.appendChild(objeto);
      }
    }
  }


  mezclarArray(array: any[]): any {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  iniciarJuego(){
    this.mezclarArray(this.datos.imgPersonaje);
    this.mezclarArray(this.datos.imgObjetos);
    this.mezclarArray(this.datos.rolEstanciaYObjeto);
    this.mezclarArray(this.datos.rolPersonajes);
    this.mezclarArray(this.datos.respuestaCoartadaInocente);
    this.mezclarArray(this.datos.respuestaCoartadaCulpable);
    this.mezclarArray(this.datos.respuestaAcusacionSincero);
    this.mezclarArray(this.datos.respuestaAcusacionMentiroso);
    this.mezclarArray(this.datos.respuestaAcusacionCulpable);
    this.mezclarArray(this.datos.respuestaAcusacionRico);
    this.mezclarArray(this.datos.respuestaAcusacionPobre);
    this.mezclarArray(this.datos.respuestaAcusacionCotilla);
    this.mezclarArray(this.datos.respuestaNombre);
    this.mezclarArray(this.datos.descripcionObjetoCulpable);
    this.mezclarArray(this.datos.descripcionObjetoInocente);

    for (var o = 0; o < 6; o++){
      this.arrayPersonajes[o] = new Personaje();
      this.arrayPersonajes[o].rol = this.datos.rolPersonajes[o];
      this.arrayPersonajes[o].imagen = this.datos.imgPersonaje[o];
      this.arrayPersonajes[o].nombre = this.setNombrePersonaje(this.arrayPersonajes[o].imagen);

      switch(this.arrayPersonajes[o].rol){
        case "Culpable":
          Globales.nombreCulpbale = this.arrayPersonajes[o].nombre;
          break;
        case "Sincero":
          Globales.nombreSincero = this.arrayPersonajes[o].nombre;
          break;
        case "Mentiroso":
          Globales.nombreMentiroso = this.arrayPersonajes[o].nombre;
          break;
        case "Rico":
          Globales.nombreRico = this.arrayPersonajes[o].nombre;
          break;
        case "Pobre":
          Globales.nombrePobre = this.arrayPersonajes[o].nombre;
          break;
        case "Cotilla":
          Globales.nombreCotilla = this.arrayPersonajes[o].nombre;
          break;
      }

      this.personajesMezclados.push(this.arrayPersonajes[o]);
    }

    for (var i = 0; i < 6;i++){

      this.personajesMezclados[i].respNombre = this.datos.respuestaNombre[i].replace("{NOMBRE}", this.personajesMezclados[i].nombre);
      if (this.personajesMezclados[i].rol != "Culpable"){
        this.personajesMezclados[i].respCoartada = this.datos.respuestaCoartadaInocente[i];
      } else {
        this.personajesMezclados[i].respCoartada = this.datos.respuestaCoartadaCulpable[0];
      }
      this.personajesMezclados[i].respAcusar = this.setRespuestaAcusacion(this.personajesMezclados[i].rol)


      this.arrayObjetos[i] = new Objeto();
      this.arrayObjetos[i].imagen = this.datos.imgObjetos[i];
      this.arrayObjetos[i].nombre = this.setNombreObjeto(this.arrayObjetos[i].imagen);
      this.arrayObjetos[i].rol = this.datos.rolEstanciaYObjeto[i];
      if (this.arrayObjetos[i].rol != "Culpable"){
        this.arrayObjetos[i].descripcion = this.datos.descripcionObjetoInocente[i];
      } else {
        this.arrayObjetos[i].descripcion = this.datos.descripcionObjetoCulpable[i];
      }


      this.arrayEstancias[i] = new Estancia();
      this.arrayEstancias[i].nombre = this.datos.nombreEstacnias[i];
      this.arrayEstancias[i].imagen = this.datos.imgEstancias[i+1];
      this.arrayEstancias[i].rol = this.datos.rolEstanciaYObjeto[i];
      if(this.arrayEstancias[i].rol != "Culpable"){
        this.arrayEstancias[i].descripcion = this.datos.descEstanciasInocente[i];
      }else {
        this.arrayEstancias[i].descripcion = this.datos.descEstanciasCulpbale[i];
      }
      this.arrayEstancias[i].personaje = this.arrayPersonajes[i];
      this.arrayEstancias[i].objeto = this.arrayObjetos[i];
    }
    this.arrayCulpables();
  }


  respuestasPersonaje(numero: number, estancias: Estancia[], pregunta: string){
    var personaje;
    switch (pregunta){
      case "nombre":
        this.main.cuadroTexto.textContent = estancias[numero].personaje.respNombre;

        personaje = document.createElement("option");
        personaje.value = estancias[numero].personaje.nombre;
        personaje.text = estancias[numero].personaje.nombre;

        if(!this.ifOptionExists("opcionesPersonajes", personaje.value)){
          this.main.opcionesPersonajes.appendChild(personaje);
        }
        break;
      case "acusar":
        this.main.cuadroTexto.textContent = estancias[numero].personaje.respAcusar;
        break;
      case "coartada":
        this.main.cuadroTexto.textContent = estancias[numero].personaje.respCoartada;
        break;
    }
  }

  setRespuestaAcusacion(rol: string){
    var respuesta = "";
    switch(rol){
      case "Sincero":
        respuesta = this.datos.respuestaAcusacionSincero[0].replace("{NOMBRE}", Globales.nombreCulpbale);
        break;
      case "Mentiroso":
        respuesta = this.datos.respuestaAcusacionMentiroso[0].replace("{NOMBRE}", Globales.nombreSincero);
        break;
      case "Culpable":
        respuesta = this.datos.respuestaAcusacionCulpable[0];
        break;
      case "Rico":
        respuesta = this.datos.respuestaAcusacionRico[0].replace("{NOMBRE}", Globales.nombrePobre);
        break;
      case "Pobre":
        respuesta = this.datos.respuestaAcusacionPobre[0].replace("{NOMBRE}", Globales.nombreRico);
        break;
      case "Cotilla":
        respuesta = this.datos.respuestaAcusacionCotilla[0];
        break;
    }
    return respuesta;
  }

  setNombrePersonaje(imagen: string){
    var nombre = "";
    switch(imagen){
      case "../../assets/img/personajes/Noah_Rios/noah.png":
        nombre = "Noah Ríos";
        break;
      case "../../assets/img/personajes/Doctor_X/doctor.png":
        nombre = "Doctor X";
        break;
      case "../../assets/img/personajes/Emily_Yang/emily.png":
        nombre = "Emily Yang";
        break;
      case "../../assets/img/personajes/Isa_Cortés/isa.png":
        nombre = "Isa Cortés";
        break;
      case "../../assets/img/personajes/Mei_Chen/mei.png":
        nombre = "Mei Chen";
        break;
      case "../../assets/img/personajes/Vicky_Peña/vicky.png":
        nombre = "Vicky Peña";
        break;
    }
    this.mezclarArray(this.datos.respuestaNombre);
    return nombre;
  }

  setNombreObjeto(imagen: string){
    var nombre = "";
    switch(imagen){
      case "../../assets/img/objetos/objetos/5.png":
        nombre = "Proyector holográfico";
        break;
      case "../../assets/img/objetos/objetos/10.png":
        nombre = "Cuchillo de cerámica";
        break;
      case  "../../assets/img/objetos/objetos/6.png":
        nombre = "Bastón de oro";
        break;
      case "../../assets/img/objetos/objetos/8.png":
        nombre = "Motor de pulso";
        break;
      case "../../assets/img/objetos/objetos/1.png":
        nombre = "Jarrón decorativo";
        break;
      case "../../assets/img/objetos/objetos/2.png":
        nombre = "Huevo de titanio";
        break;
    }
    return nombre;
  }

  ifOptionExists(nombre: string, valorBuscado: string) {
    var negativo = false;
    switch(nombre){
      case "opcionesEstancias":
        for (let i = 0; i < this.main.opcionesEstancias.options.length; i++) {
          if (this.main.opcionesEstancias.options[i].value === valorBuscado) {
            negativo = true;
          }
        }
        break;
      case "opcionesPersonajes":
        for (let i = 0; i < this.main.opcionesPersonajes.options.length; i++) {
          if (this.main.opcionesPersonajes.options[i].value === valorBuscado) {
            negativo = true;
          }
        }
        break;
      case "opcionesObjetos":
        for (let i = 0; i < this.main.opcionesObjetos.options.length; i++) {
          if (this.main.opcionesObjetos.options[i].value === valorBuscado) {
            negativo = true;
          }
        }
        break;
    }
    return negativo;
  }
}



