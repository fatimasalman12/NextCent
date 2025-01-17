import fs from 'fs';
import path from 'path';

function handler(req, res) {
    const id = req.query.blogID;
    console.log("Hey whats wrong with this id: ",id); 
    const p = path.join(process.cwd(), 'data', 'blog-data.json');
    const fileData = fs.readFileSync(p, 'utf-8');
    const arr = JSON.parse(fileData);
    const blog = arr.find(b => b.id.toString() === id.toString());

    if (blog) {
      res.status(200).json({ BlogObj: blog });
    }
    else{
        return res.status(404).json({ error: 'YAAAAAAA!!!!   Blog not found' });
    }
}

export default handler;
