// var http = require("http"),
//   Stream = require("stream").Transform,
//   fs = require("fs");
import https from 'https';
import {Response} from 'express';
import {Transform as Stream} from 'stream'
import fs from 'fs'
import logger from './logger';
import path from 'path'
import sharp from 'sharp'

  interface Meta {
    imageUrl: string;
    fileName: string;
  }

  interface ImageOptions {
    quality: number;
    width: number;
    height: number;
  }

export const downloadImageFromNetwork = async(meta: Meta): Promise<void> => {
  try{
    return new Promise((resolve, reject) => {
      https
      .request(meta.imageUrl, function(response) {
        var data: Stream = new Stream();
    
        response.on("data", function(chunk) {
          data.push(chunk);
        });
    
        response.on("end", function() {
          fs.writeFileSync(path.resolve(`./images/${meta.fileName}`), data.read());
          resolve()
        });
      })
      .end();
    })
   
  }
  catch(err){
    logger.error(err)
  }
}

export const resizeImage = async(imagePath: Buffer, options: ImageOptions, res: Response) => {
  try{
    const outputFile = Date.now() + path.extname(imagePath.toString());
    const outputImage = sharp(imagePath)
    .resize({width: options.width, height: options.height})
    .toBuffer()
    .then(data => {
      // fs.writeFileSync(path.resolve(`./thumbnails/${outputFile}`), data)
      res.writeHead(200, {'Content-Type': 'image/jpeg'})
    res.end(data) // Send the file data to the browser.
    })

   

  } catch(err){
    logger.error(err)
  }
}