async function abc(){
   var blob= await fetch(`https://randomuser.me/api/`);
    let ans= await blob.json();
    console.log(ans.results[0].name);
}
abc(); 