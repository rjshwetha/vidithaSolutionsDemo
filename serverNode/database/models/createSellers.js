const mongoose = require('mongoose');

const createSellerSchema = new mongoose.Schema({
    sellerName:{
        type:String,
        require:true,
        minlength:4
    },
    buyerName:{
        type:String,
        minlength:4,
    },
    sellerAddress:{
        type:String,
        minlength:10
    }

})

const createSeller = mongoose.model('createSellers',createSellerSchema);

module.exports = createSeller;
