let array = [1, 2, [2.1, 2.2,2.3], 3];
        let s = "";
        generateList(array);
        document.body.innerHTML = s;
 
        function generateList(array) {
            s += "<ul>";
            for (let i = 0, count = array.length; i < count; ++i) {
                let row = array[i];
                if (Array.isArray(row)) {
                    s += "<li>";
                    generateList(row);
                    s += "</li>";
                }
                else
                    s += `<li>${row}</li>`;
            }
            s += "</ul>";
        }