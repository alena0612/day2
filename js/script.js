function myFirstApp(name, age) {
  alert("Привет, меня зовут" + name + " и это моя программа! ");
  
  function showSkills() {
    let skills = ["HTML", "CSS", " C++"];

    for (let i = 0; i < skills.length; i++) {
      document.body.innerHTML += "Я владею " + skills[i] + "<br>";

    }
  }
  showSkills();

  function checkAge(){
    if (age > 18) {
      alert ("Вы уже большой");
    } else{
      alert ("Приходи позже");
    }
  }
    checkAge();
  
  function calcPow(num){
    console.log(num*num);
  }
  calcPow(4)
}
myFirstApp(" Alyona", 18)