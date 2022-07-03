<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <title>Frank Dex Devs&reg;</title>
    <base href="https://pegasus.local/gitdir/" />
    <link rel="shortcut icon" href="assets/images/favicon.png" />
    <link rel="stylesheet" href="assets/styles/style.css" />
    <noscript>Please activate JavaScript to access this page!</noscript>
</head>

<body>
<p id="value"></p>
    <script>
        function getPrime(from, to) {
            let all = [];
            if(Number.isNaN(from) || Number.isNaN(to)) {
                throw new TypeError("The value(s) inserted are not numeric types")
            }
            from = Math.abs(from);
            to = Math.abs(to);
            if(!(from > to)){
                for(let i = from; i <= to; i++) {
                    let array = Array.of();
                    for(let j = 1; j < i; j++) {
                        if(i % j === 0){
                            array.push(j);
                        }
                    }
                    if(array.length === 1) {
                        all.push(i);
                    }
                }
            }
            return all;
        }
        document.getElementById("value").innerHTML = getPrime(1, 100);
    </script>
</body>

</html>