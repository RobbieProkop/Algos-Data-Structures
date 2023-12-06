Given a 3x3 matrix with elements that are either 0 or 1, write a function in JavaScript that takes this matrix as input and returns a new matrix of the same size. For each element in the original matrix that is a 0, your function should determine how many adjacent elements are 1s. An adjacent element can be above, below, to the left, to the right, and diagonally adjacent to the 0. Elements on the edges or corners have fewer adjacent elements. Ensure that your solution accounts for the edge cases and is optimized for efficiency.

example input

```
1 1 0
0 1 1
1 0 1
```

example output

```
- - 3
4 - -
- 3 -
```
