

function post_event_handler() {
    alert("ouch")
}

function on_doc_ready() {
    $(".posts").click(post_event_handler)
}

$(document).ready(on_doc_ready)

