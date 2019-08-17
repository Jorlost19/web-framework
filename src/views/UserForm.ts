export class UserForm {
  constructor(public parent: Element) {}

  eventsMap = (): { [key: string]: () => void } => {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onButtonClick
    };
  };

  onButtonClick = (): void => {
    console.log('Button was clicked!');
  };

  bindEvents = (fragment: DocumentFragment): void => {
    const { eventsMap } = this;
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  };

  template = (): string => {
    return `
    <div>
      <h1>User Form</h1>
      <input/>
      <button>Click Me!</button>
    </div>
    `;
  };
  render = (): void => {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  };
}
