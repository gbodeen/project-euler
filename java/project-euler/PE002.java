/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
find the sum of the even-valued terms.
*/

public class PE002 {
  public static void main(String[] args) {
    int ceiling = 4000000;
    fibonacci_gen fib = new fibonacci_gen();
    int sum = 0;
    int num = fib.next();
    while (num < ceiling) {
      if ((num & 1) == 0) {
        sum += num;
      }
      num = fib.next();
    }
    System.out.println(sum); // 4613732
  }
}

class fibonacci_gen {
  private int a = 0;
  private int b = 1;
  private int temp;

  public int next() {
    temp = a;
    a = b;
    b = temp + b;
    return b;
  }
}
