observableFunc.subscribe({
    next: function (value) {
        console.log('got value ' + value);
    },
    error: function (err) {
        console.log('something wrong occurred: ' + err);
    },
    complete: function () {
        console.log('done!');
    }
})