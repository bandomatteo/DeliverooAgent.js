import { DeliverooApi } from "@unitn-asa/deliveroo-js-client";

const client = new DeliverooApi(
    'https://deliveroojs25.azurewebsites.net',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5NjdlYiIsIm5hbWUiOiJSUl9SIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NDQxMDU3ODV9.FTD05EtTVB-tfsh0gcvf00BjtuAiqOl1iMQ53nVVXrc'
)

function distance( {x:x1, y:y1}, {x:x2, y:y2}) {
    const dx = Math.abs( Math.round(x1) - Math.round(x2) )
    const dy = Math.abs( Math.round(y1) - Math.round(y2) )
    return dx + dy;
}

const me = {};

client.onYou( ( {id, name, x, y, score} ) => {
    me.id = id
    me.name = name
    me.x = x
    me.y = y
    me.score = score
} )

const db = new Map()

client.onParcelsSensing( async ( parcels ) => {
    
    console.log( `me(${me.x},${me.y})`,
        parcels
        .map( p => `${p.reward}@(${p.x},${p.y})` )
        .join( ' ' )
    );

    // TODO1
    // This creates a problem because I'm sennding the statement to the server before completing the previous one, thus I'll get a penalty
    for ( let p of parcels ) {
        if ( ! p.carriedBy ) {
            if ( me.x < p.x )
                await client.emitMove('right');
            else if ( me.x > p.x )
                await client.emitMove('left')
            else if ( me.y < p.y )
                await client.emitMove('up')
            else if ( me.y > p.y )
                await client.emitMove('down')
            client.emitPickup();
        }
    }

} )


