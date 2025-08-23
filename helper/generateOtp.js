import crypto

async function generateOtp(){
    return crypto.randomInt(100000, 999999);
}

