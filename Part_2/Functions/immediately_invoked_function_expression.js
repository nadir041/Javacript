// Immediately Invoked Function Expression (IIFE)

(function chae(){

    console.log(`DB Connected`);
})();



((name) => {
    console.log(`DB is not connected ${name}`);

})("XYZ")
