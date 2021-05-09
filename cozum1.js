// görev 1
$(document).ready(function () {
    let gorev1_ul = $("#gorev1 > ul");
    let top3_h2 = $("h2:lt(3)")

    top3_h2.each(function (index, element) {
        const metin = $(this).text();
        gorev1_ul.append("<li>" + metin + "</li>")
    })
})


// görev 2
$(document).ready(function () {
    let gorev2_input = $("#gorev2 :input");
    let all_h2 = $("h2").length;
    gorev2_input.val(all_h2);
})


// görev 3
$(document).ready(function () {
    let gorev3_input = $("#gorev3 :input");
    let h1 = $("h1").text();
    gorev3_input.val(h1);
})


// görev 4
$(document).ready(function () {
    let ps = $("article > div > p");
    let h2s = $("article > div > h2");

    const p_len_arr = [];
    ps.each(function (index, element) {
        const metin = $(this).text();
        p_len_arr.push(metin.length)
    })

    h2s.each(function (index, element) {
        $(this).append(" (" + p_len_arr[index] + " karakter)")

    })
})


// görev 5
$(document).ready(function () {
    let all_h2 = $("article > div > h2")
    let h1 = $("h1")

    h1.css("color", "crimson")

    all_h2.each(function (index, element) {
        if (index % 2 === 0) {
            $(this).css("color", "royalblue")
        } else {
            $(this).css("color", "darkorange")
        }
    })
})

// görev 6
$(document).ready(function (index, element) {
    let first_article = $("article > div").first()

    first_article.mouseover(function () {
        $(this).fadeOut(200);
    })

})

// görev 7
$(document).ready(function () {
    let all_h2 = $("article > div > h2:contains(can)")
    let gorev7_ul = $("#gorev7 > ul");

    all_h2.each(function () {
        gorev7_ul.append("<li>" + $(this).text() + "</li>")
    })
})

// görev 8
$(document).ready(function (index, element) {
    let gorev9_input = $("#gorev9 > input");
    let all_h2 = $("h2")

    all_h2.each(function () {
        $(this).mouseover(function () {
            gorev9_input.val($(this).text())
        })

    })
})

// görev 9
$(document).ready(function (index, element) {

})

// görev 10