import { GraphQLError } from 'graphql';

export class PasswordNotTheSameException extends GraphQLError {
  constructor() {
    super('Provided old password does not match user password', {
      extensions: { code: 'PASSWORD_NOT_THE_SAME' },
    });
  }
}
