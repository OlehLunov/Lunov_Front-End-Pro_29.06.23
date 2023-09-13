let array = [1, 2, [2.1, 2.2,2.3], 3];
        let list = "";
        generateList(array);
        document.body.innerHTML = list;
 
        function generateList(array) {
            list += "<ul>";
            for (let i = 0, count = array.length; i < count; ++i) {
                let row = array[i];
                if (Array.isArray(row)) {
                    list += "<li>";
                    generateList(row);
                    list += "</li>";
                }
                else
                list += `<li>${row}</li>`;
            }
            list += "</ul>";
        }