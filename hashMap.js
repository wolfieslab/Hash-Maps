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

    has(key) {
        const index = this.hash(key);
        if(index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        let current = this.buckets[index];
        if(current === null) return false;

        while(current !== null) {
            if(current.value.key === key) return true;
            current = current.next;
        }

        return false;
    }
}

const hashTest = new HashMap();

console.log(hashTest.hash("red"));
hashTest.set("rama", "god");
hashTest.set("red", "yellow");
hashTest.set("sita", "goddess");

console.log(hashTest.buckets);
console.log(hashTest.has("sita"));

