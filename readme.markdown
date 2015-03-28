# WEBAPPS oF the FUtURE!

Christchurch, Aotearoa

James Halliday
http://substack.net

Hobbyist Programmer

---

```
The future is already here,
it's just not evenly distributed.

-- William Gibson
```

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
# what the future needs

* more screwdrivers
* fewer doors
* and gigabytes of of javascript

---

Disk is cheap. Network is expensive.

Cache everything forever!

---
# application versioning

http://www.engadget.com/2015/03/06/utorrent-bitcoin-miner/

"Popular torrent client can steal your CPU cycles to mine bitcoins"

"uTorrent's parent company BitTorrent has denied that the software is installed
without user consent, and told The Verge "we have reviewed the issue closely and
can confirm there is no silent install happening... most likely, the users
accepted the offer during the install."

---
# what if!

What if users could veto javascript releases from websites?

What if users controlled the machinery for their own content?

What if cryptographic signatures replaced user accounts?

---
# appcache manifesto

brick your website!

Once your website is loaded, it will always load. Forever.

Opt-in to updates.

---
# demo: hyperboot

---
# distributed offline authentication

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
# B trees

```
        [7] 3 11
       /     \ 
     [4] 5 1  [9] 10 8
    /   \ 
 [2] 0 3 [6] 5
```

---
# spatial database on a plane: mddf

KD + B tree

with data attachments

---

```
[ ptlen ]
pt0: [ coord0, coord1... coordN ] [ offset0 ]
pt1: [ coord0, coord1... coordN ] [ offset1 ]
pt2: [ coord0, coord1... coordN ] [ offset2 ]
...
ptM: [ coord0, coord1... coordN ] [ offsetM ]

[... unallocated space ...]

dataX: [ DATA, length ]
...
data2: [ DATA, length ]
data1: [ DATA, length ]
data0: [ DATA, length ]
[ datalen ]
```

---
# demo: mddf

---
# demo: content-addressable data

key = hash(value)

---
# demo: forkdb

---
# demo: forkdb in the browser

and now, forkdb in the browser!

---
# demo: shipboard

---
# conway's law

Technology is an artifact of the
social structure and circumstance that produced it.

---
# conway's law examples

java programmers built Angular

rails programmers built Ember

---
# conway's law examples

java programmers built Angular

rails programmers built Ember

geographically distributed node.js hackers
build distributed peer to peer modules

---
# the future!

* users will call the shots!
* secure data
* auditable, social application delivery
* services that nobody owns or controls

---
__END__
