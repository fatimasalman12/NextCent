import fs from 'fs';
import path from 'path';

function handler(req,res){
    const p=path.join(process.cwd(),'data','blog-data.json')
    const fileData=fs.readFileSync(p)
    const arr=JSON.parse(fileData)
    res.status(200).json({ blogs: arr });
}

export default handler;