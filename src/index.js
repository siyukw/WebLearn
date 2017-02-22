window.onload = function() {
    var submitButton = document.getDocumentById('submitButton');
    submitButton.onClick = handleClick;
};

function handleClick() {
    var name = document.getElementBy("name").value;
    var studentID = document.getElementBy("studentNum").value;
    console.log(name + ", " + studentID);

}