# WEBAPPS oF the FUtURE!

Christchurch, Aotearoa

---

The future is already here, it's just not evenly distributed.

-- William Gibson

---
# world trends

* wealth and power concentration
* more latency (space travel)
* disk grows far faster than bandwidth

---
# the internet of things

```
The door refused to open. It said, "Five cents, please."
He searched his pockets. No more coins; nothing. "I'll pay you
tomorrow," he told the door. Again it remained locked tight.
"What I pay you," he informed it, "is in the nature of a
gratuity; I don't have to pay you."

"I think otherwise," the door said. "Look in the purchase
contract you signed when you bought this conapt."

...he found the contract. Sure enough; payment to his door for
opening and shutting constituted a mandatory fee. Not a tip.

"You discover I'm right," the door said. It sounded smug.
```

---

```
“From the drawer beside the sink Joe Chip got a stainless steel
knife; with it he began systematically to unscrew the bolt
assembly of his apt's money-gulping door.

"I'll sue you," the door said as the first screw fell out.

-- Philip K. Dick, Ubik
```

---
# what the future needs

* more screwdrivers
* fewer doors

---
# webapps are going to get really huge

tens, hundreds of megabytes of javascript!

---

Scaling rich immersive applications over lousy connections:

cache everything forever!

---
# application versioning

http://www.engadget.com/2015/03/06/utorrent-bitcoin-miner/

"Popular torrent client can steal your CPU cycles to mine bitcoins"

"uTorrent's parent company BitTorrent has denied that the software is installed
without user consent, and told The Verge "we have reviewed the issue closely and
can confirm there is no silent install happening... most likely, the users
accepted the offer during the install."

---
# appcache manifesto

brick your website!

Once your website is loaded, it will always load. Forever.

Opt-in to updates.

---
# demo: hyperboot

---
# authentication

Single sign-on is highly centralized.

User identities are a valuable commodity to online platforms.

---
# distributed authentication

distributed single sign-on:

asymmetric cryptography!

completely decentralized and works offline

---
# demo: keyboot

---
# DHTs

distributed hash tables, like bittorrent!

* ipfs
* webtorrent

---
# scaling

Inverse scaling of DHTs:

the MORE people download content,
the BETTER the network performs.

---

What kinds of applications can we build on top of a DHT?

---
# binary tree

```
      7
    /   \ 
   4      9
  / \    / \
 2   6  8    15
```

---
# kd tree

KD tree: like a binary tree,
but compare against a different axis each level

```
X                 [15,7,50]
                 /         \
Y       [30,4,20]           [40,9,5]
        /       \            /    \
Z [24,80,15] [80,90,25] [20,44,3] [70,4,15]

X  ...

Y  ...
```

---
# kd tree

proximity queries: which nodes are nearest?

---
# B trees

really good for block-based disk or network IO

Just store B-many elements per node.

---
# spatial database on a plane: mddf

KD B tree

with data attachments

---
# demo: mddf


---
# content-addressable data

the address is the hash of the content

---
# merkle DAG

like git!

A -> B -> C -> D

* trivial data replication

---
# demo: content-addressable-blob-store

Let's build a merkle DAG.

---
# demo: forkdb

Let's use a merkle DAG that already exists!

---
# demo: forkdb in the browser

and now, forkdb in the browser!

---
# demo: shipboard

---
# the future of webapps

Frontend development requires
all the same tricks as backend development now,
and more!

With npm+browserify we can reuse the backend code!

---
# app stores

what if app-store style delivery
were built on merkle DAGs, asymmetric crypto,
and secure feeds?

---
# web sites

What if users could veto javascript releases from websites?

What if users controlled the machinery for their own content?

What if cryptographic signatures replaced user accounts?

---
# the future of services

everything charges you money

your door charges you five cents to open

all your movements are being tracked by governments
and marketers

---
# multidimensional databases


---
# economics

one way of looking at money:

it's a proxy for human work, attention, and resources

---
# economics of the future

* disk
* network
* cpu

---
# the william gibson future

```
The future is already here,
it's just not evenly distributed.

-- William Gibson
```

---
# conway's law

Technology is an artifact of the
social structure and circumstance that produced it.

---
# conway's law examples

java people who want java in the frontend in huge teams -> Angular

rails people who want rails for the frontend -> Ember

---
# what kinds of social shifts are we likely to see?

the jetsons, same as the flintstones

---
# what we're going to need

* social coordination
* data replication
* distributed common infrastructure

---
# DHT

* bittorrent / webtorrent
* ipfs

---
# the future

* peer to peer (webrtc)
* replication
* offline

---
# tools

fully collaborative tools

tools for building real things

---
# the future!

Apps are 

