var matrixVal = [
    [2, 2, 64, 4],
    [, 32, 8, 2],
    [8, 2, 16, 4],
    [128, 2, 8, 64]
]

var app1 = new Vue({
    el: '#main-page-container-id',
    delimiters: ['[[', ']]'],
    data: {
        'totalScore': 0,
        'matrix': matrixVal,
    },
    methods: {
        RightButton: function () {
            for (i = 0; i < this.matrix.length; i++) {

                let tempArray = [];

                // Cleaning The row of empty spaces
                for (j = 3; j >= 0; j--) {
                    if (this.matrix[i][j] !== '') {
                        tempArray.push(this.matrix[i][j]);
                    }
                }

                if (tempArray.length > 0) {

                    // Creating cleaned row
                    for (j = 3, k = 0; j >= 0, k < tempArray.length; j--, k++) {
                        this.matrix[i][j] = tempArray[k];
                    }

                    // Checking for possible summations
                    for (j = 3; j > 0; j--) {

                        if (this.matrix[i][j] == this.matrix[i][j - 1]) {
                            this.matrix[i][j] = this.matrix[i][j] + this.matrix[i][j - 1];
                            this.totalScore = this.totalScore + this.matrix[i][j];

                            if (j = 1) {
                                this.matrix[i][j - 1] = '';
                            } else {
                                this.matrix[i][j - 1] = this.matrix[i][j - 2];
                            }
                        }

                    }

                }
            }
            // Loop Ends
        },

        LeftButton: function () {
            for (i = 0; i < this.matrix.length; i++) {

                let tempArray = [];

                // Cleaning The row of empty spaces
                for (j = 3; j >= 0; j--) {
                    if (this.matrix[i][j] !== '') {
                        tempArray.push(this.matrix[i][j]);
                    }
                }

                if (tempArray.length > 0) {

                    // Creating cleaned row
                    for (j = 3, k = 0; j >= 0, k < tempArray.length; j--, k++) {
                        this.matrix[i][j] = tempArray[k];
                    }

                    // Checking for possible summations
                    for (j = 3; j > 0; j--) {

                        if (this.matrix[i][j] == this.matrix[i][j - 1]) {
                            this.matrix[i][j] = this.matrix[i][j] + this.matrix[i][j - 1];
                            this.totalScore = this.totalScore + this.matrix[i][j];

                            if (j = 1) {
                                this.matrix[i][j - 1] = '';
                            } else {
                                this.matrix[i][j - 1] = this.matrix[i][j - 2];
                            }
                        }

                    }

                }
            }
            // Loop Ends
        },

        TopButton: function () {
            for (i = 0; i < this.matrix.length; i++) {

                let tempArray = [];

                // Cleaning The row of empty spaces
                for (j = 3; j >= 0; j--) {
                    if (this.matrix[i][j] !== '') {
                        tempArray.push(this.matrix[i][j]);
                    }
                }

                if (tempArray.length > 0) {

                    // Creating cleaned row
                    for (j = 3, k = 0; j >= 0, k < tempArray.length; j--, k++) {
                        this.matrix[i][j] = tempArray[k];
                    }

                    // Checking for possible summations
                    for (j = 3; j > 0; j--) {

                        if (this.matrix[i][j] == this.matrix[i][j - 1]) {
                            this.matrix[i][j] = this.matrix[i][j] + this.matrix[i][j - 1];
                            this.totalScore = this.totalScore + this.matrix[i][j];

                            if (j = 1) {
                                this.matrix[i][j - 1] = '';
                            } else {
                                this.matrix[i][j - 1] = this.matrix[i][j - 2];
                            }
                        }

                    }

                }
            }
            // Loop Ends
        },

        BottomButton: function () {
            for (i = 0; i < this.matrix.length; i++) {

                let tempArray = [];

                // Cleaning The row of empty spaces
                for (j = 3; j >= 0; j--) {
                    if (this.matrix[i][j] !== '') {
                        tempArray.push(this.matrix[i][j]);
                    }
                }

                if (tempArray.length > 0) {

                    // Creating cleaned row
                    for (j = 3, k = 0; j >= 0, k < tempArray.length; j--, k++) {
                        this.matrix[i][j] = tempArray[k];
                    }

                    // Checking for possible summations
                    for (j = 3; j > 0; j--) {

                        if (this.matrix[i][j] == this.matrix[i][j - 1]) {
                            this.matrix[i][j] = this.matrix[i][j] + this.matrix[i][j - 1];
                            this.totalScore = this.totalScore + this.matrix[i][j];

                            if (j = 1) {
                                this.matrix[i][j - 1] = '';
                            } else {
                                this.matrix[i][j - 1] = this.matrix[i][j - 2];
                            }
                        }

                    }

                }
            }
            // Loop Ends
        },

        RefreshGame: function () {

        },

        RandomPop: function () {

        },
    },
    mounted() {

    }
});