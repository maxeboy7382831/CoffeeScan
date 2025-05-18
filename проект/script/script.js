       
let frappuccino = document.querySelector('.Frappuccino');
let frappuccinoinfo = document.querySelector('.productinfo');
console.log(frappuccinoinfo);
frappuccino.onclick = () => {
    frappuccinoinfo.classList.add('open');
    function openNewTabWithText(text) {
        const newWindow = window.open(); 
        newWindow.document.open();
        newWindow.document.write(text);
        newWindow.document.close();
      }
      
      
    openNewTabWithText(`<body style = "background-image: linear-gradient(to bottom, #ab817e, #cdb8b6, #ffffff)"> <link rel="stylesheet" href="styles/style.css">
                    <div class = "F1">
                        <img src="images/productlogo.png">
                       <img src="images/1.png" alt="">
                        <p>Frappuchino</p>
                        <p> Roast coffee, milk and ice all come together for a mocha flavor that'll leave you wanting more. 
                        The Frappuccino was originally developed, trademarked, and sold by George Howell's Eastern Massachusetts coffee shop chain the Coffee Connection,
                        and created and named by his marketing director, Andrew Frank.
                        When Starbucks purchased the Coffee Connection in 1994, they gained the rights to use, make, market, and sell the Frappuccino drink.</p>
                        </div>
                        <img src="logo.svg" alt="Логотип CS" width="100">
                    </body>`);
}
let closefrappuccino = document.querySelector('.closeproductinfocontent');
closefrappuccino.onclick = () => {
    frappuccinoinfo.classList.remove('open');
}





let mocha = document.querySelector('.CafeMocha');
let mochainfo = document.querySelector('.productinfo2');
console.log(mochainfo);
mocha.onclick = () => {
    mochainfo.classList.add('open');
    function openNewTabWithText(text) {
        const newWindow = window.open(); 
        newWindow.document.open();
        newWindow.document.write(text);
        newWindow.document.close();
      }
      
      
    openNewTabWithText(`<body style = "background-image: linear-gradient(to bottom, #ab817e, #cdb8b6, #ffffff)"> <link rel="stylesheet" href="styles/style.css">
                    <div class = "C2">
                        <img src="images/productlogo.png" alt="">
                        <img src="images/2.png" alt="">
                        <p> Cafe Mocha</p>
                            <p>This drink consists of cappuccino, to which white, black or milk chocolate is added.
                            Mocha coffee differs from regular cappuccino with its delicate chocolate flavor and aroma.
                            The coffee drink today called "mocha," however, is made by adding chocolate, and some believe that this is the result of confusion caused by
                            the chocolate flavor that may sometimes be found in Yemeni coffee. Chocolate has been combined with coffee after chocolate drink was introduced to Italy in the 17th century;
                            in Turin, chocolate was mixed with coffee and cream to produce bavareisa, which evolved in the 18th century into bicerin served in small clear glass where its components may be observed as three separate layers.
                            However, prior to 1900s, Mocha referred to Yemeni coffee, and its meaning began to change around the turn of the 20th century, 
                            and recipes for food such as cakes that combined chocolate and coffee
                            that referenced mocha began to appear. In 1920, a recipe for a "Chilled Mocha" was published with milk, coffee and cocoa as ingredients.</p>                    
                        </div>
                        <img src="logo.svg" alt="Логотип CS" width="100">
                    </body>`);
}
let closemocha = document.querySelector('.closeproductinfocontent2');
closemocha.onclick = () => {
    mochainfo.classList.remove('open');
}









let macchiato = document.querySelector('.CaramelMacchiato');
let macchiatoinfo = document.querySelector('.productinfo3');
console.log(macchiatoinfo);
macchiato.onclick = () => {
    macchiatoinfo.classList.add('open');
    function openNewTabWithText(text) {
        const newWindow = window.open(); 
        newWindow.document.open();
        newWindow.document.write(text);
        newWindow.document.close();
      }
      
      
    openNewTabWithText(`<body style = "background-image: linear-gradient(to bottom, #ab817e, #cdb8b6, #ffffff)"> <link rel="stylesheet" href="styles/style.css">
                    <div class = "C3">
                        <img src="images/productlogo.png" alt="">
                        <img src="images/3.png" alt="">
                        <p> Caramel Macchiato</p>
                            <p>It is made from vanilla syrup, steamed milk, espresso and caramel sauce. 
                            A serving of espresso is poured over the milk, leaving a dark mark on top of the milk foam.
                            The origins of Caramel Macchiato are based on Italy. Known for the Italian word “macchiato” meaning “stained”, this delicious drink was first offered by Starbucks in the United States in the 1990s. 
                            Since then, Caramel Macchiato has become a symbolic drink of Starbucks, a worldwide coffee chain, offering a unique taste experience.</p>                    
                        </div>
                        <img src="logo.svg" alt="Логотип CS" width="100">
                    </body>`);
}
let closemacchiato = document.querySelector('.closeproductinfocontent3');
closemacchiato.onclick = () => {
    macchiatoinfo.classList.remove('open');
}


let americano = document.querySelector('.Americano');
let americanoinfo = document.querySelector('.productinfo4');
console.log(americanoinfo);
americano.onclick = () => {
    americanoinfo.classList.add('open');
    function openNewTabWithText(text) {
        const newWindow = window.open(); 
        newWindow.document.open();
        newWindow.document.write(text);
        newWindow.document.close();
      }
      
      
    openNewTabWithText(`<body style = "background-image: linear-gradient(to bottom, #ab817e, #cdb8b6, #ffffff)"> <link rel="stylesheet" href="styles/style.css">
                    <div class = "A4">
                        <img src="images/productlogo.png" alt="">
                        <img src="images/4.png" alt="">
                        <p> Americano</p>
                            <p>This drink consists of cappuccino, to which white, black or milk chocolate is added. Mocha coffee differs from regular cappuccino with its delicate chocolate flavor and aroma.
                            The Americano was created during World War 2. As American soldiers were stationed in Italy, they drank the Italians’ stronger coffee, the espresso.
                            For the American soldiers, it was too strong, but they still liked the taste of it. As the story goes, they added water to the espresso to dilute the strong taste.
                            Then they brought it back to America and began making it themselves.
                            </p>
                            </div>
                        <img src="logo.svg" alt="Логотип CS" width="100">
                    </body>`);
}
let closeamericano = document.querySelector('.closeproductinfocontent4');
closeamericano.onclick = () => {
    americanoinfo.classList.remove('open');
}




