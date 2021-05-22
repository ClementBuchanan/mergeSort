# mergeSort - Code Challenge 27

## Collaboratos: Clement Buchanan

## Challenge Summary
Review the pseudocode then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

Once you are done with your article, code a working, tested implementation of Insertion Sort based on the pseudocode provided.

## Visual Process
![Whiteboard](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

[Click here for reference](https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMerge_sort&psig=AOvVaw3KstEWCqadB5Esd38VkvUu&ust=1621732962995000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICUiZ6Q3PACFQAAAAAdAAAAABAJ)


## Whiteboard
![](assets/Merge%20Sort.png)

## Approach & Efficiency

Sort arrays by splitting arrays

Time Complexity: 0(n log n)


## Solution
[Link to the code](https://github.com/ClementBuchanan/InsertionSort/blob/main/index.js)


## blog article

1. We're first going to use two functions to get this job done.
   1. A mergeSort
   2. A merge
2. In the mergeSort function we're going to ckeck if the array can be split. If it can then we find the middle index.
3. We split the arrray into two sides (right and left sides) using recursion to continue splitting until we have single index array.
4. In the merge function we create a new array and check if either the left side or right side arrays are empty.
5. if either of them are not empty we will check for the smaller value in each
   1. find the lower value between the two of them and based on that we will add the left of right value to the new array we created.
6. After we will begin to merge the arrays beginning with t he left then the right.
7. Ultimately we will return the sorted array. 
