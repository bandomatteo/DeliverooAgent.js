const { io } = require("socket.io-client");
const { EventEmitter } = require("events");

class DeliverooApi extends EventEmitter {
    
    /** @type {Socket<DefaultEventsMap, DefaultEventsMap>} */
    socket;

    constructor ( host, token ) {

        super();

        this.socket = io( host, {
            extraHeaders: {
                'x-token': token
            },
            // query: {
            //     name: "scripted",
            // }
        });

        this.socket.on( "you", ({id, name, x, y, score} ) => {
            this.emit( "you", {id, name, x, y, score} )
        });

    }

    async move ( direction ) {
        return new Promise( (success, reject) => {
            this.socket.emit( 'move', direction, async (status) =>  {
                if (status) {
                    success();
                } else {
                    reject();
                }
            } );
        } );
    }

    async pickup (  ) {
        return new Promise( (success) => {
            this.socket.emit( 'pickup', async ( picked ) =>  {
                success( picked);
            } );
        } );
    }

    async putdown (  ) {
        return new Promise( (success) => {
            this.socket.emit( 'putdown', async ( dropped ) =>  {
                success( dropped );
            } );
        } );
    }

}

module.exports = DeliverooApi