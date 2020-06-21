import File from '../schemas/File';

class FileController {
  async index(req, res) {
    try {
      const files = await File.find();

      return res.json(files);
    } catch (error) {
      return res.status(500).send(`Error fetching files${error}`);
    }
  }

  async store(req, res) {
    try {
      const { originalname: name, filename: path } = req.file;

      const file = await File.create({
        name,
        path,
        url: `https://twobrothersms.com.br/files/${path}`,
        // url: `http://localhost:3333/files/${path}`,
      });

      return res.json(file);
    } catch (error) {
      return res.status(500).send(`Error adding file${error}`);
    }
  }

  async update(req, res) {
    try {
      const { id, urlSale } = req.body;

      const imgExists = await File.findOne({ _id: id });

      if (!imgExists) {
        return res.status(400).json({ error: 'Image already exists' });
      }

      await imgExists.updateOne({
        urlSale,
      });

      return res.json(imgExists);
    } catch (error) {
      return res.status(500).send(`Error editing image!${error}`);
    }
  }
}

export default new FileController();
