import foo from 'utils/foo';

describe('test', () => {
  it('foo', (done) => {
    foo();
    done('Error');
  });
});
