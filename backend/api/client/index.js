let endpoint = `http://localhost:3000/User`;

let user = {
    username: 'user',
    password: '1234'
}

fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(async (res) => {
    console.log(await res.json());

    fetch(endpoint, {
        method: "GET"
    })
    .then(async (res) => {
        console.log(await res.json());

        user = {
            username: 'user',
            password: '1234555'
        }
    
        fetch(endpoint, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then(async (res) => {
            fetch(endpoint, {
                method: "GET"
            })
            .then(async (res) => {
                console.log(await res.json());

                user = {
                    username: 'user'
                }

                fetch(endpoint, {
                    method: "DELETE",
                    body: JSON.stringify(user),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                }).then(async (res) => {
                    fetch(endpoint, {
                        method: "GET"
                    })
                    .then(async (res) => {
                        console.log(await res.json());
                    });
                });
            });
        });
    });

});






