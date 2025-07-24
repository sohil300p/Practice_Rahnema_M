//Mehdi Safari's Linked List Practice

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
}

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  join(otherList) {
    if (!otherList.head) return;

    if (!this.head) {
      this.head = otherList.head;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = otherList.head;
  }

  map(fn) {
    const newList = new LinkedList();
    let current = this.head;
    while (current) {
      newList.append(fn(current.value));
      current = current.next;
    }
    return newList;
  }

  filter(fn) {
    const newList = new LinkedList();
    let current = this.head;
    while (current) {
      if (fn(current.value)) {
        newList.append(current.value);
      }
      current = current.next;
    }
    return newList;
  }

  toArray() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

//Testing program

const list1 = new LinkedList()
list1.append(1)
list1.append(2)
list1.append(3)
console.log(list1.toArray()) 

list1.prepend(0)
console.log(list1.toArray()) 

console.log(list1.size()) 
console.log(list1.at(2))

const list2 = new LinkedList()
list2.append(4)
list2.append(5)

list1.join(list2)
console.log(list1.toArray())

const doubled = list1.map(x => x * 2)
console.log(doubled.toArray())

const evens = list1.filter(x => x % 2 === 0)
console.log(evens.toArray())
