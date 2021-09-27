

        const titulares = document.querySelector("#titulares");

        let datos = [];

        let temple = "";

        let like = false;

        let dislike = false;

        let idComent = "";

        function onRead(id) {
                
                
                      /* Agregar una vista en el registro */
            let visita = id.toString() + ',0,0,0,1';
            let vUrl = `https://script.google.com/macros/s/AKfycbzH9pWsj19fELz-RGCNndeNGFZfh2fDPRC1sfyMiTZ8r-Ie0BlWuRtwbRIq8TMzo4TK/exec?v1=${visita}`;
            $.getJSON(vUrl);
                

            temple = '';
            lsComentario = '';
            idComent = id;

            datos.map(m => {

               

                if (m.id === id.toString()) {

                    temple += `<div class="w3-col w3-padding w3-center">
                        <h1 class="w3-center">
                          ${m.title} 
                        </h1>

                    <br>
                      
                      <p class="w3-por"> por: ${m.author} </p>
                      <p>Publicado:</span> ${moment(m.datePublicacion).format("LL")} </p>
                      


                    
                    <img src="${m.imageUrl}" alt="image"  width="50%" height="auto"/>

                    <br>
                    
               
                    <p class="w3-margin-top opinion"><span onClick="doLike(${m.id})"   
                        class="w3-margin"><i id="like" class="w3-padding fa fa-thumbs-up"></i></span><span onClick="doDislike(${m.id})" 
                        class="w3-margin"><i id="dislike" class="w3-padding fa fa-thumbs-down"></i></span><span onclick="document.getElementById('id01').style.display='block'" class="w3-button" class="w3-margin"><i class="w3-padding fa fa-share"></i></span></p>
    
                     <br>
                     <div class="w3-col w3-justify" >${m.content}</div>
                     <br>

                      <br>
                      <br>

                     <div> <h1 class="w3-center">Comentarios </h1>
                          `;

                    m.commentsContent.map(c => {
                        iUrl = "https://drive.google.com/uc?id=1YOUxYOe5LYnSiCgnD7jeiOIWMrEV6I7A";
                        lsComentario += `
                             
                             


                            <div class="w3-col w3-card w3-padding w3-margin-bottom">

                                     <div class="grid-item">
                                  
                                        <img src='${iUrl}' alt="image"  height="50px" width="50px">
                                  
                                 
                                        <p class="w3-por w3-text-red" style="margin-left:15px;">${c.author}</p>
                                 
                               
                                        <p style="margin-left:15px; font-style:italic; font-weight:bold;">${moment(c.fecha).startOf('hour').fromNow()}</p>
                                  
                                 
                                        <p style="margin-left:25px;">${c.content}</p>
                                
                                   </div>
                                   
            
                            </div>

                            
                                   

                             `;
                    });

                    temple += lsComentario + `    

                      
                     </div>

                     <div class="w3-col m6 l6">

                    <div class="w3-panel" id="alertMessage">
                         <h3 id="alertTitle"></h3>
                         <p id="alertText"></p>
                    </div> 

                

                    <br>
                    <br>

                    <form action="javascript:void(0);" class="w3-container w3-card-4 w3-light-grey w3-text-blue w3-padding">
                       <p class="w3-col w3-center w3-black">Comentar</p>
                       <br>
 
                    
                    <div class="w3-row w3-section">
                    <div class="w3-col" style="width:50px"><i class="w3-large fa fa-user"></i></div>
                        <div class="w3-rest">
                        <input class="w3-input w3-border w3-margin" id="fullName" name="fullName" type="text" placeholder="Nombre ..." required>
                        </div>
                    </div>

                    



                    <div class="w3-row w3-section">
                    <div class="w3-col" style="width:50px"><i class="w3-large fa fa-pencil"></i></div>
                        <div class="w3-rest">
                        
                        <textarea class="w3-input w3-border" id="comentario" name="comentario"  cols="30" rows="3" placeholder="Comente aqui..." required></textarea>

                        </div>
                    </div>

                    <button class="w3-button w3-col w3-teal"  onclick="sendMessage()">Publicar Comentario</button>

             </form>
        </div>

        <button class="w3-col w3-button w3-black" onClick = "goDisplay()"> Regresar </button>
       
   </div>`;
                }
            })

            titulares.innerHTML = temple;

            temple = '';
                
        }

        function goDisplay() {

           
            temple = '';


            like = false;
            dislike = false;

            datos.map(post => {

            
                temple += `<div class="w3-card w3-col w3-padding w3-center"> 
                    
                    <h1 class="w3-center">
                          ${post.title} 
                         
    
                    </h1>

                    <p class="w3-por"> por: ${post.author} </p>
                    <p>Publicado:</span> ${moment(post.datePublicacion).format("LL")} </p>
                      

                    
                    <img  src="${post.imageUrl}" alt="image"  width="50%" height="auto"/>

                   

                    <p> Visitas ${post.visita}</p>
                    
                    <p class="w3-center w3-col"><span><i class="w3-padding fa fa-thumbs-up"></i>${post.likes}</span><span>
                    <i class="w3-padding fa fa-thumbs-down"></i>${post.dislikes}</span><span><i class="w3-padding fa fa-comment"></i>${post.comments}</span></p>
    

                    <br>
                    <div class="w3-center">${post.content.substr(0, 100)} ...</div>
                    <br>
                   
                      <button class="w3-button w3-margin w3-blue" onClick = "onRead(${post.id})"> Leer </button>
                  
                 </div>`;
            });

            titulares.innerHTML = temple;

        }


        function doLike(id) {


            if (!like) {
                let likeClicked = document.getElementById("like");


                like = true;

                like ? likeClicked.style = 'color:red' : likeClicked.style = 'color:black';

                let dislikeClicked = document.getElementById("dislike");
                like ? dislikeClicked.style = 'color:black' : dislikeClicked.style = 'color:black';


                setLike(id, like);



            }

           // dislike = !like;



        }

        function doDislike(id) {

            if (!dislike) {
                let dislikeClicked = document.getElementById("dislike");

                dislike = true;

                dislike ? dislikeClicked.style = 'color:red' : dislikeClicked.style = 'color:black';

                let likeClicked = document.getElementById("like");
                dislike ? likeClicked.style = 'color:black' : likeClicked.style = 'color:black';

                setDislike(id, dislike);

            }

          //  like = !dislike;
        }

        function doComment(id,author,comment,date) {
            let clComentario = comment.replace(',',' :)');
            let data = id+','+author+','+clComentario+','+date;
            let urlComentarios = `https://script.google.com/macros/s/AKfycbyiOUiD8n2KPdKXhB4GfGUu2pg3u557d1cztm0knzdm1_2Zh-DgVIB1FgOGUtV8dRdJrg/exec?v1=${data}`;
            $.getJSON(urlComentarios);
                
             /* Agregar 1 comentario en el registro */
            let comen = id + ',0,0,1';
            let rUrl = `https://script.google.com/macros/s/AKfycbzH9pWsj19fELz-RGCNndeNGFZfh2fDPRC1sfyMiTZ8r-Ie0BlWuRtwbRIq8TMzo4TK/exec?v1=${comen}`;
            $.getJSON(rUrl, function (data) { });


        
        }

 
        function setLike(id, respuesta) {

            if (respuesta) {
                let data = id + ',1,0,0,0';
                let rUrl = `https://script.google.com/macros/s/AKfycbzH9pWsj19fELz-RGCNndeNGFZfh2fDPRC1sfyMiTZ8r-Ie0BlWuRtwbRIq8TMzo4TK/exec?v1=${data}`;
                $.getJSON(rUrl, function (data) { });

                var url = 'https://script.google.com/macros/s/AKfycbxSY629YlI1vH5pEyWU6JKD8txtNYC6oyMm5viNCupXcbKgHajfBtCCASdKvFeoLsrAIw/exec'
                $.getJSON(url, function (data) {

                    setTimeout(() => datos = data, 3000)

                });




            }

        }

        function setDislike(id, respuesta) {

            if (respuesta) {
                let data = id + ',0,1,0,0';
                let rUrl = `https://script.google.com/macros/s/AKfycbzH9pWsj19fELz-RGCNndeNGFZfh2fDPRC1sfyMiTZ8r-Ie0BlWuRtwbRIq8TMzo4TK/exec?v1=${data}`;
                $.getJSON(rUrl, function (data) { });

                 // Link the las publicaciones
                var url = 'https://script.google.com/macros/s/AKfycbxSY629YlI1vH5pEyWU6JKD8txtNYC6oyMm5viNCupXcbKgHajfBtCCASdKvFeoLsrAIw/exec'
                $.getJSON(url, function (data) {
                    setTimeout(() => datos = data, 3000)
                });

            }
        }


        function doShare() {
            // alert("Share");
        }


        function sendMessage() {

            const fullName = document.getElementById("fullName").value;
            const textComentario = document.getElementById("comentario").value;
            if (textComentario !== '') {

                document.getElementById("alertMessage").style = "background:green";
                document.getElementById("alertTitle").style = "color:white";
                document.getElementById("alertTitle").innerText = "Exito!"
                document.getElementById("alertText").style = "color:white";
                document.getElementById("alertText").innerText = "Su comentario ha sido enviado correctamente.";

                // Function de BackEnd here 

                // fullName
                // textComentario 
                let fecha = new Date();



                doComment(idComent,fullName,textComentario,fecha);

                setTimeout(() => {
                    document.getElementById("alertMessage").style = "display:none";

                    document.getElementById("fullName").value = '';
                    document.getElementById("comentario").value = '';
                }, 3000);


            } else {
                document.getElementById("alertMessage").style = "background:red";
                document.getElementById("alertTitle").style = "color:white";
                document.getElementById("alertTitle").innerText = "Atención!"
                document.getElementById("alertText").style = "color:white";
                document.getElementById("alertText").innerText = "Informacion Incompleta";
                document.getElementById("alertMessage").display = "block";

                setTimeout(() => { document.getElementById("alertMessage").style = "display:none" }, 3000);
            }




        }



        /* Funciones para compartir social media*/

        //Facebook

        //http://www.facebook.com/sharer/sharer.php?u=url

        var buttons = document.querySelectorAll(".social_share");

        for (var i = 0; i < buttons.length; i++) {

            buttons[i].addEventListener('click', function () {

                return JSShare.go(this);

            }, false);
        }






        /* Get Data for the backEnd Google sheet*/

        function getData() {

            var url = 'https://script.google.com/macros/s/AKfycbxSY629YlI1vH5pEyWU6JKD8txtNYC6oyMm5viNCupXcbKgHajfBtCCASdKvFeoLsrAIw/exec'
            $.getJSON(url, function (data) {
                datos = data;

                console.log(datos);
            });

            setTimeout(() => { goDisplay(); document.getElementById("spinner").style = "display:none" }, 3000);

        }

        getData();



        //let myDate = moment(new Date()).format('LL');
        //console.log(myDate);



   
