import prepareAboutList, { aboutListItem } from '@/models/prepareAboutList';

describe('prepareAboutList', () => {
  it('Должна изменить данные с сервера на данные для компонента', () => {
    const result: aboutListItem[] = prepareAboutList([{ id: 2, name: 'test' }])
    const expected: aboutListItem[] = [{ id: 2, title: '2: test' }]

    expect(result).toMatchObject(expected)
  });
});
