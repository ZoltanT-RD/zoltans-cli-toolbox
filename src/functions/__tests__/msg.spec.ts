import { msg } from '../msg';

describe('msg tests', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  test('Should log empty string', () => {
    msg('');
    expect(console.log).toHaveBeenCalledWith('');
  });

  test('Should log string', () => {
    msg('test');
    expect(console.log).toHaveBeenCalledWith('test');
  });

  test('Should log number', () => {
    msg('13');
    expect(console.log).toHaveBeenCalledWith('13');
  });

  test('Should log level 1', () => {
    msg('test', 1);
    expect(console.log).toHaveBeenCalledWith(' --test');
  });

  test('Should log level 2', () => {
    msg('test', 2);
    expect(console.log).toHaveBeenCalledWith('  ----test');
  });

  test('Should log level 1', () => {
    msg('test', 1, '+');
    expect(console.log).toHaveBeenCalledWith(' ++test');
  });

  test('Should log level 2', () => {
    msg('test', 2, '');
    expect(console.log).toHaveBeenCalledWith('  test');
  });
});
