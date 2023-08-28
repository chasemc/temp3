const select = document.getElementById('select');

select.addEventListener('change', function handleChange(event) {

    console.log(event.target.value); // 👉️ get selected VALUE
    d3.json(event.target.value).then((data) => {
        d3.select("#plot").datum(data).call(chart);
    });

});
