class Graph {
    constructor() {
        this.data = {};
    }

    addEdge(u, v) {
        if (!Object.keys(this.data).includes(u)) {
            this.data[u] = [];
        }

        if (!Object.keys(this.data).includes(v)) {
            this.data[v] = [];
        }

        this.data[u].push(v);
    }

    bfs(start) {
        const visited = this.buildVisited();

        const queue = [];

        queue.push(start);
        visited[start] = true;

        let out = [];

        while(queue.length > 0) {
            let current = queue.pop();

            out.push(current);

            for (let ii = 0; ii < this.data[current].length; ii++) {
                if (!visited[this.data[current][ii]]) {
                    visited[this.data[current][ii]] = true;
                    queue.unshift(this.data[current][ii]);
                }
            }
        }

        return out;
    }

    dfs(start, out) {
        let visited = this.buildVisited();
        this.dfsUtil(start, visited, out);
    }

    dfsUtil(start, visited, out) {
        visited[start] = true;
        out.push(start);

        for (let ii = 0; ii < this.data[start].length; ii++) {
            if (!visited[this.data[start][ii]]) {
                this.dfsUtil(this.data[start][ii], visited, out);
            }
        }
    }

    buildVisited() {
        const visited = {};

        Object.keys(this.data).forEach((key) => {
            visited[key] = false;
        });

        return visited;
    }
}

module.exports = Graph;
