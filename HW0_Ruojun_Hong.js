/**
 * Homework 0 - Social Multiplayer Games
 * Ruojun Hong
 * 
 * HW0: writing a small JavaScript function
    Write a javascript function called ‘findPath(maze)’ that receives a 2-dimensional array ‘maze’ representing a maze (an element with “x” means the cell is blocked, and an element with “” means it’s non-blocked), and returns a path (if one exists) from the top left corner ([0,0]) to the bottom right corner (last element).
    E.g., 
    findPath(
    [["","x"],
    ["",""],
    ["x",""]])
    will return [[0,0], [1,0], [1,1], [2,1]]

    If there is no path, return null. 

 */

function findPath(maze){
    let m = maze.length;
    let n = maze[0].length;
    //initialize helper arrays
    let wasHere = [];
    let path = [];
    //set all entries to be 1
    for (let i= 0; i < m; i++) {
        wasHere[i] = [];
        path[i]=[];
        for(let j = 0;j< n;j++){
            wasHere[i].push(1);
            path[i].push(1);
        }
    }
    //recursively find the path
    function recFind(x,y){
        //reaches the end and found a path
        if(x==m-1&&y==n-1) {
            path[x][y]=0;
            return true;
        }
        //no path
        if(maze[x][y]=="x"||wasHere[x][y]==0) {return false};
        wasHere[x][y]=0;
        if(x!=0){
            if(recFind(x-1,y)){
                path[x][y]=0;
                return true;
            }
        }
        if(x!=m-1){
            if(recFind(x+1,y)){
                path[x][y]=0;
                return true;
            }
        }
        if(y!=0){
            if(recFind(x,y-1)){
                path[x][y]=0;
                return true;
            }
        }
        if(y!=n-1){
            if(recFind(x,y+1)){
                path[x][y]=0;
                return true;
            }
        }
        return false;
    }

    let result = recFind(0,0);

    if(result) {
        let solution = [];
        
        for (let i= 0; i < m; i++) {
            for(let j = 0;j< n;j++){
                if(path[i][j]==0) solution.push([i,j]);
            }
        }
        return solution;
    }
    return null;
}

findPath(
  [["","x"],
  ["",""],
  ["x",""]]);
