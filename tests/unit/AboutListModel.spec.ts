import AboutListModel, { aboutListItem } from '@/components/AboutList/AboutListModel';

describe('AboutListModel', () => {
  it('Должна изменить данные с сервера на данные для компонента', () => {
    const result: aboutListItem[] = AboutListModel.prepare([{ id: 2, name: 'test' }])
    const expected: aboutListItem[] = [{ id: 2, title: '2: test' }]

    expect(result).toMatchObject(expected)
  });
});
