const ava = require('ava');
const Graph = require('../lib/graph');

ava('Graph constructor', (t) => {
    let graph = new Graph();
    t.deepEqual(graph.data, {}, "The graph's data is incorrect");
});

ava('Graph addEdge', (t) => {
    let graph = new Graph();

    graph.addEdge('a', 'b');
    t.deepEqual(graph.data, {a: ['b'], b: []}, "The graph's data is incorrect");

    graph.addEdge('a', 'c');
    t.deepEqual(graph.data, {a: ['b', 'c'], b: [], c: []}, "The graph's data is incorrect");

    graph.addEdge('b', 'd');
    t.deepEqual(graph.data, {a: ['b', 'c'], b: ['d'], c: [], d: []}, "The graph's data is incorrect");
});

ava('Graph BFS', (t) => {
    let graph = new Graph();

    graph.addEdge('a', 'b');
    graph.addEdge('a', 'c');
    graph.addEdge('a', 'f');
    graph.addEdge('b', 'd');
    graph.addEdge('c', 'd');
    graph.addEdge('c', 'e');
    graph.addEdge('d', 'e');
    graph.addEdge('f', 'a');
    graph.addEdge('f', 'g');

    let out = graph.bfs('a');

    let expected = ['a', 'b', 'c', 'f', 'd', 'e', 'g'];

    t.deepEqual(out, expected, "The BFS search didn't match the expected path");
});

ava('Graph DFS', (t) => {
    let graph = new Graph();

    graph.addEdge('a', 'b');
    graph.addEdge('a', 'c');
    graph.addEdge('a', 'f');
    graph.addEdge('b', 'd');
    graph.addEdge('c', 'd');
    graph.addEdge('c', 'e');
    graph.addEdge('d', 'e');
    graph.addEdge('f', 'a');
    graph.addEdge('f', 'g');

    let out = [];
    
    graph.dfs('a', out);

    let expected = ['a', 'b', 'd', 'e', 'c', 'f', 'g'];

    t.deepEqual(out, expected, "The BFS search didn't match the expected path");
});
