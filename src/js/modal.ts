export function showModal() {
    if (shouldShowModal()) {
        return;
    }

    const modal = document.getElementById('modal') as HTMLDivElement;
    if (!modal) {
        return;
    }

    modal.classList.remove('hidden');
}

export function hideModal(shouldNeverShowAgain = false) {
    const modal = document.getElementById('modal') as HTMLDivElement;
    if (!modal) {
        return;
    }

    modal.classList.add('hidden');

    localStorage.setItem(key, shouldNeverShowAgain ? 'true' : 'false');
}

const key = 'app-modal';

// Note: Check if the modal should be shown
export function shouldShowModal(): boolean {
    const neverShowAgain = localStorage.getItem(key) as string;
    // If neverShowAgain is not set, then show the modal
    // If no key is present, then neverShowAgain will be null

    return neverShowAgain === 'true';
}