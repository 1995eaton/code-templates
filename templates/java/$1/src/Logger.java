public class Logger {
  @SafeVarargs
  public static <T> void LOG(T ...args) {
    for (int i = 0; i < args.length - 1; i++) {
      System.out.print(args[i]);
      System.out.print(' ');
    }
    if (args.length > 0)
      System.out.println(args[args.length - 1]);
  }
}
