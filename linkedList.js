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
        debugger
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
}

//if tail is not set, use while loop to look at .next value until it is not equal to null

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
console.log(list)
//console.log(list.pop());
list.pop();
console.log(list)

list.traverse();