self.onmessage = function(e) {
    const bytesPerGB = 1024 * 1024 * 1024;
    let totalAllocated = 0;
    function allocateAndTrack(gigabytes) {
        try {
            new ArrayBuffer(gigabytes * bytesPerGB);
            totalAllocated += gigabytes;
            self.postMessage(`Successfully allocated ${totalAllocated} GB in total.`);
        } catch (error) {
            self.postMessage(`Failed to allocate additional ${gigabytes} GB. Total allocated: ${totalAllocated} GB. Error: ${error}`);
            self.close(); 
        }
    }
    const initialAllocationSize = e.data;
    while (true) {
        allocateAndTrack(initialAllocationSize);
    }
};
