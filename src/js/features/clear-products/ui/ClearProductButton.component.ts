import { setProductItems } from "../../../app/store/state";

export const ClearProductButton = () => {

    const button = document.createElement("button");
    
    render(button);

    return { element: button };
 
}

function render(container) {
    container.textContent = "clear products";
    container.onclick = () => {
        setProductItems([]);
    }

}


