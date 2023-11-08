exports.handler = async function(event){
    console.log("jhbae requesting ->",JSON.stringify(event,undefined,2));
    return {
        statusCode: 200,
        headers: {"Context-Type": "text/plain"},
        body: "Hello jhbae ! your hit ${event.path}\n"
    };
};