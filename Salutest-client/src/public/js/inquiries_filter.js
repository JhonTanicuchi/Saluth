function inquiries_filter() {
    const answer = document.getElementById("answer");
    const filter = answer.value.toUpperCase();
    const preview_answer = document.getElementById("preview_answer");
    preview_answer.innerHTML = filter;
};