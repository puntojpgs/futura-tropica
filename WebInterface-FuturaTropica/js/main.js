const peers = document.getElementById('peers');

fetch('http://90.187.37.21:5001/api/v0/swarm/peers', {
    method: 'POST'
})
    .then(res => res.json())
    .then(data => {

        console.log("data", data)

        for (p in data.Peers) {

            var r = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/; //http://www.regular-expressions.info/examples.html
            var a = data.Peers[p].Addr;
            var t = a.match(r);

            if (!t || !t.length) continue;

            peers.innerHTML += '<section><p><strong>Found peer!</strong><br/>';
            //peers.innerHTML += '<span class="dot"></span>';

            peers.innerHTML += '<a href="http://' + t[0] + '">'+ t[0] + '</a><br/>';
            peers.innerHTML += 'Peer ID: ' + data.Peers[p].Peer + '</p></section>';
        }



    });

