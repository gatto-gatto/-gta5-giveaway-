function fxx() {
    function o(o) {
        return new Promise(e => setTimeout(e, o))
    }
    // alert("allow popup!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    for (var e = 0; e < 10000; e++) o(2e3).then(() => {
        // window.open("https://gatto-gatto.github.io/-gta5-giveaway-/")
        window.open("https://google.com");
    })
}