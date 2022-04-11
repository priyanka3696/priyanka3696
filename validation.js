var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

function isvalid(name,mail) {
    console.log("name",name);
    console.log("mail in validation ",mail)
    if(!name)
        console.log('name not exist');
    if (!mail){
        console.log('no mailid present');
        return false;
    }
    console.log("email validation");
    if(mail.length>254){
        console.log("too length mail id");
        return false;
    }
    var valid = emailRegex.test(mail);
    if(!valid){
        console.log("invalid mail id");
        return false;
    }
    // Further checking of some things regex can't handle
    var parts = mail.split("@");
    // var domain= parts.split(".");
    console.log(parts);
    if(parts[0].length>64){
        console.log("lengthy mail");
        return false;
    }
    var domainParts = parts[1].split(".");
    console.log("domain parts",domainParts);
    var a=domainParts[0];
    var nodomain=['yahoo','gmail','hotmail'];
    if(nodomain.includes(a)){
        console.log('enter business id');
        return false;
    }
    else{
        console.log('success');
        return true;
    }
    
}
module.exports={
    isvalid
}
