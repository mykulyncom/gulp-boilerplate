const images = document.querySelectorAll('.data-image');

const dataImage = () => {
    images.forEach((image) => {
        const imageUrl = image.getAttribute('data-image');
        image.style.backgroundImage = `url(${imageUrl})`;
    });
};
export default dataImage;
