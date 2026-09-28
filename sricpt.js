// document.addEventListener("DOMContentLoaded", () => {

//     const elements = document.querySelectorAll(
//         ".reveal, .reveal-left, .reveal-right"
//     );

//     const observer = new IntersectionObserver(
//         (entries) => {

//             entries.forEach((entry) => {

//                 if (entry.isIntersecting) {

//                     entry.target.classList.add("active");

//                 }

//             });

//         },
//         {
//             threshold: 0.1
//         }
//     );

//     elements.forEach((element) => {
//         observer.observe(element);
//     });

// });

// pembatas

// document.addEventListener("DOMContentLoaded", () => {
//     const elements = document.querySelectorAll(
//         ".reveal, .reveal-left, .reveal-right"
//     );

//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add("active");
//                 } else {
//                     entry.target.classList.remove("active");
//                 }
//             });
//         },
//         {
//             threshold: 0.15
//         }
//     );

//     elements.forEach((element) => {
//         observer.observe(element);
//     });
// });



document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                } else {
                    entry.target.classList.remove("active");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });
});

const progressBar = document.querySelector(".scroll-progress");

function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / documentHeight) * 100;

    progressBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateScrollProgress);

updateScrollProgress();