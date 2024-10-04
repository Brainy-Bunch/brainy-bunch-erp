import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../../../../firebaseConfig";

export async function fetchUserByUid(uid: string) {
    try {
        const db = getFirestore(app); 
        const userDocRef = doc(db, "Users", uid); // Get document reference
        const userDoc = await getDoc(userDocRef); // Fetch document

        if (userDoc.exists()) {
            return userDoc.data(); // Return user data if document exists
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}
