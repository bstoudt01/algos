//21. Merge Two Sorted Lists
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



//26. Remove Duplicates from Sorted Array and return the length
let numbers = [1, 1, 2]
const originalNumbers = numbers.length;

var removeDuplicates = function (nums) {
    //starting with the first index in the array
    for (let i = 0; i < nums.length; i++) {

        //check if the value of that index is equivelant to the value of the neighboring index
        while (nums[i + 1] == nums[i]) {

            //while that is true, remove the index from which the comparison started
            nums.splice(i, 1)
        }

        //after while loop closes, the for loop runs again as i++
    }
};
removeDuplicates(numbers);
console.log("removeDuplicates original length", originalNumbers, "new length", numbers.length)

/****************************************************/




