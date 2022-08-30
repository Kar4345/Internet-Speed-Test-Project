///Users/kartikghudawad/Documents/Internet_Speed_Project/node_modules/fast-speedtest-api/src/Api.js
console.log("fast-speed-test",this);

let speedtest = new FastSpeedtest({
    token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
    verbose: false, // default: false
    timeout: 10000, // default: 5000
    https: true, // default: true
    urlCount: 5, // default: 5
    bufferSize: 8, // default: 8
    unit: FastSpeedtest.UNITS.Mbps, // default: Bps
   
});

const speed = document.getElementsByClassName("speed")[0];

speedtest.getSpeed().then(s => {
    speed.innerHTML = `Speed: ${s} Mbps`;
    console.log(`Speed: ${s} Mbps`);
}).catch(e => {
    console.error("Not showing");
});