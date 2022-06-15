export class UserModel {
  constructor(public firstName = '',
              public lastName = '',
              public email = '',
              public phone = '',
              public sendProducts = false,
              public address = '') { }
}
