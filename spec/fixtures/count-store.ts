import { action, computed, observable } from 'mobx'
import { toWords } from 'number-to-words'

export class Count {
  @observable value = 0

  @action increment() {
    this.value++
  }

  @computed get word() {
    return toWords(this.value)
  }
}