import {Request, Response} from 'express';
import path from 'path';
import fs from 'fs';
import logger from '../services/logger';
import { downloadImageFromNetwork, resizeImage } from '../services/image';

export const handleDownloadImageFromNetwork = async(req: Request, res: Response) => {
  try{
    if(!req.body) return res.status(400).json({error: 'Invalid body'});
    const { imageUrl } = req.body;

    if(!imageUrl) return res.status(400).json({ error: 'Image url missing' });

    const fileName = Date.now() + path.extname(imageUrl);

    await downloadImageFromNetwork({imageUrl, fileName})
    const file: Buffer = fs.readFileSync(path.resolve(__dirname, `../../../images/${fileName}`))
    // console.log(file)
    await resizeImage(file, {height: 300, width: 300, quality: 100}, res);

  }catch(err){
    logger.error(err);
    return res.status(500).json({error: 'Something went wrong'})
  }

}