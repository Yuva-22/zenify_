
import { database } from "./config"

export const sendMessage = async(currentUid,reciptentUid,message) =>{

    try{
        return await database.ref("messages/"+currentUid)
            .child(reciptentUid)
            .push({
                currentUid:currentUid,
                reciptentUid:reciptentUid,
                message : message,
            })
    }
    catch(error){
        return error
    }

}

export const ReceiveMessage = async(currentUid,reciptentUid,message) =>{

    try{
        return await database.ref("messages/"+reciptentUid)
            .child(reciptentUid)
            .push({
                currentUid:currentUid,
                reciptentUid:reciptentUid,
                message : message,
            })
    }
    catch(error){
        return error
    }

}