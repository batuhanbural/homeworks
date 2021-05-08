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
        $(this).replaceWith("<h2>" + $(this).text() + " (" + p_len_arr[index] + " karakter)</h2>")

    })
})


// görev 5
$(document).ready(function () {
})

// görev 6

// görev 7

// görev 8

// görev 9

// görev 10