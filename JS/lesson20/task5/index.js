/* eslint-disable max-classes-per-file */

// export { User, UserRepository };

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }
  get users() {
    return this._users;
  }

  getUserNames(users) {
    return this._users.map(elem => elem.name);
  }
  getUserIds(users) {
    return this._users.map(elem => elem.id);
  }
  getUserNameById(id) {
    const res = this._users.filter(elem => elem.id === id);
    return res[0].name;
  }
}

const user = new User('1', 'Tom', 'session-id');

const rep1 = new UserRepository([
  { id: '1', name: 'Tom', sessionId: 'session-id1' },
  { id: '2', name: 'Ann', sessionId: 'session-id2' },
]);
console.log(rep1);

const a = rep1.getUserNameById('1');
console.log(a);

// const users = [
//   { id: '1', name: 'Tom', sessionId: 'session-id1' },
//   { id: '2', name: 'Ann', sessionId: 'session-id2' },
// ];

// examples

// // получить свойства можем
// console.log(user.id); // ===> '1'
// console.log(user.name); // ===> 'Tom'
// console.log(user.sessionId); // ===> 'session-id'

// // но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

// // const rep = new UserRepository(users);
// // console.log(res);
