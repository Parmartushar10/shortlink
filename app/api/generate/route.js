import clientPromise from "@/lib/mongodb"   

export async function POST(request) {

    const body = await request.json()
    let client = await clientPromise
    let db = client.db("bitlinks")
    const collection = db.collection("links")

    const doc = await collection.findOne({ shorturl: body.shorturl })
    if(doc){
        return Response.json({ suceess: false, error: true, message: 'Short URL already exists' })
    }

    const result = await collection.insertOne({ 
        url: body.url,
        shorturl: body.shorturl
        })

 return Response.json({ suceess: true, error: false, message: 'URL Generated Successfully' })
}