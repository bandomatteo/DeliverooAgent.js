<<<<<<< HEAD
import { DeliverooApi, timer } from "@unitn-asa/deliveroo-js-client";

const client = new DeliverooApi(
    'http://rtibdi.disi.unitn.it:8080',
    // agent.id e083aa6f59e
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUwODNhYTZmNTllIiwibmFtZSI6Im1hcmNvIiwiaWF0IjoxNzE2Mjg2NTA2fQ.grMI3zVziSg6troUw8HXi9wAvLSNil0OrBcA_Uz00V0'
)
await new Promise( res => client.onYou( res ) );

client.onMsg( (id, name, msg, reply) => {
    console.log("new msg received from", name+':', msg);
    if (reply) {
        let answer = 'hello '+name+', here is reply.js as '+client.name+'. Do you need anything?';
        console.log("my reply: ", answer);
        try { reply(answer) } catch { (error) => console.error(error) }
    }
});
=======
import { DeliverooApi } from "@unitn-asa/deliveroo-js-client";

const client = new DeliverooApi(
    'http://localhost:8080',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM2NDAyZiIsIm5hbWUiOiJtYXJjbyIsInRlYW1JZCI6Ijc3MGQ2NiIsInRlYW1OYW1lIjoiZGlzaSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzQzNTM1OTgxfQ.eZ_YNtxcRs0avs-npv8Y5uZcqKWXMlN3lnFxZUWwXko'
    // marco (36402f)
)
await new Promise( res => client.onYou( res ) );

client.onMsg( async (id, name, msg, reply) => {
    console.log("new msg received from", name+':', msg);
    const myname = (await client.me).name;
    if (reply) {
        let answer = 'hello '+name+', this is the reply from '+myname+'. Do you need anything?';
        console.log("my reply: ", answer);
        try { reply(answer) } catch { (error) => console.error(error) }
    }
});
>>>>>>> fb1b2f168221ded7a5332f94eb01d130e423b040
