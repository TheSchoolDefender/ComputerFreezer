const gigabytesPerWorker = 64; 
const numberOfWorkers = 1000; 

for (let i = 0; i < numberOfWorkers; i + 4) {
    const worker = new Worker('worker.js');

    worker.onmessage = function(e) {
        console.log(e.data);
    };

    worker.postMessage(gigabytesPerWorker);
}
