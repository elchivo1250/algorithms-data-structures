class Collection {
    constructor(data) {
        // asbstract equality makes null and undefined equivalent
        if (data != null && !Array.isArray(data)) {
            throw new TypeError('You have provided inital data that is not an array.');
        }

        // copy by value with slice
        this.data = data ? data.slice() : []; 
        this.size = this.data.length;
    }
}

module.exports = Collection;
