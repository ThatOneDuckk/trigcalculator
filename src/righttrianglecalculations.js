export function trigRatios(input) {


    // Varialbes
    let output = [0, 0, 0, 0, 0, 0];
    let hypoName;
    let referenceAngle;
    let referenceSide;

    const letter = ["A", "B", "C", "a", "b", "c"];
    
    let radians;

    for (let i = 0; i < 3; i++) {
        if (input[i] === 90) {
            hypoName = letter[i+3];
        } else if (input[i] > 0) {
            referenceAngle = letter[i];
            radians = input[letter.indexOf(referenceAngle)] * Math.PI / 180;
        }

        if (input[i+3] != 0) {
            referenceSide = letter[i+3];
        }
    }

    // If we only have the right angle
    if (typeof referenceAngle === "undefined") {
        let missingAngleIndex = 0;
        let referenceSideTwo;
        for (let i = 0; i < 3; i++) {
            if (input[i] === 0) {
                missingAngleIndex = i;
                break; 
            }
        }
        // console.log(missingAngleIndex);
        for (let i = 0; i < 3; i++) {
            if (input[i+3] != 0 && letter[i+3] != referenceSide) {
                referenceSideTwo = letter[i+3];
                // console.log(referenceSideTwo);
                
            }
        }
        // console.log(input[letter.indexOf(referenceSideTwo)]);
        // console.log(input[letter.indexOf(referenceSide)]);
        if (hypoName === referenceSide) {
            // Hypotenus
            if (referenceSideTwo === letter[missingAngleIndex+3]) {
                // Sine
                // console.log("sine")
                output[missingAngleIndex] = input[missingAngleIndex] = (Math.asin(input[letter.indexOf(referenceSideTwo)] / input[letter.indexOf(referenceSide)])) * 180 / Math.PI;
            } else {
                // Cosine
                // console.log("c")
                output[missingAngleIndex] = input[missingAngleIndex] = (Math.acos(input[letter.indexOf(referenceSideTwo)] / input[letter.indexOf(referenceSide)])) * 180 / Math.PI;
            }
        } else if (referenceSide === letter[missingAngleIndex+3]) {
            // Opposite
            if (referenceSideTwo === hypoName) {
                // Sine
                // console.log("s")
                output[missingAngleIndex] = input[missingAngleIndex] = (Math.asin(input[letter.indexOf(referenceSide)] / input[letter.indexOf(referenceSideTwo)])) * 180 / Math.PI;
            } else {
                // Tangent
                // console.log("fah")
                output[missingAngleIndex] = input[missingAngleIndex] = (Math.atan(input[letter.indexOf(referenceSide)] / input[letter.indexOf(referenceSideTwo)])) * 180 / Math.PI;
            }
        } else {
            // Adjacent
            if (referenceSideTwo === hypoName) {
                // Cosine
                // console.log("yuppeeeeee")
                output[missingAngleIndex] = input[missingAngleIndex] = (Math.acos(input[letter.indexOf(referenceSide)] / input[letter.indexOf(referenceSideTwo)])) * 180 / Math.PI;
            } else {
                // Tangent
                // console.log("hm")
                output[missingAngleIndex] = input[missingAngleIndex] = (Math.atan(input[letter.indexOf(referenceSideTwo)] / input[letter.indexOf(referenceSide)])) * 180 / Math.PI;
            }
        }

        // console.log(output);
        referenceAngle = letter[missingAngleIndex];
        radians = input[missingAngleIndex] * Math.PI / 180;
    }



    // Sides
    for (let i = 0; i < 3; i++) {
        if (input[i+3] != 0) {
            output[i+3] = input[i+3]
        } else {
            if (referenceAngle === letter[i]) {
                // Opposite
                if (referenceSide === hypoName) {
                    // Sine
                    output[i+3] = Math.sin(radians) * input[letter.indexOf(referenceSide)];
                } else {
                    // Tangent
                    output[i+3] = Math.tan(radians) * input[letter.indexOf(referenceSide)];
                }
            } else if (letter[i+3] === hypoName) {
                // Hypotenuse
                if (referenceSide === referenceAngle) {
                    // Sine
                    output[i+3] = input[letter.indexOf(referenceSide)] / Math.sin(radians);
                } else {
                    // Cosine
                    output[i+3] = input[letter.indexOf(referenceSide)] / Math.cos(radians);
                }
            } else {
                // Adjacent
                if (referenceSide === hypoName) {
                    // Cosine
                    output[i+3] = Math.cos(radians) * input[letter.indexOf(referenceSide)];
                } else {
                    // Tangent
                    output[i+3] = input[letter.indexOf(referenceSide)] / Math.tan(radians);
                }
            }
        }
    }

    // Angles
    for (let i = 0; i < 3; i++) {
        if (input[i] != 0) {
            output[i] = input[i];
        } else {
            output[i] = 180 - (input[0] + input[1] + input[2]);
        }
    }

    
    // console.log("input: " + input);
    // console.log("radians: " + radians);
    // console.log("hypoName: " + hypoName);
    // console.log("referenceAngle: " + referenceAngle);
    // console.log("referenceSide: " + referenceSide);
    // console.log("output: " + output);

    return output;
}

export function lawOfSin(input) {
    let output = [...input];
    let referencePair;
    const letters = ["A", "B", "C", "a", "b", "c"];

    for (let i = 0; i < 3; i++) {
        if (output[i] === 0) {
            output[i] = 180 - (output[0] + output[1] + output[2]);
        }
    }

    for (let i = 0; i < 3 ; i++) {
        if (output[i] > 0 && output[i+3] > 0) {
            referencePair = i;
            break;
        }
    }  
    
    let radians = output[referencePair] * Math.PI / 180

    for (let i = 0; i < 3; i++) {
        if (output[i+3] === 0) {
            output[i+3] = (Math.sin(output[i] * Math.PI / 180) * output[referencePair+3]) / Math.sin(radians)
        }
    }

    //console.log("Reference Pair: " + referencePair)

    return output;
}

export function lawOfCos(input) {
    let output = [...input];
    let isCosine = true;

    for (let i = 0; i < 3; i++) {
        if (output[i] > 0 && output[i+3] > 0) {
            output = ssa(output);
            isCosine = false;
        }
    }

    if (isCosine) {

        // Find missing sides
        if (output[3] <= 0 || output[4] <= 0 || output[5] <= 0) {
            for (let i = 0; i < 3; i++) {
                if (output[i+3] <= 0) {
                    if (i === 0) {
                        output[i+3] = Math.sqrt(output[4] ** 2 + output[5] ** 2 - 2 * output[4] * output[5] * (Math.cos(output[i] * Math.PI / 180)))
                    } else if (i === 1) {
                        output[i+3] = Math.sqrt(output[3] ** 2 + output[5] ** 2 - 2 * output[3] * output[5] * (Math.cos(output[i] * Math.PI / 180)))
                    } else {
                        output[i+3] = Math.sqrt(output[4] ** 2 + output[3] ** 2 - 2 * output[4] * output[3] * (Math.cos(output[i] * Math.PI / 180)))
                    }
                }
            }
        }

        // Find missing angles
        for (let i = 0; i < 3; i++) {
            if (output[i] <= 0) {
                let num, den;
                if (i === 0) { // Angle A
                    num = (output[4] ** 2 + output[5] ** 2 - output[3] ** 2);
                    den = (2 * output[4] * output[5]);
                } else if (i === 1) { // Angle B
                    num = (output[3] ** 2 + output[5] ** 2 - output[4] ** 2);
                    den = (2 * output[3] * output[5]);
                } else { // Angle C
                    num = (output[3] ** 2 + output[4] ** 2 - output[5] ** 2);
                    den = (2 * output[3] * output[4]);
                }
                // Calculate and convert to degrees
                output[i] = Math.acos(num / den) * 180 / Math.PI;
            }
        }
    }

    return output;
}

function ssa(input) {
    let output = [...input]
    for (let i = 0; i < 6; i++) {
        output.push(output[i]);
    }
    
    let refAngle;
    let refSide;
    let height;
    let numberOfTriangles;
    for (let i = 0; i < 3; i++) {
        if (output[i] > 0) {
            refAngle = i;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (output[i+3] > 0 && i != refAngle) {
            refSide = i;
        }
    }

    height = output[refSide+3] * Math.sin(output[refAngle] * Math.PI / 180)

    if (output[refAngle] < 90) {
        if (output[refAngle+3] < height) {
            numberOfTriangles = 0;
        } else if (output[refAngle+3] === height) {
            numberOfTriangles = 1;
        } else if (height < output[refAngle+3] && output[refAngle+3] < output[refSide+3]) {
            numberOfTriangles = 2;
        } else if (output[refAngle+3] >= output[refSide+3]) {
            numberOfTriangles = 1;
        }
    } else if (output[refAngle] >= 90) {
        if (output[refAngle+3] <= output[refSide+3]) {
            numberOfTriangles = 0;
        } else if (output[refAngle+3] > output[refSide+3]) {
            numberOfTriangles = 1;
        }
    }

    if (numberOfTriangles > 0) {
        let referencePair;
        let referenceSide;

        for (let i = 0; i < 3 ; i++) {
            if (output[i] > 0 && output[i+3] > 0) {
                referencePair = i;
                break;
            }
        }

        for (let i = 0; i < 3 ; i++) {
            if (output[i+3] > 0 && i != referencePair) {
                referenceSide = i;
                break;
            }
        }

        // console.log(referencePair);
        // console.log(referenceSide);

        let sideAdj = output[referenceSide + 3];
        let sideOpp = output[referencePair + 3];
        let angleOpp = output[referencePair];

        output[referenceSide] = Math.asin((sideAdj * Math.sin(angleOpp * Math.PI / 180)) / sideOpp) * 180 / Math.PI;

        for (let i = 0; i < 3; i++) {
            if (output[i] === 0) {
                output[i] = 180 - (output[0] + output[1] + output[2]);
            }
        }

        let radians = output[referencePair] * Math.PI / 180

        for (let i = 0; i < 3; i++) {
            if (output[i+3] === 0) {
                output[i+3] = (Math.sin(output[i] * Math.PI / 180) * output[referencePair+3]) / Math.sin(radians)
            }
        }

        if (numberOfTriangles === 2) {

            output[referenceSide + 6] = 180 - output[referenceSide];

            let angleSum = 0;
            let missingAngleIndex = 0;

            for (let i = 6; i < 9; i++) {
                if (output[i] > 0) {
                    angleSum += output[i];
                } else {
                    missingAngleIndex = i;
                }
            }

            // console.log(angleSum);

            output[missingAngleIndex] = 180 - angleSum;

            let radians2 = output[referencePair] * Math.PI / 180

            for (let i = 6; i < 9; i++) {
                if (output[i+3] === 0) {
                    output[i+3] = (Math.sin(output[i] * Math.PI / 180) * output[referencePair+3]) / Math.sin(radians2);
                }
            }
        } else {
            for (let i = 0; i < 6; i++) {
                output.pop();
            }
        }

    } else {
        for (let i = 0; i < 6; i++) {
            output.pop();
            output[i] = "NaN"
        }
    }

    // console.log("Reference Angle: " + refAngle + " Reference Side: " + refSide + " Height: " + height + " Number of Triangles: " + numberOfTriangles);
    // console.log(output);
    
    return output;
}