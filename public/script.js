const socket = io();

$('#send-btn').click( () =>{

    socket.emit('send-msg', {
        msg: $('#inp').val()
    })

    $('#inp').val("");
})

socket.on('received-msg' , (data) =>{
    $('#chat').prepend(`<li> <span style="color: grey">${data.id}</span> => <span style="color: blue">${data.msg}</span></li>`)
     console.log(data);
})