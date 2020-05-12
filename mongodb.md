```
use db-name-test
```

```
db.tours.insertMany({ name: 'The forest hiker', price: 297, rating: 4/7})
```

```
db.tours.insertOne({ name: 'The forest hiker', price: 297, rating: 4/7})
```

```
db.tours.find()
```

```
show dbs
```

```
use admin
```

```
use db-name-test
```

```
show collections
```

### CRUD

#### Creating Documents

```
db.tours.insertMany([
  { name: 'The sea explore', price: 297, rating: 4.7 },
  { name: 'The show adventure', price: 260, rating: 3.9, difficulty: 'easy' },
])
```

```
db.tours.find()
```

#### Querying (Reading) Documents

```
db.tours.find({ name: 'the forest' })
```

```
db.tours.find({ difficulty: 'easy' })
```

```
db.tours.find({ price: ${lte: 500} })
```

```
db.tours.find({ price: ${lt: 500}, rating: ${gte: 4.8} })
```

```
db.tours.find({ $or: [{price: {$lt: 500}}, {rating: 4.8}] })
```

#### Updating Documents

```
db.tours.updateOne({name: "The Snow Adventure"}, {$set: {price: 597}})
```

```
db.tours.updateMany({price: {$gt:  500}}, {$set: {price: 597}})
```

#### Deleting Documents

```
db.tours.find()

// 全てのtoursを表示
```

```
db.tours.deleteMany({rating: {$lt: 4.8}})

// rating(評価)が4.8以下の要素を削除する
```

```
db.tours.deleteMany({})

// 空白のオブジェクトの場合、全削除（※＊注意※＊）
```

---

### Mongoose

CRUD

```javascript: controller.js
exports.createTour = async (req, res) => {
  const newTour = await Tour.create(req.body);
};
```
