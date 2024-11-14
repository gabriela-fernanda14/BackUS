class User {
    constructor(name, email, password) {
        this.id = this.genereateId();
        this.name = name;
        this.email = email;
        this.password = password;
    }
    genereateId() {
       return Math.floor(Math.random() * 999) + 1;
    }
}

export default User;