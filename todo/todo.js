$(function () {
    let array = [];

    $('button').on('click', function () {
        let todoList = eInput.val();
        array.push(todoList);

        $.post('https://jslogin-fa2eb-default-rtdb.firebaseio.com/',
            JSON.stringify(todoList));
        console.log(todoList);
        function(data,status){
            if (status === 'success') {
                console.log('data gonderildi')
            }
            else{
                console.log(err)
            }
        }
    })
})