// получаем из спецификации
export interface rawListItem {
  id: number,
  name: string
}

// данные с бекенда
const array: rawListItem[] = [
  {
    id: 1,
    name: 'Test'
  },
  {
    id: 2,
    name: 'Boo'
  }
]

export default array
