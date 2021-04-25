import { rawListItem } from '@/models/dataExample';

export interface aboutListItem {
  id: number,
  title: string
}

export default function (list: rawListItem[]): aboutListItem[] {
  return list.map((el: rawListItem) => ({
    id: el.id,
    title: `${el.id}: ${el.name}`
  }))
}
