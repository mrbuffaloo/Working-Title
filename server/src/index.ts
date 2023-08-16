import express, { Request, Response} from "express";
import { PrismaClient } from '@prisma/client'
import { config } from "dotenv"; 
config();

const PORT = 3000;
const app = express(); 

app.use(express.json());

const prisma = new PrismaClient()

app.get("/api", async (req: Request, res: Response) => {
    res.send("Hello world");
});

app.get("/api/entrys", async (req: Request, res: Response) => {
    const entry_list = async () => {
        let entrys = await prisma.entrys.findMany();
        return res.json(entrys)
    }
    entry_list();
});

app.post("/api/search", async (req: Request, res: Response) => {
    console.log(req.body)
    res.json(`Recived search ${JSON.stringify(req.body)}`)
})

app.listen(PORT)