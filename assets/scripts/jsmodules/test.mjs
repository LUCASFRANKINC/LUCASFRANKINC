export default function User(name, email, age) {
  let _u = Object.create(User.methods);
  _u.name = name;
  _u.email = email;
  _u.age = age;
  return _u;
}

User.methods = {
  get _Name() {
    return this.name;
  },
  get _Email() {
    return this.email;
  },
  get _Age() {
    return this.age;
  },
  toString() {
    return `Name=>${this.name}, Age=>${this.age} & Email address is: ${this.email}`;
  },
};

export const copyright = "Frank Dex Devs &reg;";
