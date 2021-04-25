// получаем из спецификации
export interface rawListItem {
  id: number,
  name: string
}

// данные с бекенда
export const rowList: rawListItem[] = [
  {
    id: 1,
    name: 'Test'
  },
  {
    id: 2,
    name: 'Boo'
  }
]
