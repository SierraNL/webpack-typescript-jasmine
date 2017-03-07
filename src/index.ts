export class Index {

    public Multiply(a: number, b: number): number {
        return a * b;
    }

}

var runMe = new Index();
document.body.innerHTML = runMe.Multiply(2,3).toString();