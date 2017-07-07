//standardowo jest szesnastkowy (wejście jako buffer)
process.stdin.setEncoding('utf-8');

//na zdarzenie (.on) odczytu (readable), masz wykonać funkcję (function...).
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if(input){
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/version':
                console.log(process.versions.node);
                break;
            case '/system_language':
                console.log(process.LANG);
                break;
            default:
                process.stderr.write('Wrong instruction\n');
        }
    }
});
