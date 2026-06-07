import { GraphQLError } from 'graphql';

export class NewPasswordTheSameAsOldException extends GraphQLError {
  constructor() {
    super('New password must be different than the old one!', {
      extensions: { code: 'PASSWORD_THE_SAME_AS_OLD' },
    });
  }
}
