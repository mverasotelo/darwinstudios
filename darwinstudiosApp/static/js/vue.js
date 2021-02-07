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
        espacios:["NAVE NICETO", "NAVE DARWIN", "HALL", "NAVE D", "ESTUDIO STREAMING","EXTERIORES","ESPACIO 1+1","LADO B"],
        caracteristicas:[["Dimensiones: 28,65 m x 16,9 m","Superficie: 484 m²","Altura: 9 m, hasta la pasarela técnica","Entrada de vehiculo: 4,68 m x 4,2 m","Espacio sin columnas","Tablero Trifásico con 1 toma A63 y 2 tomas A32, con disyuntores independientes","Potencia total: A127. Consultar por más capacidad","2 camarines privados","1 sala de vestuario, maquillaje y pelo","Baños","Zona comedor y descanso, con living y mesas","Espacio para catering","Baños","Estacionamiento"],
        ["Dimensiones: 41 m x 13 m","Superficie: 533 m²","Altura: 4,2 m","Entrada de vehículo: 4 m x 3,7 m","Espacio con columnas","Tablero Trifásico con 1 toma A63 y 2 tomas A32, con disyuntores independientes","Potencia total: A127. Consultar por más capacidad","2 camarines privados","1 sala de vestuario, maquillaje y pelo","Zona comedor y descanso, con livings y mesas","Espacio para catering","Baños","Estacionamiento"],
        ["Dimensiones: 15,61 m x 14,09 m","Superficie: 220 m²","Altura: 4,2 m","Espacio con columnas","Zona comedor y descanso, con livings y mesas","1 camarín privado","1 Sala de vestuario, maquillaje y pelo","Espacio para catering","Baños","Estacionamiento"],
        ["Dimensiones: 33.42 m x 13,79 m","Superficie: 460 m²","Altura: 4,2 m","Planta libre (mesas movibles): 234 m² (24 m x 9,75 m)","Camarines compartidos y privados","Baños","Sala de vestuario, maquillaje y pelo","Zona comedor y descanso, con mesas y livings","Espacio para catering","Estacionamiento"],
        ["Propuesta integral de estudio y técnica, a cargo de Darwin Studios, Repila Corporate y Streamcenter BA","Venue: Nave Niceto","Incluye estacionamiento, exteriores y Hall","Iluminación","Sonido","Video y pantalla LED","Streaming"],
        ["Dimensiones: 43m x 25 m","Superficie: 1075 m²"],
        ["Un espacio único y en continua transformación, compartido por creadores y artistas","Ideal para acciones con formato Tiny Desk"],
        ],
        caracteristica:"",
        titulo:"",
        popUp:"",
        imagenes:[["/static/img/Niceto1.jpg","/static/img/Niceto2.jpg"],["/static/img/Darwin.jpg"],["/static/img/Hall1.jpg","/static/img/Hall2.jpg"],["/static/img/Dstudio1.jpg","/static/img/Dstudio2.jpg"],["/static/img/Streaming2.jpeg","/static/img/Streaming3.jpeg","/static/img/Streaming.jpg"],["/static/img/darwin_studios_nosotros.jpg"],["/static/img/Espacio1+1.jpg","/static/img/Espacio1+1.2.jpg"],["/static/img/LadoB1.jpg","/static/img/Converse1.jpg","/static/img/Converse2.jpg","/static/img/Converse3.jpg","/static/img/Converse4.jpg"]],
        tempFoto:0,
        tempEspacio:"",
        imagenEspacio:"",
        plano:"",
        planoHref:"",
        texto:"",
        next:"next icon fas fa-angle-right",
        back:"back icon fas fa-angle-left",
        },
    methods:{
        infoEspacio: function(n){
            this.popUp="popUp";
            this.tempEspacio=n;
            this.titulo=this.espacios[n];
            this.caracteristica=this.caracteristicas[n];  
            this.imagenEspacio=this.imagenes[n][0];
            document.body.style.overflow='hidden';
            this.agregarPlano();
            if(this.imagenes[n].length<2){
                this.next="disabled-icon";
                this.back="disabled-icon";
            }else{
                this.next="next icon fas fa-angle-right";
                this.back="back icon fas fa-angle-left";
            }
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
        agregarPlano: function(){
            if(this.tempEspacio==0||this.tempEspacio==1||this.tempEspacio==2){
                this.texto="Ver Plano"
                this.plano="plano";
                this.planoHref="/static/img/DarwinStudios_Plano.pdf";
            }
            if(this.tempEspacio==3){
                this.plano="plano";
                this.texto="Ver Plano"
                this.planoHref="/static/img/DarwinStudios_Fabrica_Plano.pdf";
            }
            if(this.tempEspacio==4){
                this.plano="plano";
                this.texto="Ver Propuesta"
                this.planoHref="/static/img/DarwinStudios_Propuesta_Streaming.pdf";
            }
        },
    },
});

new Vue({
    el:"#producciones",
    data:{
        popUp:"",
        producciones:["Esta noche🌙","Solita RMX","JAE 2020", "Agapornis","You Tube","Converse","Comicon","Cyberpunk2077","Buena Vibra y 1+1","Plata Quemada"],
        videos:["https://www.youtube.com/embed/Z-TkiF4xeJ0","https://www.youtube.com/embed/RCnursIWCmY","","https://www.youtube.com/embed/Z9IMV4fFsoI","","https://www.youtube.com/embed/nThgp6a_OZM","https://www.youtube.com/embed/0MGCMyVVpHc","","https://www.youtube.com/embed/1t7J90rAr3I","https://www.youtube.com/embed/SUschdjn0mc"],   
        videoUrl:"",
        imagenes:[["/static/img/EstaNoche2.jpg","/static/img/EstaNoche3.jpg"],
        ["/static/img/SolitaRMX1.jpg","/static/img/SolitaRMX2.jpg"],
        [],
        ["/static/img/Agapornis1.jpg", "/static/img/Agapornis2.jpg"],
        ["/static/img/Youtube1.jpg","/static/img/Youtube3.jpg"],
        [],
        [],
        ["/static/img/Cyberpunk1.jpg","/static/img/Cyberpunk2.jpg"],
        [],
        []],
        imagenTrabajo:"",
        tempFoto:0,
        tempTrabajo:0,
        contenidoTrabajo:"",
        next:"next icon fas fa-angle-right",
        back:"disabled-icon",
    },
    methods:{
        infoTrabajo: function(n){
            //abrir cuadro de la producción
            this.tempTrabajo=n;
            this.popUp="popUp";
            document.body.style.overflow='hidden';
            //manejo de controles
            this.back="disabled-icon";
            //establecer imagen o video inicial
            this.videoUrl=this.videos[n];                
            this.imagenTrabajo=this.imagenes[n][0];
            if(this.imagenes[n].length>0){
                this.cargarFoto();
            }
            else{
                this.cargarVideo();
            }
            //manejo de controles
            if(this.imagenes[this.tempTrabajo].length!=0){
                this.next="next icon fas fa-angle-right";
            }
            else{
                this.next="disabled-icon";
            }
        },
        cerrarCuadro: function(){
            this.popUp="";
            this.contenidoTrabajo="";
            this.tempFoto=0;
            document.body.style.overflow='auto';
            },
        pasarFoto: function(){
            //pasar foto a otra foto
            if(this.tempFoto<(this.imagenes[this.tempTrabajo].length)-1){
                this.tempFoto++;
                this.cargarFoto();
            }
            //pasar ultima foto a video
            else{
                if(this.videos[this.tempTrabajo]!=""){
                    this.cargarVideo();
                    this.tempFoto++;
                }
                this.next="disabled-icon";
            }
            this.back="back icon fas fa-angle-left";
        },
        retrocederFoto: function(){
            if(this.tempFoto>0){
                this.tempFoto--;
                if(this.tempFoto==0){
                    this.back="disabled-icon";
                }
            }
            this.next="next icon fas fa-angle-right";
            this.cargarFoto();
        },
        cargarVideo: function(){
            this.contenidoTrabajo="<iframe src='"+this.videoUrl+"' frameborder='0' allow='accelerometer' controls='0'; autoplay allowfullscreen></iframe>";
        },
        cargarFoto: function(){
            this.imagenTrabajo=this.imagenes[this.tempTrabajo][this.tempFoto];
            this.contenidoTrabajo="<img src='"+this.imagenTrabajo+"' alt ='"+this.producciones[this.tempTrabajo]+"' title='"+this.producciones[this.tempTrabajo]+"'>";
        }
    }
});