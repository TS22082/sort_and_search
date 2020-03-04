class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    var node = new Node(element);
    var current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    var node = new Node(element);
    var curr, prev;

    curr = this.head;

    if (index == 0) {
      node.next = head;
      this.head = node;
    } else {
      curr = this.head;
      var it = 0;

      while (it < index) {
        it++;
        prev = curr;
        curr = curr.next;
      }

      // adding an element
      node.next = curr;
      prev.next = node;
    }
    this.size++;
  }

  // removeFrom(location)
  // removes an element from the
  // specified location
  removeFrom(index) {
    if (index > 0 && index > this.size) return -1;
    else {
      var curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      // deleting first element
      if (index == 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the
        // position to removce an element
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // remove the element
        prev.next = curr.next;
      }
      this.size--;

      // return the remove element
      return curr.element;
    }
  }

  // removeElement(element)

  // Helper Methods
  // isEmpty
  // size_Of_List
  // PrintList
  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

var ll = new LinkedList();

ll.add(10);
ll.add(11);
ll.add(12);
ll.add(13);

ll.removeFrom(0);

ll.printList();
