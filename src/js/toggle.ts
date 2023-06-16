// Note: Toggle between Neva and Supra layouts
export type LayoutType = 'neva' | 'supra' | null | undefined;

// Note: Key for local storage
const key = 'layout';

// Note: Toggle between Neva and Supra layouts
export function changeLayoutClass(value?: LayoutType) {
    // Get the body element
    const body = document.querySelector('body');
    if (body === null) {
        return;
    }

    // If value is set, then set the class
    if (value) {
        body.classList.remove('neva');
        body.classList.remove('supra');
        body.classList.add(value);
        localStorage.setItem('app-' + key, value);
        return;
    }

    body.classList.toggle('neva');
    body.classList.toggle('supra');

    localStorage.setItem('app-' + key, body.classList.contains('neva') ? 'neva' : 'supra');
    
    // Set the select value
    setSelectValue();
}

// Note: Load layout class from local storage
export function loadLayoutClass() {
    let currentState = localStorage.getItem('app-' + key) as LayoutType;
    if (!currentState) {
        currentState = 'neva';
    }

    const body = document.querySelector('body');
    if (body === null) {
        return;
    }
    
    body.classList.add(currentState);

    // Set the select value
    setSelectValue();
}

// Note: Set the select value
export function setSelectValue() {
    let currentState = localStorage.getItem('app-' + key) as LayoutType;
    if (!currentState) {
        currentState = 'neva';
    }

    // get the select element
    let selectElement = document.getElementById('togglerSelect') as HTMLSelectElement;

    // set the value
    selectElement.value = currentState;
}
