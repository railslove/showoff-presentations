!SLIDE callout cyan

# open

your data!

!SLIDE callout lila

# if you won't do it

we will

!SLIDE

# After 4 days hacking @ Railslove & Advance Hackathon we have

* Information about stations incl. some meta information about the environment (backery, ticketingmachine, klo)
* http://localhost:3001/api/v1/stations.json
* Information about lines or incl. the line run and the official station id and travel time between stops 
* http://localhost:3001/api/v1/lines.json, http://localhost:3001/api/v1/lines/1.json
* Aliases for destination names: Sürth vs. Bf. Sürth

!SLIDE callout

# our data are have more structure

than KVB's does

!SLIDE callout sk-red

# and it's 

MACHINE READABLE MOTHERFUCKER

!SLIDE callout

MACHINE

!SLIDE callout sk-red

READABLE

!SLIDE

# For what is that good?

* Find your favorite station - eg.: you don't know if one of 2 stations have a büdsche or backery
* Comment a station - eg.: ticket machine is broken, etc.
* Better Services - we spend min. an hour im ÖPNV daily (15 Days in a year) - we need better services during our journey
* Integrate Social Networks - Dating at a bus stop when the bus is late? <3

!SLIDE callout

# and of course we have a built in

KVB-LTS (TM)

!SLIDE callout orange

# what KVB-LTS (TM) stands for?

KVB Live Tracking System

<!SLIDE full-page-image>

<img src="kvb.png" alt="KVB-LTS" height="768px" />

!SLIDE

# TODO's

* Deploy the API
* Start scraping EVERY Line (approx. 500.000 push-notifications per day) (at this moment KVB will KILL US)
* Deploy the tracking frontend
* A lot of bugfixing (calculations are wrong, stations positions are not exact, the line runs are not right, the frontend buggy)
* enrich the stations with more metadata (klo, büdsche, bäcker, etc.)
* Start building apps using our API
* KVB-LTS is not working perefctly
* Exact position of Stops

!SLIDE callout

# join us

https://github.com/koos/kvb-tracker, https://github.com/koos/kvb-api

!SLIDE callout orange

# Credits

Maximilian Schulz, Bodo Tasche, Mike Poltyn, Philipp Brumm, Jan Wittmann