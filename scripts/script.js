const previewModal = document.querySelector('#previewModal')

previewModal.addEventListener('hidden.bs.modal', () => {
    const iframe = previewModal.querySelector('.embed-container iframe');
    iframe.src = iframe.src; // перезагружает iframe, останавливая воспроизведение видео
})
