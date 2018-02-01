class Person {

  constructor( name, surname, age, img, gender, like,) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.img = img;
    this.gender = gender;
    this.like = 0;
  }
render(i) {
    let msg ='';
     msg+= `
  
      <div id="okno1" class="class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <div class="pic">
          <img src="${this.img}">
        </div>
        <h4><div class="okno">
          <p> Name: ${this.name}</p></br>
          <p> Surname: ${this.surname}</p></br>
          <p> Gender: ${this.gender}</p></br>
          <p> Age: ${this.age}</p>
          <button onclick="like(`+ i +`)">Like</button>
          <span class="like" id="like`+ i +`">${this.like} </span><img class="like" src="img/like.png"></h4>
        </div>
      </div>
      `;
    return msg;
  }
}

function like (index){
  persAll[index].like=persAll[index].like+1;
  document.getElementById('like' + index).innerHTML=persAll[index].like;
           }

var persAll = [
  new Person("Maxina", "Doe", 23,"img/face1.png","female"),
  new Person("Sara", "Doe", 24,"img/face2.png","female"),
  new Person("Max", "Doe", 27,"img/face3.ico","male"),
  new Person("Sabrina", "Doe", 21,"img/face4.ico","male"),
 
 ];


//all

function allList() {
  let allList = document.getElementById("allPerson");
  for (var i = 0; i < persAll.length; i++) {

    allList.innerHTML += persAll[i].render(i);
  }
}

// men

function onlyMen() {
  let allList = document.getElementById("men");
  for (var i = 0; i < persAll.length; i++) {
       if (persAll[i].gender == "male") {
    allList.innerHTML += persAll[i].render(i);
  }
}
}

// women

function onlyWomen() {
  let allList = document.getElementById("women");
  for (var i = 0; i < persAll.length; i++) {
       if (persAll[i].gender == "female") {
    allList.innerHTML += persAll[i].render(i);
  }
}
}