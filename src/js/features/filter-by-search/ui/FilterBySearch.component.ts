import {
  getFilterTerm,
  setFilterTerm,
  subscribe,
} from "../../../app/store/state";
import { EVENTS } from "../../../shared/libs/constants";
import { debounce } from "../../../shared/libs/debounce";
import { LocalState } from "../model/types";

export const FilterBySearch = () => {
  const filterContainer = document.createElement("label");
  const localState: LocalState = {
    wasFocused: false,
    innerValue: "",
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
  localState: LocalState
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
    if (!e.currentTarget) return;
    if (!(e.currentTarget as HTMLElement).closest("#filter-by-search")) {
      console.log("blur");
      localState.wasFocused = false;
    }
  };

  input.oninput = ({ currentTarget }) => {
    if (currentTarget !== null) {
      localState.innerValue = (currentTarget as HTMLInputElement).value;
      console.log("123");

      const debouncedFilter = debounce(setFilterTerm, 1000);

      debouncedFilter((currentTarget as HTMLInputElement).value)
    }
  };


  // const filterTerm = getFilterTerm();
  input.value = localState.innerValue;

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
