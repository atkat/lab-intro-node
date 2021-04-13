class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length ++
  }

  get(pos) {
     if (pos<this.items.length) return this.items[pos] 
     else  {throw new Error('OutOfBounds')} ;

     // pos<this.items.length ? 
  }

  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items)
    } else throw new Error('EmptySortedList');
  }

  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items)
    } else throw new Error('EmptySortedList');
  }

  sum() {
    return this.items.length > 0 ? this.items.reduce((a,b) => a+b) : 0;
  }

  avg() {
    let avg = this.sum()/this.items.length;
    if(this.items.length > 0) {return avg }
    else  { throw new Error('EmptySortedList')};
  }
}

module.exports = SortedList;

// let list = new SortedList();
// list.add(1);
// console.log(list.items.length);

// let arr = [1,5,6,3]
// arr.push(2)
// arr.sort( (a,b) => a-b ) 
// console.log(arr)