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
    console.log('this.storage :>> ', this.storage);
  }
}

module.exports = HashTable;
