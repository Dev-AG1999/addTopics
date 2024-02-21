import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";

export async function GET(req, res) {


    await connectMongoDB();



    if (req.method === "GET" && req.query && req.query.q) {
        // Search for Topics based on the query parameter
        try {
          const { q } = req.query;
          const searchResult = await Topic.find({
            title: { $regex: new RegExp(q, "i") }, // Case-insensitive search
          });
          res.status(200).json(searchResult);
        } catch (error) {
          console.error("Error searching Topics:", error);
          res.status(500).json({ error: "Internal Server Error" });
        }
      } }
//     // Check if req.query is defined and has the 'query' property
//     if (!req.query || !req.query.query) {
//       if (res) {
//      resstatus = 400;
//         return res.json({ error: 'Bad Request - Missing query parameter' });
//       }
//     }

//     const { query } = req.query;

//     // Check if the query parameter is a valid ObjectId
//     const isObjectId = /^[a-fA-F0-9]{24}$/.test(query);

//     const result = await Topic.find(
//       isObjectId
//         ? { _id: query } // If it's a valid ObjectId, search by _id
//         : {
//             $or: [
//               { title: { $regex: new RegExp(query, 'i') } },
//               { description: { $regex: new RegExp(query, 'i') } },
//             ],
//           } // Otherwise, perform a text search
//     );

//     console.log('Search Result:', result);

//     if (res) {
//    resstatus = 200;
//       return res.json(result);
//     }
//   } catch (error) {
//     console.error('Error in GET request:', error);

//     // Send a more informative error response
//     if (res) {
//    resstatus = 500;
//       return res.json({ error: 'Internal Server Error', details: error.message });
//     }
//   }

