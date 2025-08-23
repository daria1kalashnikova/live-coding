import {
  getFilterTerm,
  setFilterTerm,
  subscribe,
} from "../../../app/store/state";
import { EVENTS } from "../../../shared/libs/constants";

export const FilterBySearch = () => {
  const filterContainer = document.createElement("label");
  const localState = {
    wasFocused: false,
  };

  subscribe((event) => {
    if (event.name !== EVENTS.SET_SEARCH_FILTER_TERM) return;
    render(filterContainer, localState);
  });

  render(filterContainer, localState);

  return {
    element: filterContainer,
  };
};

const render = (
  container: HTMLLabelElement,
  localState: { wasFocused: boolean }
) => {
  container.textContent = "";
  const span = document.createElement("span");
  const input = document.createElement("input");

  span.textContent = "Filter search";
  input.name = "filter-by-search";
  input.id = "filter-by-search";
  input.type = "text";

  input.onfocus = () => (localState.wasFocused = true);
  document.onclick = (e: MouseEvent) => {
    if (!(e?.currentTarget as HTMLElement)?.closest("#filter-by-search")) {
      console.log("blur");
      localState.wasFocused = false;
    }
  };

  input.oninput = ({ currentTarget }) => {
    if (currentTarget !== null) {
      setFilterTerm((currentTarget as HTMLInputElement).value);
    }
  };

  const filterTerm = getFilterTerm();
  input.value = filterTerm;

  container.append(span);
  container.append(input);

  if (localState.wasFocused) {
    input.focus();
  }
};

// import {
//   getFilterTerm,
//   setFilterTerm,
//   subscribe,
// } from "../../../app/store/state";
// import { EVENTS } from "../../../shared/libs/constants";

// export const FilterBySearch = () => {
//   const input = document.createElement("input");

//   subscribe((event) => {
//       if (event.name !== EVENTS.SET_SEARCH_FILTER_TERM) return;
//        render(input);
//   });

//     render(input);

//     input.oninput = ({ currentTarget }) => {
//       if (currentTarget !== null) {
//         setFilterTerm((currentTarget as HTMLInputElement).value);
//       }
//     };

//   return {
//     element: input,
//   };
// };

// const render = (conatiner: HTMLInputElement) => {
//   const filterTerm = getFilterTerm();

//   conatiner.name = "filter-by-search";
//   conatiner.type = "text";
//   conatiner.value = filterTerm;

// };
