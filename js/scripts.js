let respuesta = document.getElementById('respuesta');
let chart = document.getElementById('chart');
let users = "";
var detalle_u = "";
var usuarios_login = [];
var usuarios_seguidores = [];
var nameuser = "";
const findUser = () => {
    
    const nameuser_input = document.getElementById('nameuser');
    nameuser=nameuser_input.value;
    if(nameuser.length<4){
        alert("Debe colocar mas de 4 caracteres"); return false;
    }
    if(nameuser=="doublevpartners"){
        alert("Busqueda no permitida"); return false;
    }
    //console.log(nameuser);
    //console.log('https://api.github.com/search/users?q='+nameuser);
    fetch('https://api.github.com/search/users?q='+nameuser)
          .then(response => response.json() )
          .then(json => { 
            //console.log(json);
            users=json.items;
            muestrauser(nameuser);
         });
}

function detalle_usuario(i){
  // https://api.github.com/users/YOUR_NAME
     fetch('https://api.github.com/users/'+i)
     .then(response => response.json() )
     .then(json => { 
       console.log(json);
       user.objectu=json;
       console.log("detalle  "+user.objectu.login); 
    });
    //console.log("detalle  https://api.github.com/users/"+i); 
}

var seguidores=""; var pre_usuarios="";
var coma=""; var coma2="";

function seguidores_usuario(i){
  // https://api.github.com/users/YOUR_NAME
    fetch('https://api.github.com/users/'+i)
     .then(response => response.json() )
     .then(json => { 
       f = json.followers;
       seguidores += coma+f;
       coma=",";

       u = i;
       pre_usuarios += coma2+"'"+u+"'";
       coma2=",";

    });
    //console.log("detalle  https://api.github.com/users/"+i); 
}

const muestrauser = (nameuser) => {
    respuesta.innerHTML = "";
    for(let i=1; i<=10; i++){  
        //usuarios_login.push(users[i].login);   
        seguidores_usuario(users[i].login);
        //seguidores="";
        respuesta.innerHTML += 
        `<div class="row">
          <div class="col-2">
            <a href="#" onclick="detalle_usuario('${users[i].login}')" class="" data-bs-toggle="modal" data-bs-target="#detalle_usuario">
            ${users[i].id}</a>
          </div>
          <div class="col">${users[i].login}</div>
        </div>`;
    }
    respuesta.innerHTML += `<br><a href="#" onclick="ver_grafica()">Ver Gráfica</a>`;
    $("#chart").html("");
    

}

function ver_grafica(){
  if(seguidores!=""){  //  debe tenermas de 10 comas
    $.post("grafica.php",{ u_login:nameuser, usuarios:pre_usuarios, seg:seguidores }, function(htmlexterno){
      $("#chart").html(htmlexterno);
      ///console.log(htmlexterno)
    });
    seguidores = [];
    nameuser = "";  
  } else {
     console.log("Por favor espere");
  }
}


var user = new Vue({
    el: '#v-for-user',
    data: {
      objectu: detalle_u
    }
  })

/*
var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Aprender JavaScript' },
        { text: 'Aprender Vue' },
        { text: 'Construir algo increíble' }
      ]
    }
  })
  */
 /*
 new Vue({
    el: '#v-for-user',
    data: {
      object: detalle_u
    }
  })
  */