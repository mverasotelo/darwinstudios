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
        imagenes:[["/static/img/Niceto1.jpg"],["/static/img/Cyberpunk.jpg"],["/static/img/NaveFabrica.jpg"],["/static/img/Hall1.jpg","/static/img/Hall2.jpg"],["/static/img/Dstudio1.jpg","/static/img/Dstudio2.jpg"],["/static/img/1+1studio2.jpg"],["/static/img/Exteriores2.jpg"],["/static/img/Terraza2.jpg"]],
        tempFoto:0,
        tempEspacio:"",
        imagenEspacio:"",
        plano:"",
        planoHref:""
        },
    methods:{
        infoEspacio: function(n){
            this.popUp="popUp";
            this.tempEspacio=n;
            this.titulo=this.espacios[n];
            this.caracteristica=this.caracteristicas[n];  
            this.imagenEspacio=this.imagenes[n][0];
            document.body.style.overflow='hidden';
            this.agregarMapa();
        },
        cerrarCuadro: function(){
            this.popUp="";
            document.body.style.overflow ='auto';
            this.plano="";
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
        },
        agregarMapa: function(){
            if(this.tempEspacio==0||this.tempEspacio==1||this.tempEspacio==3){
                this.plano="plano";
                this.planoHref="/static/img/DarwinStudios_Plano.pdf";
            }
            if(this.tempEspacio==2){
                this.plano="plano";
                this.planoHref="/static/img/DarwinStudios_Fabrica_Plano.pdf";
            }
        },
    },
});

new Vue({
    el:"#producciones",
    data:{
        popUp:"",
        producciones:["Converse", "Esta noche🌙","You Tube","Solita RMX","Perdiste por gil","Mutis","Buena Vibra y 1+1","Comicon","Cyberpunk","Plata Quemada"],
        videos:["https://www.youtube.com/embed/nThgp6a_OZM","https://www.youtube.com/embed/Z-TkiF4xeJ0","","https://www.youtube.com/embed/RCnursIWCmY","https://www.youtube.com/embed/Z9IMV4fFsoI","","https://www.youtube.com/embed/1t7J90rAr3I","https://www.youtube.com/embed/0MGCMyVVpHc","","https://www.youtube.com/embed/SUschdjn0mc"],   
        videoUrl:"",
        imagenes:[["/static/img/Converse1.jpg","/static/img/Converse2.jpg","/static/img/Converse3.jpg","/static/img/Converse4.jpg"],
        ["/static/img/EstaNoche1.jpg","/static/img/EstaNoche2.jpg","/static/img/EstaNoche3.jpg","/static/img/EstaNoche4.jpg","/static/img/EstaNoche5.jpg"],
        ["/static/img/Youtube.jpg", "/static/img/Youtube2.jpg", "/static/img/Youtube3.jpg", "/static/img/Dstudio1.jpg"],
        ["/static/img/Hall1.jpg","/static/img/Hall2.jpg"],
        ["/static/img/Dstudio1.jpg","/static/img/Dstudio2.jpg","/static/img/Dstudio3.jpg"],
        ["/static/img/1+1studio2.jpg"],
        ["/static/img/Exteriores2.jpg"],
        ["/static/img/Terraza2.jpg"]],
        imagenTrabajo:"",
        tempFoto:0,
        tempTrabajo:0,
        contenidoTrabajo:"",
        next:"icon",
        back:"icon"

    },
    methods:{
        infoTrabajo: function(n){
            this.tempTrabajo=n;
            this.back="disabled-icon";
            this.next="icon";
            this.popUp="popUp";
            this.videoUrl=this.videos[n];
            this.imagenTrabajo=this.imagenes[n][0];
            this.contenidoTrabajo="<img src='"+this.imagenTrabajo+"' alt ='"+this.producciones[n]+"' title='"+this.producciones[n]+"'>";
        },
        cerrarCuadro: function(){
            this.popUp="";
            this.videoUrl="";
            this.tempFoto=0;
        },
        pasarFoto: function(){
            if(this.tempFoto<(this.imagenes[this.tempTrabajo].length)-1){
                this.tempFoto=this.tempFoto+1;
                this.back="icon";
                this.imagenTrabajo=this.imagenes[this.tempTrabajo][this.tempFoto];
                this.contenidoTrabajo="<img src='"+this.imagenTrabajo+"' alt ='"+this.producciones[this.tempTrabajo]+"' title='"+this.producciones[this.tempTrabajo]+"'>";
            }
            if(this.tempFoto==(this.imagenes[this.tempTrabajo].length)-1){
                if(this.videos[this.tempTrabajo].length!=0){
                    this.cargarVideo();
                }
                this.next="disabled-icon";
            }
        },
        retrocederFoto: function(){
            if(this.tempFoto>0){
                this.tempFoto=this.tempFoto-1;
                this.next="icon";
                this.imagenTrabajo=this.imagenes[this.tempTrabajo][this.tempFoto];
                this.contenidoTrabajo="<img src='"+this.imagenTrabajo+"' alt ='"+this.producciones[this.tempTrabajo]+"' title='"+this.producciones[this.tempTrabajo]+"'>";
            }
            if(this.tempFoto==0){          
                this.back="disabled-icon";
                this.next="icon";
            }
        },
        cargarVideo: function(){
            this.contenidoTrabajo="<iframe src='"+this.videoUrl+"' frameborder='0' allow='accelerometer' controls='0'; autoplay allowfullscreen></iframe>";
        }
    }
});