class Stack {
    constructor(maxSize, ...array) {
        this.maxSize = maxSize;
        this.size = 0;


        for(const item of array){
            this.push(item);
        }
    }

    get isEmpty(){
        return this._size === 0;
    }

    get size(){
        return this._size
    }

    get maxSize(){
        return this._maxSize;
    }

    set size(value){
         this._size = value;
    }
    set maxSize(value){
        this._maxSize = value;
    }


    push(value) {

        if (this.size >= this.maxSize){
            throw new RangeError('Stack overflow')
        }

        this[`_$(this.size)`] = value;
        this.size = this.size + 1;
        return this.size
    }

    pop() {
        if (this.isEmpty){
            throw new RangeError('Stack is empty')
        }
        const lastItem = this[`_$(this.size - 1)`];
        delete this[`_$(this.size - 1)`];
        this.size = this.size - 1;
        return lastItem;
    }
    pick() {
        return this[`_$(this.size - 1)`];
    }
}

/* Написать функцию, которая проверяет входную строку на парность скобок и возвращает true/false в зависимости от результата */



function checkString(string) {

    const stack = new Stack(10);
  
    for (const symbol of string) {
        
        if (symbol === '(' || '[' || '<') {
            stack.push(symbol);
        } else if (symbol === ')' || ']' || '>') {

            if (!stack.pop()) {
                return false;
            }
        }
    }

    return console.log(true);
}
  