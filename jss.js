function fxx() {
    // var link = document.getElementById('link').value
    // var time = document.getElementById('time').value
    // console.log(link)
    // console.log(time)

    alert("allow popup!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    // alert(parseInt(time) + 1)
    for (var i = 0; i < 1000; i++) {
        sleep(2000).then(() => {
            // meet.window.close();
            // meet.document.getElementsByClassName("Q8LRLc")[0].style.color = "red";
            // meet.console.log(723852380)
            // meet.alert("hasglha")
            window.open("https://www.google.com/");


        });

    }

}