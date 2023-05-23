// public class Duck {
//     public void makeSound() {
//         System.out.println('gagaga')
//     }
// }

// public class AnimalSound {
//     public void makeSound(Duck duck) {
//         duck.makeSound()
//     }
// }

// public class Test {
//     public static void main() {
//         AnimalSound animalSound = new AnimalSound();
//         Duck duck = new Duck();
//         animalSound.makeSound(Duck duck);
//     }
// }

public abstract class Animal {
    abstract void sound()
}

public class Chicken extends Animal {
    sound() {
        System.out.println('gegege')
    }
}
public class Duck extends Animal {
    sound() {
        System.out.println('gagaga')
    }
}

public class AnimalSound {
    public void makeSound(Animal animal) {
        animal.sound()
    }
}

public class Test {
    public static void main(String args[]) {
        AnimalSound animalSound = new AnimalSound();
        Animal duck = new Duck();
        Animal chicken = new Chicken();
        animalSound.makeSound(duck);
        animalSound.makeSound(chicken);
    }
}

// 面向接口编程 面向抽象编程 面向实现编程

abstract class Command {
    public abstract void execute();
}
public class OpenTvCommand extends Command {
    public OpenTvCommand () {}
    public void execute() {
        System.out.println('打开电视机')
    }
}



