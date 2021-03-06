//21. Merge Two Sorted Lists into a LINKED LIST
/*Merge two sorted linked lists and return it as a new sorted list. 
The new list should be made by splicing together the nodes of the first two lists. */
let twentyOneListOne = [1, 2, 4];
let twentyOneListTwo = [1, 3, 4];

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (l1, l2) {

    if (!l1) return l2;
    if (!l2) return l1;

    //create dummy/empty linked list for "tail" to point at and add listnode objects
    const result = new ListNode();

    //reference linked list to add next data and pointer
    let tail = result;

    //
    while (l1 && l2) {
        //take the smallest value
        if (l1.val > l2.val) {

            //add/append smallest value as a list node "value" to the tail end
            tail.next = l2;

            //advance the head to the next Node  
            l2 = l2.next;

        } else {
            tail.next = l1;
            l1 = l1.next;
        }

        /* Advance the tail */
        tail = tail.next;
    }
    //if one of the arrays is empty, add the other array elements into linked list
    tail.next = l1 || l2;

    return result.next;
};
let newlyCreatedListNode = mergeTwoLists(twentyOneListOne, twentyOneListTwo);
console.log("mergeTwoLists", newlyCreatedListNode);
/**********************************************************************************/


// piece of data - val
//reference to next node - next

//NODE Constructor
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


//LINKED LIST constructor with instance methods
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    push(val) {
        //look for end of list by looking at length
        var newNode = new Node(val);
        if (this.length === 0) {
            //if (!this.head)

            //create new node to hold value and palce in head location
            this.head = newNode;

            //assign the tail to the head since its the first item
            this.tail = this.head;

            this.length++
        }

        else {
            //set all other val to the tail

            //hold onto old tail
            let oldTail = this.tail
            //set current tail to new node
            this.tail = new Node(val);
            //set the next paramater on old tail
            oldTail.next = this.tail
            this.length++


            /*his way to set value to the tail

            //set current tails next node
            this.tail.next = newNode
            //then set the tail to the new node
            this.tail = newNode
            this.length++

            */

        }
        //return the list
        return this
    }

    pop() {
        //If no node, return undefined 
        if (this.length === 0) return undefined;
        //if (!this.head) return undefined

        //declare variable to hold last value and next to last value to variables while you loop
        let current = this.head;
        let newTail = current;

        //loop through until you reach the tail, while there is current
        //while there is something, there is a next, while there is nothing there is not a next and we stop
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        console.log(current.val)
        console.log(newTail.val)

        //set 2nd to last tail to have next property of null, discounect it fro mthe last node 
        newTail.next = null;
        //this.tail.next = null

        //set the tail to the 2ndd to last node
        this.tail = newTail;

        //decrement length
        this.length--;

        //edge case, when list is empty
        if (this.length === 0) {
            this.head = null;
            this.tail = null
        }

        //return last value
        return current
    }

    //step through list to see the values untill current is not null
    traverse() {
        var current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }

    //shift, removing the node from the head of the list and return that node
    shift() {
        if (!this.head) return undefined;

        //store the current head in a variable
        let currentHead = this.head;

        //set the head to be the current heads next node
        this.head = currentHead.next;

        //decrement length
        this.length--;

        //remove the tail, not required b.c it will be overwritten when the head is assigned
        if (this.length === 0) {
            this.tail = null;
        }

        //Return value of removed node
        return currentHead;
    }

    unshift(val) {
        //declare variable to hold new head values
        let newHead = new Node(val);

        //if there is no head, set the head and tail to our newHead
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
            //this.tail = this.head
        }
        else {
            //set the new nodes next property to the current head
            //makes our connection to the linked list 
            newHead.next = this.head;

            //set the head to the new node
            //assigned our newHead to the head of the list
            this.head = newHead;
        }
        //Increment Length
        this.length++;

        //return the list... or the head , or nothing.. etc..
        return this;

    }

    //get - retrieve a node by its position
    get(idx) {
        //get .next n times, manually counting position (not like an array index)

        //if idx is less than zero OR greater than or equal to length of the list, return null
        if (idx < 0 || idx >= this.length) return null;


        let currentNode = this.head;
        //loop through the list until you reach the index
        for (let i = 1; i <= idx; i++) {
            //assign the currentNode varaible equal to the next property of that node
            currentNode = currentNode.next;
        }

        //answer from algos
        // let counter = 0;
        // while(currentNode !== index) 
        // {
        //     currentNode = currentNode.next;
        //     counter++;
        // }


        //return the node of that index (zero position index)
        return currentNode;
    }

    //set - accept a value and an index
    //update the value at a given position
    set(idx, val) {

        //use get to find the node
        let theNode = this.get(idx)

        //if not found return false
        if (!theNode) return false

        //set the new value into theNode val to update the list
        theNode.val = val

        //return confirmation of update
        return true
    }

    //insert a new node @ specified position
    //idx, val
    insert(idx, val) {

        //if idx is less than zero or gerater than length, return false
        if (idx < 0 || idx > this.length) return false;

        //if index is the same length, push a new node to the end of the list
        //instead of if/else statments to handle all repsonses being t/f you can add !! to the push and unshift edge cases and negate the response
        // return !!this.push(val); ... any return would be evaluated, response from the method are true,
        if (idx == this.length) {
            this.push(val)
        }

        //if the idx is 0, unshift a new node to the start of the list
        else if (idx === 0) {
            this.unshift(val);
        }
        else {

            //take node before the index you want and point the next val at the new node
            //get index -1
            const prevNode = this.get(idx - 1);

            //create new node
            //place new value into a node  to be set into the list
            let newNode = new Node(val);

            //set the next property on the newNode to point at the node index you are inserting into
            newNode.next = prevNode.next;
            //take  prevNode and point at the  newNode that was just placed into in the index next to it, to the right of the prevNode
            prevNode.next = newNode;

            //algo example
            //var temp = prev.next
            //prevNode.next = newNode
            //newNode.next = temp;

            //increment the length
            this.length++
        }

        //return true if successful
        //push/unshift dont return t/f, so you have to handle that response (we used if / else)
        return true;
    }

    //remove - takes index, removes that index and patches around it (more complicated to remove from the middle than the ends)
    remove(idx) {

        if (idx < 0 || idx >= this.length) return null;

        //if index is the same as the length -1, pop
        if (idx === this.length - 1) return this.pop();

        //if index is 0, shift
        if (idx === 0) return this.shift();

        //other wise handle insert into middle get meothd -1 to get previous node
        const prevNode = this.get(idx - 1);

        //get new node to have value
        const removedNode = prevNode.next;

        //set next property on that prevNode to be the next of the removednode, 
        //now the previous node points to the node that the removed node had pointed to
        prevNode.next = removedNode.next

        //decrement the length
        this.length--;
        //return the value of the node removed
        return removedNode.val;
    }

    //REVERSE - traverse and reverse in place
    reverse() {

        //swap the head and the tail
        const oldHead = this.head;
        this.head = this.tail;
        this.tail = oldHead;

        //SLIDING WINDOW
        //create a variable called next to grab the next value of the oldHead (this.tail)
        //if you use a for loop, you do not need in instantiate the next value, but we need to since we use a while loop thats watching that value
        let next = this.tail.next;

        //create a variable called prev, to old the previous node
        let prev = null;

        //create a variable called current to hold the old head (before the reverse happens)
        let current = this.tail;

        //loop through the list
        while (next) {

            //set the next to be the next property on whatever the node is, can also create the next variable here instead of enstanciating above
            next = current.next;

            //set the next porperty on the current node to be whatever prev is
            current.next = prev;

            //set the previous node to be the current node
            prev = current;

            //set the current node to be the value of the the next node
            current = next;

        }

        return this
    }
}


// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push(10)
list.push(11)
list.push(12)
list.push(99)
//console.log(list)
//console.log(list.pop());
// list.pop();
//console.log(list.shift());
//console.log(list.unshift(1))

//console.log(list.get(2))
// list.traverse();
//console.log(list.set(1, 66))
//console.log(list.get(0));
//console.log(list.insert(-1, 22));
//console.log(list.remove(3))
console.log(list.reverse())
console.log(list);
