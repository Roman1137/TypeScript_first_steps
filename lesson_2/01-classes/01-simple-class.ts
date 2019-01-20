class User {
    firstName: string;
    lastName: string;

    // методы хранятся в прототипах класса, а поля - в экземплярах
    // это связано с тем, что методы, для всех экземпляров одни и нету необходимости
    // хранить свой метод для своего экземпляра
    print(): void {
        console.log(this.firstName + " " + this.lastName);
    }

    //каждый прототип привязан к пределенной функции-конструктору.
}

let user1: User = new User();
user1.firstName = "Ivan";
user1.lastName = "Ivanov";

let user2: User = new User();
user2.firstName = "John";
user2.lastName = "Doe";

user1.print();
user2.print();
// Дмитрий показывет что .js, .js.map, ts файлы грузятся в браузер и
// таким образом можна дебажить ts код.
