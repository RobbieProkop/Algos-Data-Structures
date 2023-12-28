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
    return hash % max;
  }

  print() {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] !== undefined) {
        return console.log(`Bucket ${i} :>> `, this.storage[i]);
      }
      console.log(`Bucket ${i} is Empty`);
    }
  }

  set(key, value) {
    const index = this._hash(key, this.limit);

    // if no index, let's set it
    if (this.storage[index] === undefined) {
      this.storage[index] = [key, value];
    } else {
      // this else is for collison detection
      let inserted = false

      for (let i = 0; i < this.storage[index]; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        this.storage[index].push([key, value])
      }
    }

    console.log('storage[index] :>> ', this.storage[index]);
  }
}

module.exports = HashTable;
