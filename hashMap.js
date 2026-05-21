class Node {
    constructor(key, value) {
        this.value = {key: key, value: value};
        this.next = null;
    }
}

class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;

        this.buckets = new Array(this.capacity).fill(null);

        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for(let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);
        if(index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        const newNode = new Node(key, value);
        if(this.buckets[index] === null) {
            this.buckets[index] = newNode;
            this.size++;
        }
        else {
            let current = this.buckets[index];

            while(current !== null) {
                if(current.value.key === key) {
                    current.value.value = value;
                    return;
                }

                if(current.next === null) break;
                current = current.next;
            }

            current.next = newNode;
            this.size++;
        }
    }

    get(key) {
        const index = this.hash(key);
        if(index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        let current = this.buckets[index];
        while(current !== null) {
            if(current.value.key === key) return current.value.value;
            current = current.next;
        }

        return null;
    }

    has(key) {
        const index = this.hash(key);
        if(index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        let current = this.buckets[index];

        while(current !== null) {
            if(current.value.key === key) return true;
            current = current.next;
        }

        return false;
    }

    remove(key) {
        const index = this.hash(key);
        if(index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        let current = this.buckets[index];
        let previous = null;

        while(current !== null) {
            if(current.value.key === key) {
                if(previous === null) {
                    this.buckets[index] = current.next;
                }
                else {
                    previous.next = current.next;
                }
                
                this.size--;
                return true;
            }

            previous = current;
            current = current.next;
        }

        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.capacity).fill(null);
        this.size = 0;
    }

    keys() {
        const keyArray = [];

        for (let i = 0; i < this.buckets.length; i++) {
            let current = this.buckets[i];

            while(current !== null) {
                keyArray.push(current.value.key);
                current = current.next;
            }
        }

        return keyArray;
    }

    values() {
        const valueArray = [];

        for(let i = 0; i < this.buckets.length; i++) {
            let current = this.buckets[i];

            while(current !== null) {
                valueArray.push(current.value.value);
                current = current.next;
            }
        }

        return valueArray;
    }

    entries() {
        const entriesArray = [];

        for(let i = 0; i < this.buckets.length; i++) {
            let current = this.buckets[i];

            while(current !== null) {
                entriesArray.push([current.value.key, current.value.value]);
                current = current.next;
            }
        }

        return entriesArray
    }
}
