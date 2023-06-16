export type LayoutType = 'neva' | 'supra' | null | undefined;
const key = 'layout';


export function changeLayoutClass(value?: LayoutType) {
    const body = document.querySelector('body');
    if (body === null) {
        return;
    }

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
    
    setSelectValue();
}

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

    setSelectValue();
}

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
