var ks = require('node-key-sender');
console.log('Swiping right in 5 seconds , best of luck! ;)');
ks.setOption('startDelayMillisec', 5000);
ks.setOption('globalDelayBetweenMillisec', 1000);
startSwiping();
function startSwiping() {
ks.sendKeys(['right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right','right',])
    .then(function(stdout, stderr) {
        startSwiping();
    })
}

