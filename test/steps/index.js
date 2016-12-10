import { localisation } from 'yadda'; // eslint-disable-line import/no-extraneous-dependencies

const { English } = localisation;

export default function libraryInstance() {
  return English.library()
    .when('foo', () => console.log('foo'));
}
