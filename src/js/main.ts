import { AppComponent } from "./components/App.component";

const rootDiv = document.querySelector("#root") as HTMLDivElement;
rootDiv.textContent = "";

const appComponent = AppComponent();
rootDiv.append(appComponent.element);
