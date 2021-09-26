var matrixVal = [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
];

let randomElement1 = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
let randomElement2 = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
matrixVal[randomElement1[0]][randomElement1[1]] = 2;
matrixVal[randomElement2[0]][randomElement2[1]] = 2;


var app1 = new Vue({
    el: '#main-page-container-id',
    delimiters: ['[[', ']]'],
    data: {
        'totalScore': 0,
        'bestScore': 0,
        'matrix': matrixVal,
        'winCondition': false,
    },
    methods: {
        RightButton: function () {

            let tempMatrix = [
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
            ];

            for (i = 0; i < this.matrix.length; i++) {

                let tempArray = [];

                // Cleaning The row of empty spaces
                for (j = 3; j >= 0; j--) {
                    if (this.matrix[i][j] !== '') {

                        // Adding the element wiht value to temp array in correct order 
                        tempArray.push(this.matrix[i][j]);

                    }
                }

                if (tempArray.length > 0) {

                    // Creating cleaned row
                    for (j = 3, k = 0; j >= 0, k < tempArray.length; j--, k++) {

                        tempMatrix[i][j] = tempArray[k];
                    }


                    // Checking for possible summations
                    for (j = 3; j > 0; j--) {

                        if (tempMatrix[i][j] == tempMatrix[i][j - 1]) {
                            tempMatrix[i][j] = tempMatrix[i][j] + tempMatrix[i][j - 1];

                            this.ScoreAdd(tempMatrix[i][j]);

                            // Correting the whole row after making two elements one so no gap is left
                            if (j == 3) {
                                tempMatrix[i][2] = tempMatrix[i][1];
                                tempMatrix[i][1] = tempMatrix[i][0];
                                tempMatrix[i][0] = '';
                            } else if (j == 2) {
                                tempMatrix[i][1] = tempMatrix[i][0];
                                tempMatrix[i][0] = '';
                            } else if (j == 1) {
                                tempMatrix[i][0] = '';
                            };
                        }

                    }

                }
            }

            this.matrix = tempMatrix;
            // Loop Ends

            this.RandomPop();
            this.CheckWinCondition();
        },

        LeftButton: function () {
            let tempMatrix = [
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
            ];

            for (i = 0; i < this.matrix.length; i++) {

                let tempArray = [];

                // Cleaning The row of empty spaces
                for (j = 0; j <= 3; j++) {
                    if (this.matrix[i][j] !== '') {

                        // Adding the element wiht value to temp array in correct order 
                        tempArray.push(this.matrix[i][j]);

                    }
                }

                if (tempArray.length > 0) {

                    // Creating cleaned row
                    for (j = 0, k = 0; j <= 3, k < tempArray.length; j++, k++) {

                        tempMatrix[i][j] = tempArray[k];
                    }


                    // Checking for possible summations
                    for (j = 0; j < 3; j++) {

                        if (tempMatrix[i][j] == tempMatrix[i][j + 1]) {
                            tempMatrix[i][j] = tempMatrix[i][j] + tempMatrix[i][j + 1];

                            this.ScoreAdd(tempMatrix[i][j]);

                            // Correting the whole row after making two elements one so no gap is left
                            if (j == 0) {
                                tempMatrix[i][1] = tempMatrix[i][2];
                                tempMatrix[i][2] = tempMatrix[i][3];
                                tempMatrix[i][3] = '';
                            } else if (j == 1) {
                                tempMatrix[i][2] = tempMatrix[i][3];
                                tempMatrix[i][3] = '';
                            } else if (j == 2) {
                                tempMatrix[i][3] = '';
                            };
                        }

                    }

                }
            }

            this.matrix = tempMatrix;
            // Loop Ends

            this.RandomPop();
            this.CheckWinCondition();
        },

        TopButton: function () {
            let tempMatrix = [
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
            ];

            for (i = 0; i < this.matrix.length; i++) {

                let tempArray = [];

                // Cleaning The row of empty spaces
                for (j = 0; j <= 3; j++) {
                    if (this.matrix[j][i] !== '') {

                        // Adding the element wiht value to temp array in correct order 
                        tempArray.push(this.matrix[j][i]);

                    }
                }

                if (tempArray.length > 0) {

                    // Creating cleaned row
                    for (j = 0, k = 0; j <= 3, k < tempArray.length; j++, k++) {

                        tempMatrix[j][i] = tempArray[k];
                    }


                    // Checking for possible summations
                    for (j = 0; j < 3; j++) {

                        if (tempMatrix[j][i] == tempMatrix[j + 1][i]) {
                            tempMatrix[j][i] = tempMatrix[j][i] + tempMatrix[j + 1][i];

                            this.ScoreAdd(tempMatrix[j][i]);

                            // Correting the whole row after making two elements one so no gap is left
                            if (j == 0) {
                                tempMatrix[1][i] = tempMatrix[2][i];
                                tempMatrix[2][i] = tempMatrix[3][i];
                                tempMatrix[3][i] = '';
                            } else if (j == 1) {
                                tempMatrix[2][i] = tempMatrix[3][i];
                                tempMatrix[3][i] = '';
                            } else if (j == 2) {
                                tempMatrix[3][i] = '';
                            };
                        }

                    }

                }
            }

            this.matrix = tempMatrix;
            // Loop Ends

            this.RandomPop();
            this.CheckWinCondition();
        },

        BottomButton: function () {
            let tempMatrix = [
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
            ];

            for (i = 0; i < this.matrix.length; i++) {

                let tempArray = [];

                // Cleaning The row of empty spaces
                for (j = 3; j >= 0; j--) {
                    if (this.matrix[j][i] !== '') {

                        // Adding the element wiht value to temp array in correct order 
                        tempArray.push(this.matrix[j][i]);

                    }
                }

                if (tempArray.length > 0) {

                    // Creating cleaned row
                    for (j = 3, k = 0; j >= 0, k < tempArray.length; j--, k++) {

                        tempMatrix[j][i] = tempArray[k];
                    }


                    // Checking for possible summations
                    for (j = 3; j > 0; j--) {

                        if (tempMatrix[j][i] == tempMatrix[j - 1][i]) {
                            tempMatrix[j][i] = tempMatrix[j][i] + tempMatrix[j - 1][i];

                            this.ScoreAdd(tempMatrix[j][i]);

                            // Correting the whole row after making two elements one so no gap is left
                            if (j == 3) {
                                tempMatrix[2][i] = tempMatrix[1][i];
                                tempMatrix[1][i] = tempMatrix[0][i];
                                tempMatrix[0][i] = '';
                            } else if (j == 2) {
                                tempMatrix[1][i] = tempMatrix[0][i];
                                tempMatrix[0][i] = '';
                            } else if (j == 1) {
                                tempMatrix[0][i] = '';
                            };
                        }

                    }

                }
            }

            this.matrix = tempMatrix;
            // Loop Ends

            this.RandomPop();
            this.CheckWinCondition();
        },

        RefreshGame: function () {
            this.matrix = [
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
            ];

            let randomElement1 = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
            let randomElement2 = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
            this.matrix[randomElement1[0]][randomElement1[1]] = 2;
            this.matrix[randomElement2[0]][randomElement2[1]] = 2;

            this.totalScore = 0;
            this.winCondition = false;
        },

        ScoreAdd: function (score) {
            if (score !== '') {
                this.totalScore = this.totalScore + parseInt(score);
            }

            if (score == 128) {
                this.winCondition = true;
            }
        },

        CheckWinCondition: function () {

            if (this.winCondition) {

                setTimeout(function () {
                    window.alert('Congratulations!! You Won');

                    if (app1.totalScore > app1.bestScore) {
                        app1.bestScore = app1.totalScore;
                    }
                    app1.RefreshGame();
                }, 500);
            }
        },

        LoseGame: function () {
            window.alert('Game Over!!');
            if (this.totalScore > this.bestScore) {
                this.bestScore = this.totalScore;
            }
            this.RefreshGame();
        },

        RandomPop: function () {
            let randomArray = [];
            for (i = 0; i < 4; i++) {
                for (j = 0; j < 4; j++) {
                    if (this.matrix[i][j] == '') {
                        randomArray.push([i, j]);
                    }
                }
            }

            if (randomArray.length == 0) {
                this.LoseGame();

            } else {

                let randomElement = randomArray[Math.floor(Math.random() * randomArray.length)]
                this.matrix[randomElement[0]][randomElement[1]] = 2;

            }

        },
    },
    mounted() {

        document.addEventListener("keydown", (e) => {
            // e.keyCode is depreciated but still used in many browsers contrary to new e.key which is not yet present in few browsers 
            switch (e.keyCode) {
                case 37:
                    this.LeftButton();
                    break;
                case 38:
                    this.TopButton();
                    break;
                case 39:
                    this.RightButton();
                    break;
                case 40:
                    this.BottomButton();
                    break;
            };
        })
    }
});