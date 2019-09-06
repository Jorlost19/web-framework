import { Collection } from '../models/Collection';

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render = (): void => {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    for (let model in this.collection.models) {
      const itemParent = document.createElement('div');
      if (typeof model === 'object') {
        this.renderItem(model, itemParent);
      }
      // this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    }
    this.parent.append(templateElement.content);
  };
}