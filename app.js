let uls = document.querySelectorAll(".users");

class Users {
  constructor(name, tel) {
    this.name= name;
    this.tel=tel;
  }
}

class Admin extends Users {
  constructor(name, tel, admin) {
    super(name, tel);
    this.admin=admin;
  }
  del(e) {
    for(let i=0; i<UsersName.length;i++ ) {
      if(UsersName[i].textContent == e.parentElement.firstChild.nextElementSibling.textContent) {
        UsersName[i].parentElement.style.display="none"
      }
    }
  }
  dis(e) {
    for(let i=0; i<UsersName.length;i++ ) {
      if(UsersName[i].textContent == e.parentElement.firstChild.nextElementSibling.textContent) {
        UsersName[i].parentElement.style.opacity="0.5"
      }
    }
  }
}
let admin = new Admin("Yusufbek", 912931771, "admin");
let user1 = new Users("Ali", 111111111);
let user2 = new Users("Vali", 22222222);
let user3 = new Users("Gani", 33333333);
let user4 = new Users("Ann", 444444444);
let user5 = new Users("Don", 555555555);
let usersArr = [user1, user2, user3, user4, user5];
let adminText =  `<p class=ad">
<span class="ad-name">Name: ${admin.name}</span> <br />
<span class="ad-tel">Tel:${admin.tel}</span><br />
<span class="ad-status">Status:${admin.admin}</span></p>`;
let adminInHtml = document.querySelector(".admin");
adminInHtml.insertAdjacentHTML("afterbegin", adminText);
  for(let i =0; i<usersArr.length; i++) {
    let li = `
    <li class="user">
      <p class="user-name">${usersArr[i].name}</p>
      <p class="user-tel">Tel: ${usersArr[i].tel}</p>
      <button class=del>delete</button>
      <button class=dis>block</button>
    </li>
  `
  uls.forEach((ul)=> {
    ul.innerHTML +=li;
  })
  }
  let delBtns = document.querySelectorAll(".del");
  let UsersName = document.querySelectorAll(".user-name");
  delBtns.forEach((e)=> {
    e.addEventListener("click", ()=> {
      admin.del(e)
     })
  })

  let disBtns = document.querySelectorAll(".dis");
  let li = document.querySelectorAll("li");
  disBtns.forEach((e)=> {
    e.addEventListener("click", ()=> {
      admin.dis(e)
     })
  })
 
let off = document.querySelector(".off");
let on = document.querySelector(".on");
on.addEventListener("click", ()=> {
  on.style.display="none";
  off.style.display="block";
  let buttons = document.querySelectorAll("button");
  buttons.forEach((btn)=> {
    btn.setAttribute("disabled", "")
  })
})
off.addEventListener("click", ()=> {
  on.style.display="block";
  off.style.display="none";
  let buttons = document.querySelectorAll("button");
  buttons.forEach((btn)=> {
    btn.removeAttribute("disabled", "")
  })
})