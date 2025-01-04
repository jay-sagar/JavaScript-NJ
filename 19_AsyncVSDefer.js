// without async and defer => the script is executed and the HTML parsing is stopped until the script is executed

// async => load the script asynchronously but the order of execution is not guaranteed and it will be executed as soon as it is downloaded
           // async is used when the script does not depend on any other script
           // async stops the HTML parsing and downloads the script and then execute it
// defer => load the script asynchronously but the order of execution is guaranteed and it will be executed after the HTML is parsed