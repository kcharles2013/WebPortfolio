const targets = document.querySelectorAll('.about-section');

// const options = {
//     root: null,
//     threshold: 0.25,
//     rootMargin: "0px"
// };

const callback = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('is-active');
            console.log(entry.target);
        } else {
            // entry.target.classList.remove('is-active');
        }
    });
}

// const callback = (entry, observer) => {
//         if(entry.isIntersecting) {
//             // entry.target.classList.add('active');
//             console.log(entry.target);
//         } else {
//             // entry.target.classList.remove('active');
//         }
// };

let observer = new IntersectionObserver(callback);

targets.forEach(function(target) {
    observer.observe(target);
})
// AboutSection.forEach(element => {
//     observer.observe(element);
// });

