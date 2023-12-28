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

  get(key) {
    const index = this._hash(key, this.limit);
    if (this.storage[index] === undefined) {
      return undefined;
    }

    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        return this.storage[index][i][1];
      }
    }
  }

  remove(key) {
    const index = this._hash(key, this.limit);
    //check if the bucket exists
    if (this.storage[index]) {
      // if it does exist, let's check if there are no collisions and only 1 key value pair
      if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
        delete this.storage[index]
      } else {
        //if not, let's iterate through them to see if the key value is in there. Delete it if it is
        for (let i = 0; i < this.storage[index].length; i++) {
          if (this.storage[index][i][0] === key) {
            delete this.storage[index][i]
          }
        }
      }
    }
  }

  has(key) {
    const index = this._hash(key, this.limit);
    if (this.storage[index]) {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return true
        }
      }
    }
    return false

  }

  getValues() {
    const values = [];

    // for (let i = 0)
  }
}

module.exports = HashTable;
