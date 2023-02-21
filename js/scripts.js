let respuesta = document.getElementById('respuesta');
let users = "";
var detalle_u = "";

const findUser = () => {
    
    const nameuser_input = document.getElementById('nameuser');
    nameuser=nameuser_input.value;
    //console.log(nameuser);
    //console.log('https://api.github.com/search/users?q='+nameuser);
    fetch('https://api.github.com/search/users?q='+nameuser)
          .then(response => response.json() )
          .then(json => { 
            //console.log(json);
            users=json.items;
            muestrauser()
         });
}

function detalle_usuario(i){
  // https://api.github.com/users/YOUR_NAME
     fetch('https://api.github.com/users/'+i)
     .then(response => response.json() )
     .then(json => { 
       console.log(json);
       user.objectu=json;
    });
    console.log("detalle  "+user.objectu.login); 
}

const muestrauser = () => {
    respuesta.innerHTML = "";
    for(let i=1; i<=10; i++){        
        respuesta.innerHTML += 
        `<div class="row">
          <div class="col-2">
            <a href="#" onclick="detalle_usuario('${users[i].login}')" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#detalle_usuario">
            ${users[i].id}</a>
          </div>
          <div class="col">${users[i].login}</div>
        </div>`;
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