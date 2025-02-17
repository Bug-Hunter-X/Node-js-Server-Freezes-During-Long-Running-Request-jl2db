# Node.js Server Freeze Bug

This repository demonstrates a common issue in Node.js where a long-running request can freeze the server, making it unresponsive to other requests. The bug is caused by blocking the event loop with a synchronous operation that takes too long to process.

## Bug Description

The server.js file contains a simple HTTP server that simulates a long-running task within the request handler. This blocks the event loop, resulting in the server becoming unresponsive to new connections.

## Solution

The server-solution.js file demonstrates how to resolve the issue by using asynchronous operations or offloading long-running tasks to worker threads or background processes. Using asynchronous operations allows the event loop to continue handling other requests while long-running operations are in progress.