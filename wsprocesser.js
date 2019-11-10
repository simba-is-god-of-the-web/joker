function ws(server){
    const io = require("socket.io")(server);
    let event, onEvent;
    [event, onEvent]= wsrouter('connection',io);
    console.log(event);
    io.on(event,onEvent);
    // io.on('connection', function(socket){
    //     console.log('a user connected');
    // });      
    return io;
}

function wsrouter(event,io){
    function onEvent(socket){
        console.log(event);
        console.log('a user connected');
        // socket.emit('request', /* */); // emit an event to the socket
        // io.emit('broadcast', /* */); // emit an event to all connected sockets
        // socket.on('reply', function(data){
        //     console.log("data")
        // }); // listen to the event
    }
    return [event,onEvent];
}

module.exports = ws

