var scroll = 0;

function showMore() {
    let more  = document.getElementsByClassName("_1f0fvyce");
    scroll = -document.documentElement.getBoundingClientRect().top;

    if(more.length) {
        if(!more[0].getElementsByTagName("div").length) {
            more[0].click();

            let forum = document.getElementsByClassName("_1glufx42")[0].parentElement;
            let observer = new MutationObserver(() => {
                window.scrollTo(0, scroll);
                observer.disconnect();
            });
            observer.observe(forum, { childList : true });

            return true;
        }
    }

    return false;
}
// _1f0fvyce exists and has no <div> within
setInterval(showMore, 100);