import { rawListItem } from '@/models/data';

export interface aboutListItem {
  id: number,
  title: string
}

export default class AboutList {
  static prepare(list: rawListItem[]): aboutListItem[] {
    return list.map((el: rawListItem) => ({
      id: el.id,
      title: `${el.id}: ${el.name}`
    }))
  }
}
