// https://nodejs.org/api/child_process.html#child_process_child_send_message_sendhandle_options_callback
// https://nodejs.org/api/process.html#process_event_message
// Parent (child_emulator.send) -> Child (process.on)
// Child (process.send)         -> Parent (child_emulator.on)

var instance_child_process = require('child_process');
var fork = instance_child_process.fork;

var child_emulator = fork(__dirname + '/test_fork_child');
var num = 100;

// Listen from child emulator process
child_emulator.on("message", function (data) {
    if (data.type === 'result_half') {
        console.log("Result half of %s with result: %s", num, data.value);
    }

    // Send event cancel child process
    child_emulator.send({type: 'exit'});
});

// Send event calculator half of number
child_emulator.send({type: 'half', num: num});