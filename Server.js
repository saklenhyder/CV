import java.net.*;
import java.io.*;

public class client{
    public static void main(string[]args) throws IOException{
        ServerSocket ss = new ServerSocket (4999);
        Socket s = ss.accept();
    }
}
