document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('video');
    document.addEventListener('click', function () {
        video.muted = false;
    }, { once: true });
});