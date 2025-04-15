<<<<<<< HEAD
// import child_process in ES module
import { spawn } from 'child_process';

const tokens = [
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUzNzY2ZiIsIm5hbWUiOiJhZ2VudDAiLCJ0ZWFtSWQiOiJjMTAyZWQiLCJ0ZWFtTmFtZSI6InRlc3QiLCJpYXQiOjE3MTQ5ODM0NzN9.ThWDsSxCZuQNo_0Gu2S6RBq7bYmjxfeAq_zpPcvGu-k',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlMGI3NiIsIm5hbWUiOiJhZ2VudDEiLCJ0ZWFtSWQiOiI0NDU4YmMiLCJ0ZWFtTmFtZSI6InRlc3QiLCJpYXQiOjE3MTQ5ODM0NzN9.WLO7BARva9uok5a9eVJ3vLQSxVN2AsWQf8X3BwpIJuE',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg1OTg1OCIsIm5hbWUiOiJhZ2VudDIiLCJ0ZWFtSWQiOiI3NWYxYjkiLCJ0ZWFtTmFtZSI6InRlc3QiLCJpYXQiOjE3MTQ5ODM0NzN9.fFc81V-h743QQFO8yJssCOT78agJRV7Jw1Kx4R0IaBc',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA4OTJmMyIsIm5hbWUiOiJhZ2VudDMiLCJ0ZWFtSWQiOiI4OTNmMDUiLCJ0ZWFtTmFtZSI6InRlc3QiLCJpYXQiOjE3MTQ5ODM0NzN9.qTaOlONWWhH1nrFMjkLb_Lys-P1SUinMPOADQ4yqyfo',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI2ZWNlNiIsIm5hbWUiOiJhZ2VudDQiLCJ0ZWFtSWQiOiI0OTc4ZGQiLCJ0ZWFtTmFtZSI6InRlc3QiLCJpYXQiOjE3MTQ5ODM0NzN9.pXT0Msuwry6Nl4JGiNrr-Fx-2bzjB5qAEob75aVej7s',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUxMDcyMCIsIm5hbWUiOiJhZ2VudDUiLCJ0ZWFtSWQiOiJmMGVmYmQiLCJ0ZWFtTmFtZSI6InRlc3QiLCJpYXQiOjE3MTQ5ODM0NzN9.rPIJdNLblCxynBlOQLgcgUFI3Na8-D9PKjhR2K0SIHw',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVlNDEzMSIsIm5hbWUiOiJhZ2VudDYiLCJ0ZWFtSWQiOiI1MDA0ZDgiLCJ0ZWFtTmFtZSI6InRlc3QiLCJpYXQiOjE3MTQ5ODM0NzN9.rxPt2w2BBf5Jf9x-tbBMxYx8H7PEHqRF7nTBjROP634',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDJhNSIsIm5hbWUiOiJhZ2VudDciLCJ0ZWFtSWQiOiI4NTg4ZTQiLCJ0ZWFtTmFtZSI6InRlc3QiLCJpYXQiOjE3MTQ5ODM0NzN9.fXfO7yKMD0wWl6IKINMehmB9sdUclsfZzW3SUZd2neU',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM0NzU4MyIsIm5hbWUiOiJhZ2VudDgiLCJ0ZWFtSWQiOiIzODk3YTMiLCJ0ZWFtTmFtZSI6InRlc3QiLCJpYXQiOjE3MTQ5ODM0NzN9.wrVXnVhUDo-J_HKJSj_uEhaVuKqrVztdEG6F4bGbdrg',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTc2YyIsIm5hbWUiOiJhZ2VudDkiLCJ0ZWFtSWQiOiJiZmE4MTAiLCJ0ZWFtTmFtZSI6InRlc3QiLCJpYXQiOjE3MTQ5ODM0NzN9._RTVy1-6hofLVgTBUU8T1zm79fTD6v3hSj-4a4DCYy0',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1ZjU1MiIsIm5hbWUiOiJhZ2VudDEwIiwidGVhbUlkIjoiNzgzZDRiIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.6Ne4kdeN3UPI1vdYjwlNLb-g13bjELgTMqaKc3njDg4',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmNiYyIsIm5hbWUiOiJhZ2VudDExIiwidGVhbUlkIjoiMmFiMDJjIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.bAplolh0tZtwoMzhbbqL5c1VnF33J1VFYd6XjUPQT2E',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBkOTNlZSIsIm5hbWUiOiJhZ2VudDEyIiwidGVhbUlkIjoiNGE4NDg3IiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.5SNkinIeNoZ92kDcZxbVV0Rw_yP3M59KM-U9QV1iKK4',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwNGY4OCIsIm5hbWUiOiJhZ2VudDEzIiwidGVhbUlkIjoiNzVjYjg3IiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.FhZAhJJ1dJjAN5i-qqSiNKMdXbmAjaTFNMTagNgXIvg',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU0NjBmYSIsIm5hbWUiOiJhZ2VudDE0IiwidGVhbUlkIjoiZTEyZGIyIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.U-OBBfGWqQqOuozQ3kQiHjs4j_alRUPMhyRcX_9R578',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ4MDA1MSIsIm5hbWUiOiJhZ2VudDE1IiwidGVhbUlkIjoiZTBjYmI4IiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.3y0G0ipntcyID7R5t9dxxGasV6w-SwYkboy9pe3Dmxw',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3MDlmOCIsIm5hbWUiOiJhZ2VudDE2IiwidGVhbUlkIjoiMGZkNmI0IiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.oFYLixrA0S9VewEHdOSjoFY8PkFnKddknfAQytkc-P8',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY5MTM1MiIsIm5hbWUiOiJhZ2VudDE3IiwidGVhbUlkIjoiYWJiYzg3IiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.0Mq8uoJgiMLe3EJ6WA1LlmQP3qQW9tojttLSN3-2HEc',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhiZjk0YSIsIm5hbWUiOiJhZ2VudDE4IiwidGVhbUlkIjoiYzhjNWE2IiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.FpBg7aTvFqZLNrrnDQIi7Wgfp23vetVxNKASbwpURH4',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZiODRmZiIsIm5hbWUiOiJhZ2VudDE5IiwidGVhbUlkIjoiMzU4NTJhIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.mQnym1XHo_I4IeixE3on-n7ZQfndW27aBhITQ4j4V3w',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdhNTIwMSIsIm5hbWUiOiJhZ2VudDIwIiwidGVhbUlkIjoiMTU4YWIyIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.xrKU5YPYNSFrCAkT2BrAizxCxV95G8wwXqpa1ks6Lqc',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFmZDQ1ZiIsIm5hbWUiOiJhZ2VudDIxIiwidGVhbUlkIjoiODcwYzI5IiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.h1iUfw-IDgkm3nHD1ibvd4YuFgDJeYd0DYTRTDTrdR8',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM0NTRjNyIsIm5hbWUiOiJhZ2VudDIyIiwidGVhbUlkIjoiZTYxZjVjIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.OSiEwrTHxRfpaGJtoBuP1fHPjszzNa8hcmlY7oKwxAY',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5YzljYyIsIm5hbWUiOiJhZ2VudDIzIiwidGVhbUlkIjoiNGVmMWE2IiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.7RJ1a36eorTNbOvIEtVb1GuZMEPjN64GNHlLvzESkSk',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI4Zjk2ZCIsIm5hbWUiOiJhZ2VudDI0IiwidGVhbUlkIjoiNzU1ODczIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.bZzWSaV6cf2NoDt9fwlEu1j2wxYCAZhca6lSW_wShd8',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ2MTk3OCIsIm5hbWUiOiJhZ2VudDI1IiwidGVhbUlkIjoiY2RmMWRlIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ._v0Jz91ztLVTEFSItQ7KAZ3_c8n9uwyBb3YKa4PVUEA',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMyMDZmNiIsIm5hbWUiOiJhZ2VudDI2IiwidGVhbUlkIjoiZmIwMDgyIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.kE3E6xxocH4ErZFp1nNcEqdvRWEKAE7SsjddTF4c0eY',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhZmY4YyIsIm5hbWUiOiJhZ2VudDI3IiwidGVhbUlkIjoiZGU2ODQ0IiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.zxI07nHep0fyqd14ANjkqwypmIc7dfjk2Dwn--GlYw8',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlZmM3YyIsIm5hbWUiOiJhZ2VudDI4IiwidGVhbUlkIjoiMTc3MTlkIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.EItX44pYcCLhcwTslCjPq0iv1qAqAkiCt--f80yoI7k',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1NjdkYSIsIm5hbWUiOiJhZ2VudDI5IiwidGVhbUlkIjoiNmY2NjU3IiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.mP2Qfb-1nwNY5ZRhAbvDjuPA1a3JoKn3A9Qzp7OUAj4',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY4YjYyOCIsIm5hbWUiOiJhZ2VudDMwIiwidGVhbUlkIjoiYTQ5NjM5IiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.fPEdEwWbVBvByg7T22713r2GqPWxgn7xhYZv9k9Dy5Y',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZkOTNjZCIsIm5hbWUiOiJhZ2VudDMxIiwidGVhbUlkIjoiNDViYjFmIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.14iiZOAbLOXqIkC-b4KyS7VbQmrOW_p22f3rXOFSJ4Q',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxZmIwNyIsIm5hbWUiOiJhZ2VudDMyIiwidGVhbUlkIjoiNWRiMThlIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.caWPgF0RRE9rhDeASxCS6mZSc6JCAGBCcQQ80SJ2szY',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwNzk0ZSIsIm5hbWUiOiJhZ2VudDMzIiwidGVhbUlkIjoiZGI5YmY0IiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.1zYkeqvZMyU2KpYTusC-CpL20g1jWe2f6yMJ2bP5Dj4',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJjNWNiMCIsIm5hbWUiOiJhZ2VudDM0IiwidGVhbUlkIjoiMTFmOWMzIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.BFfNkNUvYtP8lAoGUp2No9LGz6VlqfTOuIzUHLTY04c',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNiMGY1NCIsIm5hbWUiOiJhZ2VudDM1IiwidGVhbUlkIjoiOTI0OWZhIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.raOjIdeeDGO6eOYrghyrYhGqlIRmzBniPIBaMV44gLg',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjllZTE5YiIsIm5hbWUiOiJhZ2VudDM2IiwidGVhbUlkIjoiMzUzOTcwIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.Q0c60NueKyRUWBW1AMEe9UQ-WAdzVJ1pMjYlDgyQl6c',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjcwOSIsIm5hbWUiOiJhZ2VudDM3IiwidGVhbUlkIjoiZWVjYWViIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.Tauo4fqXj5czfyp82MIRARBHdF09RjshLrNLjbuZPfw',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM2Y2EyNiIsIm5hbWUiOiJhZ2VudDM4IiwidGVhbUlkIjoiMzE0NTU2IiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.wdf8uqz1MwJZInXnGMEkYs3R5L6FqBGeG7p0d4IWZ_M',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUwMmQyMCIsIm5hbWUiOiJhZ2VudDM5IiwidGVhbUlkIjoiNTkwODFkIiwidGVhbU5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzE0OTgzNDczfQ.oCE2kohgC4xBgS_JSM3VTr8OU6Motn4lT2RJ-BpvaP8'
]

// Array of commands to execute
const commands = [
    'node script1.js',
    'node script2.js',
    'node script3.js'
];

// Function to spawn child processes
function spawnProcesses() {
    tokens.forEach(token => {
        const childProcess = spawn( `node intention_revision.js -token=${token}`, { shell: true } );

        childProcess.stdout.on('data', data => {
            console.log(`Output from ${token.slice(-6)}: ${data}`);
        });

        childProcess.stderr.on('data', data => {
            console.error(`Error from ${token.slice(-6)}: ${data}`);
        });

        childProcess.on('close', code => {
            console.log(`Child process ${token.slice(-6)} exited with code ${code}`);
        });
    });
}

// Start the processes
=======
// import child_process in ES module
import { spawn } from 'child_process';

// Function to spawn child processes
function spawnProcesses() {
    for ( let i = 0; i < 5; i++ ) {
        const name = 'm_'+i;
        
        const childProcess = spawn( `node intention_revision.js -name=${name}`, { shell: true } );

        childProcess.stdout.on('data', data => {
            console.log(`Output from ${name}: ${data}`);
        });

        childProcess.stderr.on('data', data => {
            console.error(`Error from ${name}: ${data}`);
        });

        childProcess.on('close', code => {
            console.log(`Child process ${name} exited with code ${code}`);
        });
    }
}

// Start the processes
>>>>>>> 59ef71ee8409ae1f10595a452500fd3185ea45cf
spawnProcesses();