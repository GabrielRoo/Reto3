/*
FUNCIONES CLOUD
*/
function traerInformacion(){
    $.ajax({
        url:"https://gadb1c1db8c7523-prueba.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }
    });

}

function pintarRespuesta(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";

    }
    myTable +="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://gadb1c1db8c7523-prueba.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha guardado el registro correctamente")
        }
    });
}

function editarInformacion(){

    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://gadb1c1db8c7523-prueba.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha actualizado el registro correctamente")
        }
    });
}

function borrarElemento(idElemento){
    let myData = {
        id:idElemento   
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url:"https://gadb1c1db8c7523-prueba.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("resultado").empty;
            traerInformacion();
            alert ("Se ha eliminado el registro correctamente")
        }
    });
}
/*
FUNCION CLIENTE
*/
function traerInformacionCliente(){
    $.ajax({
        url:"https://gadb1c1db8c7523-prueba.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCliente(respuesta.items)
        }
    });

}

function pintarRespuestaCliente(items){

    let clientTable ="<table>";
    for(i=0;i<items.length;i++){
        clientTable+="<tr>";
        clientTable+="<td>"+items[i].id+"</td>";
        clientTable+="<td>"+items[i].name+"</td>";
        clientTable+="<td>"+items[i].email+"</td>";
        clientTable+="<td>"+items[i].age+"</td>";
        clientTable+="<td> <button onclick='borrarElementoCliente("+items[i].id+")'>Borrar</button>";
        clientTable+="</tr>";

    }
    clientTable +="</table>";
    $("#resultadoCliente").append(clientTable);
}

function guardarInformacionCliente(){
    let clientData={
        id:$("#idcliente").val(),
        name:$("#namecliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend = JSON.stringify(clientData);
    $.ajax({
        url:"https://gadb1c1db8c7523-prueba.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:clientData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoCliente").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("se ha guardado el registro correctamente")
        }
    });
}

function editarInformacionCliente(){

    let clientData={
        id:$("#idcliente").val(),
        name:$("#namecliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(clientData);
    let dataClientToSend = JSON.stringify(clientData);
    $.ajax({
        url:"https://gadb1c1db8c7523-prueba.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataClientToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoCliente").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("se ha actualizado el registro correctamente")
        }
    });
}

function borrarElementoCliente(idElemento){
    let clientData = {
        id:idElemento   
    };
    let dataClientToSend = JSON.stringify(clientData);
    $.ajax({
        url:"https://gadb1c1db8c7523-prueba.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataClientToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("resultadoCliente").empty;
            traerInformacionCliente();
            alert ("Se ha eliminado el registro correctamente")
        }
    });
}
/*
FUNCIONES MENSAJE
*/
function traerMensaje(){
    $.ajax({
        url:"https://gadb1c1db8c7523-prueba.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensaje(respuesta.items)
        }
    });

}

function pintarRespuestaMensaje(items){

    let messageTable ="<table>";
    for(i=0;i<items.length;i++){
        messageTable+="<tr>";
        messageTable+="<td>"+items[i].id+"</td>";
        messageTable+="<td>"+items[i].messagetext+"</td>";
        messageTable+="<td> <button onclick='borrarMensaje("+items[i].id+")'>Borrar</button>";
        messageTable+="</tr>";

    }
    messageTable +="</table>";
    $("#resultadoMensajes").append(messageTable);
}

function guardarMensaje(){
    let messageData={
        id:$("#idmensaje").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend = JSON.stringify(messageData);
    $.ajax({
        url:"https://gadb1c1db8c7523-prueba.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:messageData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensajes").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerMensaje();
            alert("se ha guardado el registro correctamente")
        }
    });
}

function editarMensaje(){

    let messageData={
        id:$("#idmensaje").val(),
        messagetext:$("#messagetext").val(),
    };
    console.log(messageData);
    let dataToSend = JSON.stringify(messageData);
    $.ajax({
        url:"https://gadb1c1db8c7523-prueba.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensajes").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerMensaje();
            alert("se ha actualizado el registro correctamente")
        }
    });
}

function borrarMensaje(idElemento){
    let messageData = {
        id:idElemento   
    };
    let dataToSend = JSON.stringify(messageData);
    $.ajax({
        url:"https://gadb1c1db8c7523-prueba.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("resultadoMensaje").empty;
            traerMensaje();
            alert ("Se ha eliminado el registro correctamente")
        }
    });
}