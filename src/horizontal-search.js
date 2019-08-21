objective = [
    [1, 2, 3],
    [4, 0, 5],
    [6, 7, 8],
];

initial = [
    [2, 1, 3],
    [4, 0, 5],
    [6, 7, 8],
];

operations = ['nothing', 'up', 'down', 'left', 'right']

class Node {

    constructor(father, state, operation) {
        this.father = father;
        this.state = state;
        this.operation = operation;
    }

    generateNode(state, operation) {
        return new Node(this, state, operation);
    }

    generateChildren(position) {
        let arr = [];

        for(let i = 0; i < this.state.length; i++) {
            arr = arr.concat(this.state[i]);
        }

        let save = arr.slice(0);

        let children = [];

        switch (position) {
            
            case 0:
                [arr[0], arr[1]] = [arr[1], arr[0]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 4));

                arr = save;
                
                [arr[0], arr[3]] = [arr[3], arr[0]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 2));

                break;
            
            case 1:
                [arr[1], arr[0]] = [arr[0], arr[1]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 3));
    
                arr = save;
                    
                [arr[1], arr[2]] = [arr[2], arr[1]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 4));

                arr = save;

                [arr[1], arr[4]] = [arr[4], arr[1]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 2));
    
                break;
            
            case 2:
                [arr[2], arr[1]] = [arr[1], arr[2]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 3));

                arr = save;

                [arr[2], arr[5]] = [arr[5], arr[2]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 2));

                break;

            case 3:
                [arr[3], arr[0]] = [arr[0], arr[3]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 1));

                arr = save;

                [arr[3], arr[4]] = [arr[4], arr[3]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 4));

                arr = save;

                [arr[3], arr[6]] = [arr[6], arr[3]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 2));

                break;

            case 4:
                [arr[4], arr[1]] = [arr[1], arr[4]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 1));

                arr = save;

                [arr[4], arr[3]] = [arr[3], arr[4]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 3));

                arr = save;

                [arr[4], arr[5]] = [arr[5], arr[4]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 4));

                arr = save;

                [arr[4], arr[7]] = [arr[7], arr[4]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 2));

                break;
            
            case 5:
                [arr[5], arr[2]] = [arr[2], arr[5]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 1));

                arr = save;

                [arr[5], arr[4]] = [arr[4], arr[5]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 3));

                arr = save;

                [arr[5], arr[8]] = [arr[8], arr[5]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 2));

                break;

            case 6:
                [arr[6], arr[3]] = [arr[3], arr[6]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 1));

                arr = save;

                [arr[6], arr[7]] = [arr[7], arr[6]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 4));

                break;

            case 7:
                [arr[7], arr[6]] = [arr[6], arr[7]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 3));

                arr = save;

                [arr[7], arr[8]] = [arr[8], arr[7]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 4));

                arr = save;

                [arr[7], arr[4]] = [arr[4], arr[7]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 1));

                break;

            case 8:
                [arr[8], arr[7]] = [arr[7], arr[8]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 3));

                arr = save;

                [arr[8], arr[5]] = [arr[5], arr[8]];
                children.push(this.generateNode(this.arrayToMatrix(arr, 3), 1));

                break;
            
            default:
                break;
        }

        return children;
    }
        
    

    arrayToMatrix(list, elementsPerSubArray) {
        let matrix = [], i, k;
    
        for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }
    
            matrix[k].push(list[i]);
        }
    
        return matrix;
    }

    findNull() {
        let arr = [];
    
        for(let i = 0; i < this.state.length; i++) {
            arr = arr.concat(this.state[i]);
        }
    
        for (let i = 0; i< arr.length; i++) {
            if (arr[i] == 0) {
                return i;
            }
        }

    }

    findState(list, value) {
        list.forEach(element => {
            if (isEqual(element.state, value.state)) {
                return false;
            }
        });

        return true;
    }

}

var isEqual = function (value, other) {

	// Get the value type
	var type = Object.prototype.toString.call(value);

	// If the two objects are not the same type, return false
	if (type !== Object.prototype.toString.call(other)) return false;

	// If items are not an object or array, return false
	if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

	// Compare the length of the length of the two items
	var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
	var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
	if (valueLen !== otherLen) return false;

	// Compare two items
	var compare = function (item1, item2) {

		// Get the object type
		var itemType = Object.prototype.toString.call(item1);

		// If an object or array, compare recursively
		if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
			if (!isEqual(item1, item2)) return false;
		}

		// Otherwise, do a simple comparison
		else {

			// If the two items are not the same type, return false
			if (itemType !== Object.prototype.toString.call(item2)) return false;

			// Else if it's a function, convert to a string and compare
			// Otherwise, just compare
			if (itemType === '[object Function]') {
				if (item1.toString() !== item2.toString()) return false;
			} else {
				if (item1 !== item2) return false;
			}

		}
	};

	// Compare properties
	if (type === '[object Array]') {
		for (var i = 0; i < valueLen; i++) {
			if (compare(value[i], other[i]) === false) return false;
		}
	} else {
		for (var key in value) {
			if (value.hasOwnProperty(key)) {
				if (compare(value[key], other[key]) === false) return false;
			}
		}
	}

	// If nothing failed, return true
	return true;

};


function horizontal_search(initial, objective) {

    let start = new Node(null, initial, 0);
    let open = [start];
    let closed = [];
    let actual = start;

    while(!isEqual(actual.state, objective)) {

        actual = open[0];
        
        let children = actual.generateChildren(actual.findNull());

        children.forEach((element, index) => {
            closed.forEach(value => {
                if (isEqual(element.state, value.state)) {
                    children.splice(index, 1);
                }
            });
        });

        children.forEach(element => {
            open.push(element);
        });

        closed.push(open.shift());

        console.log(actual.state);

        // break;
    
    }

    console.log('Found it!');
    
}

horizontal_search(initial, objective);