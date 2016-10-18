// Listen event from parent
process.on('message', function (data) {
    // Event calculator half number from parent send
    if (data.type === 'half') {
        console.log("Child => half");
        var args = {
            type: 'result_half',
            value: data.num / 2
        };
        process.send(args);
    }

    // Event cancel process of this fork child
    else if (data.type === 'exit') {
        console.log("Child => exit");
        process.exit();
    }
});