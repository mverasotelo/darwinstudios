//cargar pagina
window.onload= function(){
    new Vue({
        el:"#loader",
        data:{
            show:""
        }
    });
}

// abrir/cerrar menu
new Vue({
    el:"#menuDesp",
    data:{
        iconoMenu:"icon fas fa-bars",
        menuClass:"cerrarMenu",
    },
    methods:{
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
    el:"#espacios",
    delimiters:['{[',']}'],
    data:{
        espacios:["NAVE NICETO", "NAVE DARWIN", "NAVE FÁBRICA", "HALL", "D-STUDIO", "1+1 STUDIO", "EXTERIORES", "TERRAZA Y DEPÓSITOS"],
        caracteristicas:[["Dimensiones: 28,65 m x 16,9 m","Superficie: 484 m²","Altura: 9 m, hasta la pasarela técnica","Entrada de vehiculo: 4,68 m x 4,2 m","Espacio sin columnas","Tablero Trifásico con 1 toma A63 y 2 tomas A32, con disyuntores independientes","Potencia total: A127","Camarines compartidos y privados","Baños","Salas de producción y reuniones","Zona comedor y descanso","Espacio para catering","Estacionamiento"],
        ["Dimensiones: 41 m x 13 m","Superficie: 533 m²","Altura: 4,2 m","Entrada de vehículo: 4 m x 3,7 m","Espacio con columnas","Tablero Trifásico con 1 toma A63 y 2 tomas A32, con disyuntores independientes","Potencia total: A127","Camarines compartidos y privados","Baños","Salas de producción y reuniones","Zona comedor y descanso","Espacio para catering","Estacionamiento"],
        ["Dimensiones: 33.42 m x 13,79 m","Superficie: 460 m²","Altura: 4,2 m","Planta libre (mesas movibles): 234 m² (24 m x 9,75 m)","Camarines compartidos y privados","Baños","Salas de producción y reuniones","Zona comedor y descanso","Espacio para catering","Estacionamiento"],
        ["Dimensiones: 15,61m x 14,09 m","Superficie: 220 m²","Altura: 4,2 m","Espacio con columnas","Camarines compartidos y privados","Baños","Salas de producción y reuniones","Zona comedor y descanso","Espacio para catering","Estacionamiento"],
        ["Superficie: 40m²","Altura: 4,2 m","Camarines compartidos y privados","Baños","Salas de producción y reuniones","Zona comedor y descanso","Espacio para catering","Estacionamiento"],
        ["Superficie: 115m²","Altura: 4,2 m","Camarines compartidos y privados","Baños","Salas de producción y reuniones","Zona comedor y descanso","Espacio para catering","Estacionamiento"],
        ["Dimensiones: 43 m x 25 m","Superficie: 1075 m²"],
        ["Dimensiones: 17,53 m x 5,50 m","Superficie: 96,4 m²","Más de 1000 m² de depósitos y áreas de guardado"],
        ],
        caracteristica:"",
        titulo:"",
        popUp:"",
        espacio:"",
        imagenes:["/static/img/NaveNiceto2.jpg","/static/img/Cyberpunk.jpg","/static/img/NaveFabrica2.jpg","/static/img/NaveHall2.jpeg","/static/img/Dstudio2.jpg","/static/img/1+1studio2.jpg","/static/img/Exteriores2.jpg","/static/img/Terraza2.jpg"],
        imagenEspacio:""
        },
    methods:{
        infoEspacio: function(n){
            this.popUp="popUp";
            this.titulo=this.espacios[n];
            this.caracteristica=this.caracteristicas[n];  
            this.imagenEspacio=this.imagenes[n];
            document.body.style.overflow='hidden';
        },
        cerrarCuadro: function(){
            this.popUp="";
            document.body.style.overflow ='auto';
        },
    }
});

new Vue({
    el:"#trabajos",
    data:{
        popUp:"",
        espacio:"",
        imagenes:["img/2.jpg","","","","","","img/Exteriores2.jpg",""],
        imagenTrabajo:"img/Agapornis.jpg"
    },
    methods:{
        infoTrabajo: function(n){
            this.popUp="popUp";
            document.body.style.overflow='hidden';
        },
        cerrarCuadro: function(){
            this.popUp="";
            document.body.style.overflow ='auto';
        },
    }
});