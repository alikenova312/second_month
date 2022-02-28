class user {
    constructor(password, username, age, gender) {
        this.password = password;
        this.username = username;
        this.age = age;
        this.gender = gender;
    }

    login() {
        if (this.password === ''){
            return console.log(`Введите пароль ${this.password}`)
        }
        console.log(this.password)
        if (this.password === '******') {
            return console.log(`Введите имя пользователя  ${this.username}`)
        }
        console.log(this.username);
        if (this.username === 'Blum') {
            return console.log(`Ведите возраст ${this.age}`)
        }
        console.log(this.username);
        if (this.age === '17'){
            return console.log(`ваш пол: ${this.gender}`)
        }
    }
}

const Blum = new user('******', 'Blum', '17', 'women')
console.log(Blum);

