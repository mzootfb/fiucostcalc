        /*Title: FIU Online Tuition Calculator
         *Author: mzootfb
         *Date: 4/24/2018 - 5/1/2018
         *Github: https://github.com/mzootfb
        */

        //Bootsrap js for popovers
        $(function() {
            $('[data-toggle="popover"]').popover()
        })
        $('.popover-dismiss').popover({
            trigger: 'focus'
        })


        //variables for multiple functions
        var diff = Number(52.29);
        var fee = Number(30);
        var multiplier = Number(1);

        //yearly cost calculator
        function calculator() {
            //variable assigning
            var year = Number(document.getElementById("acadYear").value);
            var degree = Number(document.getElementById("degreeType").value);
            var program = Number(document.getElementById("programSelect").value);

            var radios = document.getElementsByName('residency');
            for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    // do whatever you want with the checked radio
                    var flres = radios[i].value;

                    // only one radio can be logically checked, don't check the rest
                    break;
                }
            }
            if ($('#full-part').is(":checked")) {
                var fullpart = "Part"
            } else {
                var fullpart = "Full"
            }

            var credits = Number(30);
            var yearcost = Number(1);
            var result = Number(1);
            //logic/math
            document.getElementById("enrollmentType").innerHTML = fullpart;
            if (year == 1718) {
                if (degree == 1) {
                    togglePrograms();
                    if (flres == 1) {
                        multiplier = 130.42;
                        if (fullpart == "Part") {
                            credits = 15
                        }
                        yearcost = Number((credits * (multiplier + diff + fee)));
                        result = yearcost;
                    } else if (flres == 2) {
                        multiplier = 247.48;
                        if (fullpart == "Part") {
                            credits = 15
                        }
                        yearcost = Number((credits * (multiplier + diff + fee)));
                        result = yearcost;
                    }
                    document.getElementById("costYear").innerHTML = numeral(result).format('$0,0.00');
                } else if (degree == 2) {
                    var graddeg = Number(document.getElementById("programSelect").value);
                    var programCost = "";
                    switch (graddeg) {
                        case 50:
                            programCost = "$18,300 + 36 Credit Hours"
                            break;
                        case 51:
                            programCost = "$25,000 + 30 Credit Hours"
                            break;
                        case 52:
                            programCost = "$25,000 + 30 Credit Hours"
                            break;
                        case 53:
                            programCost = "$31,200 (Hybrid)/ $36,000 (Fully Online) + 48 Credit Hour"
                            break;
                        case 54:
                            programCost = "$59,892 + 42 Credit Hours"
                            break;
                        case 55:
                            programCost = "$35,000 + 38 Credit Hours"
                            break;
                        case 56:
                            programCost = "$33,000 + 36 Credit Hours"
                            break;
                        case 57:
                            programCost = "$25,000 + 30 Credit Hours"
                            break;
                        case 58:
                            programCost = "$28,000 (In-state)/ $30,000 (Out-of-state) + 30 Credit Hours"
                            break;
                        case 59:
                            programCost = "$18,300 + 36 Credit Hours"
                            break;
                        default:
                            programCost = "$18,300 + 36 Credit Hours"
                    }

                    document.getElementById("costYear").innerHTML = programCost
                } else {

                }
            } else {
                if (degree == 1) {
                    togglePrograms();
                    if (flres == 1) {
                        multiplier = 130.42;
                        if (fullpart == "Part") {
                            credits = 15
                        }
                        yearcost = Number((credits * (multiplier + diff + fee)));
                        result = yearcost;
                    } else if (flres == 2) {
                        multiplier = 247.48;
                        yearcost = Number((credits * (multiplier + diff + fee)));
                        result = yearcost;
                    }
                    document.getElementById("costYear").innerHTML = numeral(result).format('$0,0.00');
                } else if (degree == 2) {

                    var graddeg = Number(document.getElementById("programSelect").value);
                    var programCost = "";
                    switch (graddeg) {
                        case 50:
                            programCost = "$18,300 + 36 Credit Hours"
                            break;
                        case 51:
                            programCost = "$25,000 + 30 Credit Hours"
                            break;
                        case 52:
                            programCost = "$25,000 + 30 Credit Hours"
                            break;
                        case 53:
                            programCost = "$31,200 (Hybrid)/ $36,000 (Fully Online) + 48 Credit Hour"
                            break;
                        case 54:
                            programCost = "$59,892 + 42 Credit Hours"
                            break;
                        case 55:
                            programCost = "$35,000 + 38 Credit Hours"
                            break;
                        case 56:
                            programCost = "$33,000 + 36 Credit Hours"
                            break;
                        case 57:
                            programCost = "$25,000 + 30 Credit Hours"
                            break;
                        case 58:
                            programCost = "$28,000 (In-state)/ $30,000 (Out-of-state) + 30 Credit Hours"
                            break;
                        case 59:
                            programCost = "$18,300 + 36 Credit Hours"
                            break;
                        default:
                            programCost = "$18,300 + 36 Credit Hours"
                    }

                    document.getElementById("costYear").innerHTML = programCost

                }
            }
        }
        //enables the next dropdown
        function enableDegree() {
            $("#degreeType").removeAttr("disabled");
            $('#selacad').popover('dispose')
        }
        //enables the next dropdown and hides/shows programs
        function enableProgram() {
            var degree = Number(document.getElementById("degreeType").value);

            $("#programSelect").removeAttr("disabled");
            $('#seldeg').popover('dispose')
            if (degree == 1) {
                $('.g').hide();
                $('.u').show();
            } else if (degree == 2) {
                $('.g').show();
                $('.u').hide();
            }
            var element = document.getElementById('programSelect');
            element.value = "";

        }

        //Updates slider and data
        function sliderUpdate() {
            var slider = document.getElementById("creditNumber");
            var output = document.getElementById("creditHours");
            output.innerHTML = slider.value; // Display the default slider value
        }
        //calculates semester cost
        function semCostCal() {
            //variable assigning
            var semcost = Number(1);
            var radios = document.getElementsByName('residency');

            for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    // do whatever you want with the checked radio
                    var flres = radios[i].value;

                    // only one radio can be logically checked, don't check the rest
                    break;
                }
            }
            //logic/math
            if (flres == 1) {
                multiplier = 130.42;
                document.getElementById("res").innerHTML = "In-State";

            } else if (flres == 2) {
                multiplier = 247.48;
                document.getElementById("res").innerHTML = "Out-of-State";

            }
            var credits = Number(document.getElementById("creditNumber").value);
            semcost = Number((credits * (multiplier + diff + fee)));
            var semi = semcost;
            document.getElementById("costSemester").innerHTML = numeral(semi).format('$0,0.00');

            //the table
            //set variables
            var multi = Number(credits * multiplier);
            var differ = Number(credits * diff);
            var dfee = Number(fee * credits);
            var ttlcost = Number(((credits * multiplier) + (credits * multiplier) + (credits * fee)) + 10 + 93.69);
            //output for table
            document.getElementById("multitude").innerHTML = numeral(multi).format('$0,0.00');
            document.getElementById("diff").innerHTML = numeral(differ).format('$0,0.00');
            document.getElementById("fee").innerHTML = numeral(dfee).format('$0,0.00');
            document.getElementById("total").innerHTML = numeral(ttlcost).format('$0,0.00');


        }