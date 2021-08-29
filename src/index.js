
// You should implement your task here.





module.exports = function towelSort (matrix) {
    let sortedMatrix = [];

    if(matrix.length !== 0) {
        for(let i = 0; i < matrix.length; i++) {
            if(i % 2) {
                for(let j = matrix[i].length -1; j >= 0; j--) {
                    sortedMatrix.push(matrix[i][j]);
                }
            } else {
                for(let j = 0; j < matrix[i].length; j++) {
                    sortedMatrix.push(matrix[i][j]);
                }
            }
            
        }
    } else {
        return [];
    }

    return sortedMatrix;
}
