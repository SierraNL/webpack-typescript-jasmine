import _ from 'lodash';

export class Index {

    public Multiply(a: number, b: number): number {
        return _.multiply(a, b);
    }

}

const runMe = new Index();
document.body.innerHTML = runMe.Multiply(2, 3).toString();