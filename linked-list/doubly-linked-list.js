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

  remove () {
    if (this.tail) {
      const lastNode = this.tail // Get the last node.
      const aboutToBeLastNode = lastNode.backward // Second last is about to be last node.
      aboutToBeLastNode.forward = null // Set the second last to null
      this.tail = aboutToBeLastNode // Make the second last as last node and set to tail.
      this.length -= 1
    }
  }

  insertAt (pos, node) {
    if (pos >= this.length) {
      console.log('Position is greater than linked list length')
      return
    }
    let i = 0
    let currentNode = this.head
    while (i < pos) {
      currentNode = currentNode.forward
      i += 1
    }

    let previousNode = null

    if (currentNode.backward) {
      previousNode = currentNode.backward
    } else {
      this.head = node
    }

    if (!currentNode.forward) {
      this.tail = node
      previousNode = currentNode
      currentNode = null
    }

    if (previousNode) previousNode.forward = node
    node.backward = previousNode
    node.forward = currentNode
    if (currentNode) currentNode.backward = node

    this.length += 1
  }

  removeAt (pos) {
    if (pos >= this.length) {
      console.log('Position is greater than linked list length')
      return
    }
    let i = 0
    let currentNode = this.head
    while (i < pos) {
      currentNode = currentNode.forward
      i += 1
    }
    let previousNode = null
    let nextNode = null


    if (currentNode.forward) {
      nextNode = currentNode.forward
    }

    if (currentNode.backward) {
      previousNode = currentNode.backward
    }

    if (previousNode) previousNode.forward = nextNode
    if (nextNode) nextNode.backward = previousNode

    if (!previousNode) this.head = nextNode
    if (!nextNode) this.tail = previousNode

    this.length -= 1
  }

  findAt (pos) {
    if (pos >= this.length) {
      return 'Position is greater than linked list length'
    }
    let i = 0
    let currentNode = this.head
    while (i < pos) {
      currentNode = currentNode.forward
      i += 1
    }
    return currentNode.Data
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
const node4 = new Node('25')

linkedList.add(node)
linkedList.add(node2)
linkedList.add(node3)
linkedList.print()
linkedList.insertAt(1, node4)
linkedList.removeAt(3)
linkedList.print()
console.log(linkedList.findAt(3))
