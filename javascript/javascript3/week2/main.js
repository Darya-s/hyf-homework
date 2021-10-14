/*function translateOneByOne() {



    moveElement(document.querySelector("li:nth-child(1)"), { x: 20, y: 300 }).then(() => {
        console.log("Red target has been moved");
        moveElement(document.querySelector("li:nth-child(2)"), { x: 400, y: 300 }).then(() => {
            console.log("Blue target has been moved");

            moveElement(document.querySelector("li:nth-child(3)"), { x: 400, y: 20 }).then(() => {
                console.log("Green target has been moved");

            }).catch((err) => console.log('Red target went wrong'));

        }).catch((err) => console.log('Blue target went wrong'));

    }).catch((err) => console.log('Green target went wrong'));
}

translateOneByOne();*/

async function translateOneByOne() {

    try {

        let response = await (

                moveElement(document.querySelector("li:nth-child(1)"), { x: 20, y: 300 }).then(() => console.log("Red target has been moved"),
                    moveElement(document.querySelector("li:nth-child(2)"), { x: 400, y: 300 }).then(() => console.log("Blue target has been moved"),


                        moveElement(document.querySelector("li:nth-child(3)"), { x: 400, y: 20 }).then(() => console.log("Green target has been moved"),


                        );

                    }


                    catch (err) {

                        console.log(err);
                    }

                }

                translateOneByOne();



                function translateAllAtOnce() {
                    Promise.all([moveElement("li:nth-child(1)", { x: 20, y: 300 }),
                        moveElement("li:nth-child(2)", { x: 400, y: 300 }),
                        moveElement("li:nth-child(3)", { x: 400, y: 20 })
                    ]).then((values) => {
                        console.log('All targets has been moved');
                    });
                }

                translateAllAtOnce();