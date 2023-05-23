public abstract class Component {
    public void add (Component child) {}
    public void remove (Component child) {}
}

public class Composite extends Component {
    public void add (Component child) {}
    public void remove (Component child) {}
}

public class Left extends Component {
    public void add (Component child) {
        throw new UnsupportedOperationException()
    }
    public void remove (Component child) {}
}
public class client () {
    public static void main(String args[]) {
        Component root = new Composite();
        Component c1 = new Composite();
        Component c2 = new Composite();
        Component leaf1 = new Leaf();
        Component leaf2 = new Leaf();
    }
}
























