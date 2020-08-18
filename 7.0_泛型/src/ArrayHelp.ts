export class ArrayHelp<T>{
    
    take<T>( arr : T[] , n : number ) : T[]{
        if(n > arr.length){
            return arr;
        }
        const newArr : T[] = [];
        for(let i = 0 ; i < n ; i ++){
            newArr.push(arr[i]);
        }
        return newArr;
    }

    private getRandom(min , max){
        const dec = max - min;
        return Math.floor( Math.random() * dec + min );
    }

    shuffle<T>(arr : T[]){
        for(let i = 0 ; i < arr.length ; i++){
            const targetIndex = this.getRandom(0, arr.length);
            let temp = arr[i];
            arr[i] = arr[targetIndex];
            arr[targetIndex] = temp;
        }
        return arr;
    }

}