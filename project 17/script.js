const openModalBtnElement = document.querySelector('#openModal');

const ModalElement = document.querySelector('.Modal');

const modalcontentElement = document.querySelector('.modalcontent')

openModalBtnElement.addEventListener( 'click' , () => {
    ModalElement.classList.add("open");  
}
);

modalcontentElement.addEventListener( 'click' , () => {
    ModalElement.classList.remove("open");  
}
);