class Solution {
  /**
   * @params {number} A, B, C 
   * @return {number} 
   */
  minValue(A, B, C) {
    // Write the first step below: 
    let minVal = A;
    if (B < minVal) {
      minVal = B;
    }
    if (C < minVal) {
      minVal = C;
    }
    return minVal;
  }
}
