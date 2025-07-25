import { AppComponent } from "./App.component";

const rootDiv = document.querySelector(
  "#root"
) as HTMLDivElement;
rootDiv.textContent = '';

const appComponent = AppComponent();
rootDiv.append(appComponent.element);
