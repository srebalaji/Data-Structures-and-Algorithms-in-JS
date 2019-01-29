// Doubly linked list

/**
 * Create Node with data and backward and forward heads
 * Add in pos
 * delete and delete in pos
 * length
 * get by pos
 */

class DoublyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  get Head () {
    return this.head
  }

  set Head (node) {
    this.head = node
  }

  get Length () {
    return this.length
  }

  print () {
    console.log(`HEAD => ${this.head ? this.head.Data : ''}`)
    console.log(`TAIL => ${this.tail ? this.tail.Data : ''}`)
    console.log(`LENGTH => ${this.length}`)
    let nextNode = this.head
    while (nextNode != null) {
      const backward = nextNode.backward ? nextNode.backward.Data : ''
      const forward = nextNode.forward ? nextNode.forward.Data : ''
      console.log(`(${backward}) ${nextNode.Data} (${forward})`)
      nextNode = nextNode.forward
    }
  }

  add (node) {
    if (this.head) {
      const lastNode = this.tail // Get the last node. (i.e) tail
      lastNode.forward = node // Set the last node forward pointer
      node.backward = lastNode // Set the new node backward pointer
      node.forward = null // Set the new node forward pointer
      this.tail = node // Set the tail to the new node
    } else {
      this.head = node // Set the head
      this.tail = node // Set the tail

      // Set the first node backward and forward pointers
      node.forward = null
      node.backward = null
    }
    this.length += 1
  }
}

class Node {
  constructor (data) {
    this.data = data
  }

  get Data () {
    return this.data
  }

  set Data (data) {
    this.data = data
  }

  set forward (node) {
    this.forwardNode = node
  }

  set backward (node) {
    this.backwardNode = node
  }

  get forward () {
    return this.forwardNode
  }

  get backward () {
    return this.backwardNode
  }
}

const linkedList = new DoublyLinkedList()

const node = new Node('5')
const node2 = new Node('10')
const node3 = new Node('15')

linkedList.add(node)
linkedList.add(node2)
linkedList.add(node3)
linkedList.print()
