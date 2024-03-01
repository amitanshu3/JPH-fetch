async function fetchApi()
{
    const data=await fetch('https://jsonplaceholder.typicode.com/users');
    const arr= await data.json();
    console.log(arr);
    const child=document.querySelector('.child');
   arr.forEach((cur)=>{

    const  div=document.createElement('div');
    div.classList.add('user-container');
    const h1=document.createElement('h1');
    h1.innerHTML=cur.name;
    div.appendChild(h1);
    const h2=document.createElement('h2');
    h2.innerHTML=cur.email;
    div.appendChild(h2);
    child.appendChild(div);
   })

}
fetchApi();