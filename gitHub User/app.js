const input=document.getElementById('userInput');
const display=document.getElementById('display');
const getData=()=>{
    fetch(`https://api.github.com/users/${input.value}`)
    .then((data)=>data.json())
    .then((response)=>{
        display.innerHTML=`<div class="row">
             <div class="col-lg-3" col-sm-12><img class='profilePic' src="${response.avatar_url}" alt=""></div>
             <div class="col-lg-9 col-sm-12">
                 <h3>${response.login}</h3>
                 <small>@${response.login}</small>
                 <p>${response.bio}</p>
                 <div class="m-4 p-3 dark1">
                     <div class="row">
                         <div class="col-4">Repos</div>
                         <div class="col-4">Followers</div>
                         <div class="col-4">Following</div>
                     </div>
                     <div class="row">
                         <div class="col-4">${response.public_repos}</div>
                         <div class="col-4">${response.followers}</div>
                         <div class="col-4">${response.following}</div>
                     </div>
                 </div>
                 <div class="row">
                     <div class="col-sm-10 col-lg-5 p-1" ><i class="fa-solid fa-location-dot"></i> ${response.location}</div>
                     <div class="col-sm-10 col-lg-5 p-1"><i class="fa-brands fa-twitter"></i> ${response.twitter_username}</div>
                 </div>
                 <div class="row">
                     <div class="col-sm-10 col-lg-5 p-1"><i class="fa-solid fa-link"></i> ${response.blog}</div>
                     <div class="col-sm-10 col-lg-5 p-1"><i class="fa-solid fa-building"></i> ${response.company}</div>
                 </div>
 
             </div>
         </div>`

    })



}


