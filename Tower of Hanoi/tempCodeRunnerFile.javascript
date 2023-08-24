function towerOfHanoi(n,fromTower,viaTower,toTower,trackCount){
    if(n===1){
        console.log('move disk 1 from '+fromTower+' to '+toTower)
        trackCount.count++
        return;
    }
    towerOfHanoi(n-1,fromTower,toTower,viaTower,trackCount);
    console.log('Move disk '+n+' from '+fromTower+' to '+toTower);
    trackCount.count++;
    towerOfHanoi(n-1,viaTower,fromTower,toTower,trackCount);
}

let trackCount={count: 0};
let n=prompt("Enter no. of disks: ");
towerOfHanoi(n,'A','B','C',trackCount);
console.log('Total moves: '+trackCount.count);


