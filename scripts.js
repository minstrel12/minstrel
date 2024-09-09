document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("预约已提交！我们将尽快联系您。");
        form.reset();
    });
});