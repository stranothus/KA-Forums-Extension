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

setInterval(showMore, 100);


const search = document.createElement("input");
search.id = "KA-forums-search";

search.addEventListener("keyup", () => {
    let posts = document.getElementsByClassName("_1glufx42");
    if(posts.length) {
        let searchVal = search.value.split(/(?<!\\),/);
        for(let i = 0; i < posts.length; i++) {
            let matched = false;
            for(let e = 0; e < searchVal.length; e++) {
                if(posts[i].textContent.match(new RegExp(searchVal[e].replace(/(\\|\+|\|\(|\)|\^|\$|\/)/g, "\\$1"), "i"))) {
                    matched = "true";
                }
            }

            if(matched) {
                posts[i].style.display = "block";
            } else {
                posts[i].style.display = "none";
            }
        }
    }
});

function initSearch() {
    if(document.getElementsByClassName("_3p5c27i").length) {
        clearInterval(timer)
        document.getElementsByClassName("_3p5c27i")[0].before(search);

        let observer = new MutationObserver(() => {
            timer = setInterval(initSearch, 100);
            observer.disconnect();
        });
        observer.observe(document.getElementsByClassName("_3p5c27i")[0], { childList : true });
    }
}

var timer = setInterval(initSearch, 100);