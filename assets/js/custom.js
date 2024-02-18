document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const plusIcon = button.querySelector('.plus-icon');
            const minusIcon = button.querySelector('.minus-icon');

            // Toggle the display of plus and minus icons for the clicked accordion
            if (plusIcon && minusIcon) {
                plusIcon.style.display = plusIcon.style.display === 'none' ? 'inline-block' : 'none';
                minusIcon.style.display = minusIcon.style.display === 'none' ? 'inline-block' : 'none';
            }

            // Collapse other accordions when one is clicked
            const parentCollapse = button.closest('.accordion-item').querySelector('.accordion-collapse');
            const allCollapses = document.querySelectorAll('.accordion-collapse');
            allCollapses.forEach(function (collapse) {
                if (collapse !== parentCollapse) {
                    collapse.classList.remove('show');
                    const accordionButton = collapse.previousElementSibling.querySelector('.accordion-button');
                    const accordionPlusIcon = accordionButton.querySelector('.plus-icon');
                    const accordionMinusIcon = accordionButton.querySelector('.minus-icon');
                    if (accordionPlusIcon && accordionMinusIcon) {
                        accordionPlusIcon.style.display = 'inline-block';
                        accordionMinusIcon.style.display = 'none';
                    }
                }
            });

            // Toggle collapse of the clicked accordion
            parentCollapse.classList.toggle('show');
        });
    });
});
// Get the current year
const currentYear = new Date().getFullYear();

// Update the text content of the span element with the current year
document.getElementById("currentYear").textContent = currentYear;