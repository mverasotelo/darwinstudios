/*import {VueHammer} from 'vue2-hammer';
Vue.use(VueHammer);


Vue.directive("swipeleft", {
    bind: function(el, binding) {
      if (typeof binding.value === "function"){
        var mc = new Hammer(el);
        mc.add(new Hammer.Swipe({ 
        direction: Hammer.DIRECTION_LEFT 
        }));
        mc.on("swipeleft", binding.value);
      }
    }
});
*/

//cargar pagina
window.onload= function(){
    new Vue({
        el:"#loader",
        data:{
            show:""
        }
    });
}

new Vue({
    el:"#menuDesp",
    data:{
        iconoMenu:"icon fas fa-bars",
        menuClass:"cerrarMenu",
    },
    methods:{
/*cambioHeader: function(){
            if (this.currentScroll == 0){
                this.headerClass="header";
                //header.style="transition:ease 0.5s";
                return;
            }
            if (this.currentScroll > this.lastScroll) {
                this.headerClass="header scroll-down";
            }else if (this.currentScroll < this.lastScroll){
                this.headerClass="header scroll-up";
                //this.headerClass="transition:ease 0.5s";
            }
            this.lastScroll = this.currentScroll;
        },*/
        desplegarMenu: function(){
            if(this.iconoMenu=="icon fas fa-bars"){
                this.iconoMenu="icon fas fa-times";
                this.menuClass="abrirMenu";
                document.body.style.overflow='hidden';
            }else{
                this.iconoMenu="icon fas fa-bars";
                this.menuClass="cerrarMenu";
                document.body.style.overflow ='auto';
            }
        },
    }
});

new Vue({
    el:"#explora",
    delimiters:['{[',']}'],
    data:{
        espacios:["NAVE NICETO", "NAVE DARWIN", "NAVE FÁBRICA", "HALL", "D-STUDIO", "1+1 STUDIO", "EXTERIORES", "TERRAZA Y DEPÓSITOS"],
        caracteristicas:[["Dimensiones: 28,65 m x 16,9 m","Superficie: 484 m²","Altura: 9 m, hasta la pasarela técnica","Entrada de vehiculo: 4,68 m x 4,2 m","Espacio sin columnas","Tablero Trifásico con 1 toma A63 y 2 tomas A32, con disyuntores independientes","Potencia total: A127","Camarines compartidos y privados","Baños","Salas de producción y reuniones","Zona comedor y descanso","Espacio para catering","Estacionamiento"],
        ["Dimensiones: 41 m x 13 m","Superficie: 533 m²","Altura: 4,2 m","Entrada de vehículo: 4 m x 3,7 m","Espacio con columnas","Tablero Trifásico con 1 toma A63 y 2 tomas A32, con disyuntores independientes","Potencia total: A127","Camarines compartidos y privados","Baños","Salas de producción y reuniones","Zona comedor y descanso","Espacio para catering","Estacionamiento"],
        ["Dimensiones: 33.42 m x 13,79 m","Superficie: 460 m²","Altura: 4,2 m","Planta libre (mesas movibles): 234 m² (24 m x 9,75 m)","Camarines compartidos y privados","Baños","Salas de producción y reuniones","Zona comedor y descanso","Espacio para catering","Estacionamiento"],
        ["Dimensiones: 15,61 m x 14,09 m","Superficie: 220 m²","Altura: 4,2 m","Espacio con columnas","Camarines compartidos y privados","Baños","Salas de producción y reuniones","Zona comedor y descanso","Espacio para catering","Estacionamiento"],
        ["Superficie: 40 m²","Altura: 4,2 m","Camarines compartidos y privados","Baños","Salas de producción y reuniones","Zona comedor y descanso","Espacio para catering","Estacionamiento"],
        ["Superficie: 115 m²","Altura: 4,2 m","Camarines compartidos y privados","Baños","Salas de producción y reuniones","Zona comedor y descanso","Espacio para catering","Estacionamiento"],
        ["Dimensiones: 43 m x 25 m","Superficie: 1075 m²"],
        ["Dimensiones: 17,53 m x 5,50 m","Superficie: 96,4 m²","Más de 1000 m² de depósitos y áreas de guardado"],
        ],
        caracteristica:"",
        titulo:"",
        popUp:"",
        espacio:"",
        imagenes:[["/static/img/Niceto1.jpg"],["/static/img/Cyberpunk.jpg"],["/static/img/NaveFabrica.jpg"],["/static/img/Hall1.jpg","/static/img/Hall2.jpg"],["/static/img/Dstudio1.jpg","/static/img/Dstudio2.jpg"],["/static/img/1+1studio2.jpg"],["/static/img/Exteriores2.jpg"],["/static/img/Terraza2.jpg"]],
        tempFoto:0,
        tempEspacio:"",
        imagenEspacio:""
        },
    methods:{
        infoEspacio: function(n){
            this.popUp="popUp";
            this.tempEspacio=n;
            this.titulo=this.espacios[n];
            this.caracteristica=this.caracteristicas[n];  
            this.imagenEspacio=this.imagenes[n][0];
            document.body.style.overflow='hidden';
        },
        cerrarCuadro: function(){
            this.popUp="";
            document.body.style.overflow ='auto';
        },
        pasarFoto: function(){
            if(this.tempFoto<(this.imagenes[this.tempEspacio].length)-1){
                this.tempFoto=this.tempFoto+1;
            }
            else{
                this.tempFoto=0;
            }
            this.imagenEspacio=this.imagenes[this.tempEspacio][this.tempFoto];
        },
        retrocederFoto: function(){
            if(this.tempFoto>0){
                this.tempFoto=this.tempFoto-1;
            }
            else{
                this.tempFoto=(this.imagenes[this.tempEspacio].length)-1;
            }
            this.imagenEspacio=this.imagenes[this.tempEspacio][this.tempFoto];
        }
    }
});

new Vue({
    el:"#producciones",
    data:{
        popUp:"",
        producciones:["Converse", "Esta noche🌙","You Tube","Solita RMX","Perdiste por gil","Mutis","Buena Vibra y 1+1","Comicon","Cyberpunk","Plata Quemada"],
        videos:["https://www.youtube.com/embed/nThgp6a_OZM","https://www.youtube.com/embed/Z-TkiF4xeJ0","","https://www.youtube.com/embed/RCnursIWCmY","https://www.youtube.com/embed/Z9IMV4fFsoI","","https://www.youtube.com/embed/1t7J90rAr3I","https://www.youtube.com/embed/0MGCMyVVpHc","","https://www.youtube.com/embed/SUschdjn0mc"],   
        videoUrl:"",
        imagenes:[["/static/img/Converse1.jpg","/static/img/Converse2.jpg","/static/img/Converse3.jpg","/static/img/Converse4.jpg"],["/static/img/Converse2.jpg"],["/static/img/NaveFabrica.jpg"],["/static/img/Hall1.jpg","/static/img/Hall2.jpg"],["/static/img/Dstudio1.jpg","/static/img/Dstudio2.jpg","/static/img/Dstudio3.jpg"],["/static/img/1+1studio2.jpg"],["/static/img/Exteriores2.jpg"],["/static/img/Terraza2.jpg"]],
        imagenTrabajo:"",
        tempFoto:0,
        tempTrabajo:0,
        contenidoTrabajo:""
    },
    methods:{
        infoTrabajo: function(n){
            this.tempEspacio=n;
            this.popUp="popUp";
            this.videoUrl=this.videos[n];
            this.imagenTrabajo=this.imagenes[n][0];
            this.contenidoTrabajo="<img src='"+this.imagenTrabajo+"' alt ='"+this.producciones[n]+"' title='"+this.producciones[n]+"'>";
        },
        cerrarCuadro: function(){
            this.popUp="";
            this.videoUrl="";
        },
        pasarFoto: function(){
            if(this.tempFoto<(this.imagenes[this.tempTrabajo].length)-1){
                this.tempFoto=this.tempFoto+1;
            }
            else{
                this.tempFoto=0;
            }
            this.imagenTrabajo=this.imagenes[this.tempTrabajo][this.tempFoto];
        },
        retrocederFoto: function(){
            if(this.tempFoto>0){
                this.tempFoto=this.tempFoto-1;
            }
            else{
                this.tempFoto=(this.imagenes[this.tempTrabajo].length)-1;
            }
            this.imagenTrabajo=this.imagenes[this.tempTrabajo][this.tempFoto];
        }
    }
});