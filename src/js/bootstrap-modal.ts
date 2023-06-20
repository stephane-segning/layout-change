import Modal from 'bootstrap/js/dist/modal';

const key = "show-simple-app-modal";

function showModal(id: string) {
    const neverShowAgain = localStorage.getItem(key) as string;
    if (neverShowAgain === 'true') {
        return;
    }

    new Modal(document.getElementById(id) as HTMLElement)
        .show();
}

function shouldNeverShowAgain(value: boolean) {
    localStorage.setItem(key, value ? 'true' : 'false');
    setToggleValues(value);
}

function loadShowModal() {
    const neverShowAgain = localStorage.getItem(key) as string;
    setToggleValues(neverShowAgain === 'true');
}

function setToggleValues(value: boolean) {

    // get the select element
    let externButton = document.getElementById('externButton') as HTMLInputElement;
    let neverShowAgain = document.getElementById('neverShowAgain') as HTMLInputElement;

    // set the value
    externButton.checked = value;
    neverShowAgain.checked = value;
}


function initModal() {
    (window as any).showSimpleModal = showModal;
    (window as any).shouldNeverShowAgain = shouldNeverShowAgain;

    loadShowModal();
}

initModal();