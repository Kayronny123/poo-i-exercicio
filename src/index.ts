import express from "express";
import cors from "cors";
import { db } from "./database/knex";
import { Videos } from "./models/Videos";
import { TVideosDB } from "./types";

const app = express();
app.use(cors());

app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003")
});

app.get("/ping", ( req, res)=>{
    res.status(200).send("pong")
})
app.get("/videos", async (req, res) => {
    try {
        const q = req.query.q

        let videosDB

        if (q) {
            const result: TVideosDB[] = await db("videos").where("name", "LIKE", `%${q}%`)
            videosDB = result
        } else {
            const result: TVideosDB[] = await db("videos")
            videosDB = result
        }
        const videos: Videos[]=videosDB.map((videosDB)=>new Videos(
            videosDB.id,
            videosDB.title,
            videosDB.time,
            videosDB.data_upload
        ))

        res.status(200).send(videos)
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})