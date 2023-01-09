import { Character } from './character.entity';

describe('CharactersEntity', () => {
  it('should be defined', () => {
    expect(new Character()).toBeDefined();
  });
});
