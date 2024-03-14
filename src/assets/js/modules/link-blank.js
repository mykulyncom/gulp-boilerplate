const links = document.querySelectorAll('a[target="_blank"]');

const noFollow = () => {
    links.forEach((el) => {
        el.setAttribute('rel', 'nofollow');
    });
};
export default noFollow;
