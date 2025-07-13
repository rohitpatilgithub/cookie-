import Admin from "../model/login.model.js";
import { v4 as uuidv4 } from 'uuid';
import { setUser } from "../services/auth.service.js";

export const handleUserLogin = async (req,res) => {
  const { email , password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ message: "Fill the complete details" });
  }
  try {
    const user = await Admin.findOne({ email , password });
    if(!user){
      return res.status(404).json({message : 'No user found'})
    }
    const sessionId = uuidv4();
    setUser(sessionId,user);
    res.cookie('uid',sessionId);
    console.log(sessionId); // cookie is logged here
    return res.status(200).json({message : 'User exists'});
  } catch (error) {
    return res.status(500).send("Something went wrong");
  }
}
