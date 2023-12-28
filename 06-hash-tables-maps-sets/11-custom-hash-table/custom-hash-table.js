class HashTable {
  //changing the limit will change the resulting number  due to the modulus of a new limit -- default is 14
  constructor(limit = 14) {
    this.storage = [];
    this.limit = limit;
  }



  _hash(key, max) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    console.log('hash :>> ', hash);
    console.log('max :>> ', max);
    console.log('hash % max :>> ', hash % max);

    return hash % max;
  }

  print() {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] !== undefined) {
        console.log(`Bucket ${i} :>> `, this.storage[i]);
      } else {
        console.log(`Bucket ${i} is Empty`);

      }
    }
  }

  set(key, value) {
    const index = this._hash(key, this.limit);

    // if no index, let's set it
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      // this else is for collison detection
      let inserted = false

      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        this.storage[index].push([key, value])
      }
    }

  }
}

module.exports = HashTable;
