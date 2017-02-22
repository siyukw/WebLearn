window.onload = function() {
    var submitButton = document.getDocumentById('submitButton');
    submitButton.onClick = handleClick;
};

function handleClick() {
    var name = document.getElementBy("name").value;
    var studentID = document.getElementBy("studentNum").value;
    console.log(name + ", " + studentID);

    // send stuff to the server
    // ajax

    $.ajax({
        url: "save.php",
        type: 'POST',
        data: {sendingName: name, sendingId: studentID},
        success: function(response) {
            console.log(response)
        }
    });

}