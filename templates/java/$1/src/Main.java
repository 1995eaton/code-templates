public class Main {

  public static void main(String[] args) {
    log("Hello");
  }

  @SafeVarargs
  public static <T> void log(T... args) {
    for (T item: args) { System.out.println(item); }
  }

}
