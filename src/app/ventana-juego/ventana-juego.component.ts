import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { DatosComponent, Estancia, Personaje, Objeto } from '../datos/datos.component';


@Component({
  selector: 'app-ventana-juego',
  templateUrl: './ventana-juego.component.html',
  styleUrls: ['./ventana-juego.component.css']
})
export class VentanaJuegoComponent {
  imgPersonajes: DatosComponent = new DatosComponent();

  main: MainComponent = new MainComponent();

  botonesGeneral: any = document.getElementsByClassName("btn");
  personajeGeneral: any = document.getElementsByClassName("personaje");
  objetosGeneral: any = document.getElementsByClassName("objetos");

  btnPregGeneral: any = document.getElementsByClassName('pregunta');
  btnPregIzq: any = document.getElementsByClassName('btnPregIzq');
  btnPregDer: any = document.getElementsByClassName('btnPregDer');

  botonesHall: any = document.getElementsByClassName('btnsHall');
  botonesHab1: any = document.getElementsByClassName('btnsHab1');
  botonesHab2: any = document.getElementsByClassName('btnsHab2');
  botonesHab3: any = document.getElementsByClassName('btnsHab3');
  botonesHab4: any = document.getElementsByClassName('btnsHab4');
  botonesHab5: any = document.getElementsByClassName('btnsHab5');
  botonesHab6: any = document.getElementsByClassName('btnsHab6');

  imgEstancias: DatosComponent = new DatosComponent();

  verJuego(){
    this.main.verJuego();
    this.iniciarJuego();
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
    if(this.main.juego){
      this.ocultar();
      switch(nombreEstancia){
        case "hall":
          this.main.juego.style.backgroundImage = this.imgEstancias.imgEstancias[0];

          for (var i = 0;i < this.botonesHall.length;i++){
            this.botonesHall[i].style.display = "block";
          }

          break;
        case "hab1":
          this.main.juego.style.backgroundImage = "url('../../assets/img/fondos/estancias/hab_uno.jpg')";

          for (var i = 0;i < this.botonesHab1.length;i++){
            this.botonesHab1[i].style.display = "block";
          }

          break;
          case "hab2":
          this.main.juego.style.backgroundImage = "url('../../assets/img/fondos/estancias/hab_dos.jpg')";

          for (var i = 0;i < this.botonesHab2.length;i++){
            this.botonesHab2[i].style.display = "block";
          }

          break;
          case "hab3":
          this.main.juego.style.backgroundImage = "url('../../assets/img/fondos/estancias/hab_tres.jpg')";

          for (var i = 0;i < this.botonesHab3.length;i++){
            this.botonesHab3[i].style.display = "block";
          }

          break;
          case "hab4":
          this.main.juego.style.backgroundImage = "url('../../assets/img/fondos/estancias/hab_cuatro.jpg')";

          for (var i = 0;i < this.botonesHab4.length;i++){
            this.botonesHab4[i].style.display = "block";
          }

          break;
          case "hab5":
          this.main.juego.style.backgroundImage = "url('../../assets/img/fondos/estancias/hab_cinco.jpg')";

          for (var i = 0;i < this.botonesHab5.length;i++){
            this.botonesHab5[i].style.display = "block";
          }

          break;
          case "hab6":
          this.main.juego.style.backgroundImage = "url('../../assets/img/fondos/estancias/hab_seis.jpg')";

          for (var i = 0;i < this.botonesHab6.length;i++){
            this.botonesHab6[i].style.display = "block";
          }

          break;
      }
    }
  }

  verPersonaje(numero: number){
    if (numero < 3){
      if(this.personajeGeneral[numero].style.display == "block"){
        this.personajeGeneral[numero].style.display = "none";
        for(let i = 0; i < this.btnPregIzq.length; i++){
          this.btnPregIzq[i].style.display = "none";
        }
      } else {
        this.personajeGeneral[numero].style.display = "block";
        for(let i = 0; i < this.btnPregIzq.length; i++){
          this.btnPregIzq[i].style.display = "block";
        }
      }
    } else {
      if(this.personajeGeneral[numero].style.display == "block"){
        this.personajeGeneral[numero].style.display = "none";
        for(let i = 0; i < this.btnPregDer.length; i++){
          this.btnPregDer[i].style.display = "none";
        }
      } else {
        this.personajeGeneral[numero].style.display = "block";
        for(let i = 0; i < this.btnPregDer.length; i++){
          this.btnPregDer[i].style.display = "block";
        }
      }
    }

  }

  verObjeto(numero: number){
    if(this.objetosGeneral){
      if(this.objetosGeneral[numero].style.display == "block"){
        this.objetosGeneral[numero].style.display = "none";
      } else {
        this.objetosGeneral[numero].style.display = "block";
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
    this.mezclarArray(this.imgPersonajes.imgPersonaje);
    this.mezclarArray(this.imgPersonajes.imgObjetos);
  }
}

