import AboutListModel, { aboutListItem } from '@/components/AboutList/AboutListModel';

describe('AboutListModel', () => {
  it('should convert server data into AboutList component data', () => {
    const result: aboutListItem[] = AboutListModel.prepare([{ id: 2, name: 'test' }])
    const expected: aboutListItem[] = [{ id: 2, title: '2: test' }]

    expect(result).toMatchObject(expected)
  });
});
