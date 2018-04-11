#Import
-------------------------------
> mongoimport -d lab9 -c zips --file .\zips.json\
> use lab9

#Tasks
-------------------------------
1. Find all the zip codes in Iowa State

> db.zips.aggregate([{$match: {state: 'IA'}}])

2. Find all the zip codes with a population less than 1000.

> db.zips.aggregate([{$match: {pop: {$lt: 1000}}}])

3. Find all cities that have more than one zip code, sort the results based by state and city name.

> db.zips.aggregate([{$group: {_id: {'state':'$state', 'city': '$city'}, cities_count: {$sum: 1}}}, {$match: {cities_count:{$gt: 1}}}, {$sort: {'_id.state':1, '_id.city':1}}, {$project: {_id:0, state: '$_id.state', city: '$_id.city', zipCodeCount:'$cities_count'}}])

4. Display the least populated city in each state

> db.zips.aggregate([{$group:{_id:{state:'$state', city:'$city'}, pop: {$sum:'$pop'}}}, {$sort:{pop:1, '_id.state':1, '_id.city':1}}, {$group: {_id: '$_id.state', city:{$first:'$_id.city'}, pop: {$first: '$pop'}}}, {$project:{_id:0, state: '$_id', leastPopulatedCity: '$city', pop: '$pop'}}, {$sort: {state:1}}])