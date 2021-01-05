var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ImageSchema = require('../models/image');
var ImageModel = mongoose.model('Image');

router.post('/addData',function(req,res){
  console.log(req.body)
    var ImageData = new ImageModel({
      ImageURL:req.body.ImageURL,
      Title: req.body.Title,
      Content:req.body.Content,
      Heading:req.body.Heading
    });
    ImageData.save(function (err, result) {
      if (err) {
        console.error(err);
        return res.status(400).json({
          message: 'Bad Request'
        });
      } else {
        res.json({
          status: 200,
          data: result
        })
      }

    });

});

router.get('/getData',function(req,res){
    ImageModel.find({}).exec(function(err,imagedata){
      if(err){
        return res.status(400).json({
          message: 'Bad Request'
        });
      }else{
        res.json({
          status: 200,
          data: imagedata
        });
      }

    });

});

router.put('/updateimage/:id',(req,res)=>{
  var image={
      ImageURL:req.body.ImageURL,
      Title:req.body.Title,
      Content:req.body.Content,
      Heading:req.body.Heading
      
  }
  ImageModel.findByIdAndUpdate(req.params.id,{$set:image},(err,imagedata)=>{
      if(err){
          console.error(err)
          return res.status(400).json({
            message:'bad request'
          });
        }else{
          res.json({
            status:200,
            data:imagedata
          });
        }

      });
  });

  router.delete('/image/:id',(req,res)=>{
    ImageModel.findByIdAndRemove(req.params.id,function(err,deleteimages){
        if(err){
            res.json({
                status : 400
            })
        }else{
            res.json({
                status : 200
            })
        }
    })
})
  module.exports = router;