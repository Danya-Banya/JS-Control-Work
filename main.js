var age = 0;
var name = "";
var ageWhileControlled = true;
for (let i = 0; i < 3; i++) {
  do {
    var nameWhile = true;
    var nameInput = prompt("Введите имя пользователя");
    if (nameInput == 0) {
      alert("Введите имя");
      ageWhile = true;
    } else if (nameInput === null) {
      alert("Вы отменили ввод имени!");
      nameWhile = false;
    } else if (nameInput === "adminLog") {
      alert("Здравствуйте админ!");
      nameWhile = false;
      name = nameInput;
    } else {
      name = nameInput;
      nameWhile = false;
    }
  } while (nameWhile === true);

  do {
    var ageWhile = true;
    ageWhileControlled = ageWhile;
    var ageInput = Number(
      +prompt(
        "Введите возраст пользователя, если вы ввели код доступа адмниа просто нажмите Enter!",
      ),
    );
    if (name === "adminLog") {
      alert("Здравствуйте администратор! Прошу войти несмотря на возраст!");
      ageWhile = false;
      console.log(`Вошел администратор, имя: ${name}`);
    } else if (ageInput === null) {
      alert("Хорошего вечера!");
      ageWhile = false;
      ageWhileControlled = ageWhile;
      ageWhile = false;
    } else if (isNaN(ageInput)) {
      alert("Вы ввели что то кроме числа");
      ageWhile = true;
    } else if (ageInput === 0) {
      alert("введите возраст");
      ageWhile = true;
    } else if (ageInput < 18) {
      alert("Вы несовершеннолетний! Прошу выйти. Следующий!");
      ageWhile = false;
    } else {
      age = ageInput;
      ageWhile = false;
      alert(`Рады вас видеть ${name}. Вы ввели ${age} в возраст`);
      console.log(`Вошел пользователь, имя: ${name}, возраст ${age}`);
    }
  } while (ageWhile === true);
}

// Здравствуйте Руслан. Я не смог решить проблему с тем, что при отмене prompt-ы перестают работать.
// При нажатии отмены в prompt имени оно говорит, что произошла отмена, однако при нажатии отмены в prompt-е возраста цикл не завершается.
// Я не успеваю закончить, и поэтому при всем нежелании оставляю эту ошибку и сообщение.