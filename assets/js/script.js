document.addEventListener("DOMContentLoaded", function () {
    const tab1 = document.getElementById("tab1");
    const tab2 = document.getElementById("tab2");
    const content1 = document.getElementById("content1");
    const content2 = document.getElementById("content2");

    function showContent(contentToShow, contentToHide) {
        contentToHide.classList.remove("active");
        setTimeout(() => {
            contentToHide.style.display = "none";
            contentToShow.style.display = "block";
            setTimeout(() => contentToShow.classList.add("active"), 10);
        }, 500); // Matches transition duration
    }


    tab1.addEventListener("click", function () {
        showContent(content1, content2);

        tab1.style.backgroundColor="#342f2f";
        tab2.style.backgroundColor="#2f2b2b";
        tab1.style.zIndex="2"
        tab2.style.zIndex="1"
    });

    tab2.addEventListener("click", function () {
        showContent(content2, content1);

        tab1.style.backgroundColor="#2f2b2b";
        tab2.style.backgroundColor="#342f2f";
        tab1.style.zIndex="1"
        tab2.style.zIndex="2"
    });

    // Initialize
    content1.style.display = "block";
    setTimeout(() => content1.classList.add("active"), 10);
});