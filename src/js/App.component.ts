import { init } from "./main";

export const AppComponent = () => {
    const appElement: HTMLDivElement = document.createElement('div');

render(appElement);

    return { element: appElement };
}

const render = (containerElement: HTMLDivElement) => {
  containerElement.textContent = '';
//@ts-ignore
    init(containerElement);
};

// const SomeComponent = (props) => return {
// element: HTMLElement,
// }
